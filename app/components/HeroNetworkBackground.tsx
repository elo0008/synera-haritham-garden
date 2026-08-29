"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function HeroNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Accessibility check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check if device supports fine pointer (mouse / desktop)
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Mouse tracking for localized cursor reactivity
    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    // Node count scaled by viewport width
    const getNodeCount = (w: number) => {
      if (w < 640) return 22;
      if (w < 1024) return 34;
      return 48;
    };

    let nodes: NodePoint[] = [];

    const initNodes = () => {
      const count = getNodeCount(width);
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // Extremely slow, gentle continuous ambient drift
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.2 + 2.0, // Increased node size (2.0px – 3.2px)
        });
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initNodes();
      draw();
    };

    // Pointer move handler on hero section
    const handlePointerMove = (e: MouseEvent) => {
      if (!hasFinePointer || prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handlePointerLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const maxAmbientDist = width < 640 ? 100 : 130;
      const cursorRadius = 150;

      // 1. Draw ambient connecting lines between close nodes (Increased opacity & stroke)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxAmbientDist) {
            const alpha = (1 - dist / maxAmbientDist) * 0.26; // Raised ambient line opacity
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(217, 119, 87, ${alpha})`;
            ctx.lineWidth = 0.95;
            ctx.stroke();
          }
        }
      }

      // 2. Draw localized cursor reactive connections (pointer devices only)
      if (mouse.active && !prefersReducedMotion) {
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < cursorRadius) {
            const cursorAlpha = (1 - dist / cursorRadius) * 0.42; // Smooth fade based on proximity
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(234, 140, 105, ${cursorAlpha})`;
            ctx.lineWidth = 1.15;
            ctx.stroke();
          }
        }
      }

      // 3. Draw nodes (Distinct opacity & crisp rendering)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Check if node is near cursor to subtly enhance its visibility
        let extraAlpha = 0;
        if (mouse.active && !prefersReducedMotion) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < cursorRadius) {
            extraAlpha = (1 - dist / cursorRadius) * 0.25;
          }
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 126, 92, ${0.52 + extraAlpha})`;
        ctx.fill();
      }
    };

    const update = () => {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce softly at container boundaries
        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;
      }

      draw();
      animationFrameId = requestAnimationFrame(update);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (hasFinePointer && !prefersReducedMotion) {
      window.addEventListener("mousemove", handlePointerMove);
      window.addEventListener("mouseleave", handlePointerLeave);
    }

    // Only animate if reduced motion is not preferred
    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(update);
    } else {
      draw();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (hasFinePointer) {
        window.removeEventListener("mousemove", handlePointerMove);
        window.removeEventListener("mouseleave", handlePointerLeave);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
