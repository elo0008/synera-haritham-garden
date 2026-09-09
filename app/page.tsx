"use client";

import { useState } from "react";
import AnimatedSection from "./components/AnimatedSection";
import HeroNetworkBackground from "./components/HeroNetworkBackground";

/* ─── Inline SVG Icons (Zero Dependencies) ─── */

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconBrowse() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18" />
      <circle cx="7" cy="6" r="0.5" fill="currentColor" />
      <circle cx="10" cy="6" r="0.5" fill="currentColor" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function IconStatus() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function IconTrack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconSmartphone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconEdit() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function IconPrice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

function IconOrders() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconCustomize() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function IconInsights() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 3v18h18" />
      <path d="M18 9l-5 5-4-4-6 6" />
      <polyline points="14 9 18 9 18 13" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconExternalLink() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-400 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ─── Workflow Step Data (Structured Feature Breakdown) ─── */
interface WorkflowStep {
  step: string;
  shortLabel: string;
  title: string;
  tag: string;
  desc: string;
  icon: React.ReactNode;
  highlights: string[];
  caption?: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: "Step 1",
    shortLabel: "Browse Catalog",
    title: "1. Customer Browses Catalogue",
    tag: "Customer View",
    desc: "Customers access your clean storefront link on their mobile phone or scan a QR code at your business. They browse products, view details, and add items to their cart with zero account setup.",
    icon: <IconBrowse />,
    highlights: [
      "Opens directly on mobile or desktop via web link or QR code — no app download required.",
      "Clean product catalogue with item photos, real-time pricing, and categories.",
      "Customers can add, remove, and adjust item quantities in cart with zero registration.",
    ],
  },
  {
    step: "Step 2",
    shortLabel: "WhatsApp Order",
    title: "2. Customer Orders via WhatsApp",
    tag: "Direct Checkout",
    desc: "When ready, the customer taps order and their full item list, quantities, delivery note, and totals format into an instant WhatsApp message directed straight to your business phone.",
    icon: <IconWhatsApp />,
    highlights: [
      "Cart automatically converts into a clean, itemized order summary.",
      "Customer fills in their name and delivery address/note directly on screen.",
      "One tap opens WhatsApp with the pre-formatted order sent straight to your business.",
    ],
  },
  {
    step: "Step 3",
    shortLabel: "Owner Notified",
    title: "3. Owner Sees Order in Dashboard",
    tag: "Owner Alert",
    desc: "You receive the incoming WhatsApp notification immediately while the order simultaneously logs into your private, easy-to-use business control panel.",
    icon: <IconBell />,
    highlights: [
      "Instant WhatsApp alert arrives directly on your business phone.",
      "Order simultaneously records into your private web dashboard with timestamp.",
      "All item details, quantities, totals, and customer notes organized in one view.",
    ],
  },
  {
    step: "Step 4",
    shortLabel: "Update Status",
    title: "4. Owner Updates Order Status",
    tag: "Status Control",
    desc: "With one tap in the dashboard, update order progress from 'Received' to 'Preparing' or 'Dispatched', keeping your workflow organized without complex backends.",
    icon: <IconStatus />,
    highlights: [
      "One-tap status updates (Received → Preparing → Dispatched / Ready).",
      "Keep daily orders organized in a clean queue without complicated spreadsheets.",
      "Status changes sync instantly to the customer's live tracking view.",
    ],
  },
  {
    step: "Step 5",
    shortLabel: "Track Status",
    title: "5. Customer Tracks Status, No Login Needed",
    tag: "Live Tracking",
    desc: "Customers open their dedicated order status link anytime to view live updates on their delivery or pickup — no passwords to remember, no friction.",
    icon: <IconTrack />,
    highlights: [
      "Dedicated order tracking link sent to the customer with their order.",
      "Live order progress updates in real-time as you change status in the dashboard.",
      "Frictionless customer experience with zero password or login requirements.",
    ],
    caption: "From here, final delivery is tracked through the courier's own service.",
  },
];

/* ─── Qualitative Client Reference Badges ─── */
const clientReferenceBadges = [
  "No monthly software fees",
  "Direct WhatsApp ordering",
  "Fully owned, zero platform lock-in",
];

/* ─── Sample Simulator Products ─── */
interface ProductItem {
  id: string;
  name: string;
  price: number;
  emoji: string;
}

const sampleProducts: ProductItem[] = [
  { id: "P1", name: "Monstera Deliciosa", price: 24, emoji: "🪴" },
  { id: "P2", name: "Terracotta Planter Pot", price: 15, emoji: "🏺" },
  { id: "P3", name: "Organic Plant Soil (5kg)", price: 12, emoji: "🌱" },
  { id: "P4", name: "Gardener Care Kit", price: 28, emoji: "✂️" },
];

/* ─── Admin Feature Groups (Structured Feature Display) ─── */
interface AdminFeatureGroup {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const adminFeatureGroups: AdminFeatureGroup[] = [
  {
    title: "Product & Catalogue Management",
    icon: <IconEdit />,
    items: [
      "Add, edit, or remove products anytime with a clean form",
      "Mark items in or out of stock with one switch",
      'Tag each product across multiple categories at once (e.g. a plant can appear under "Indoor," "Low Maintenance," and "Gift Plants" simultaneously)',
      "Add product photos and descriptions for every item",
    ],
  },
  {
    title: "Order Tracking & Fulfillment",
    icon: <IconOrders />,
    items: [
      "View incoming orders in an organized, chronological dashboard",
      "Move orders through five clear stages — Pending, Handled, Paid, Packaged, Dispatched — in one click",
      "Confirm courier cost per order before dispatch, so pricing stays accurate",
      "Message customers directly on WhatsApp straight from the order pipeline — no need to leave the dashboard to follow up",
      "Access customer delivery notes and complete order summaries",
    ],
  },
  {
    title: "Live Pricing Control",
    icon: <IconPrice />,
    items: [
      "Update prices whenever you need to without writing code",
      "Price updates take effect immediately on the live storefront",
      "No developer assistance or redeploy required",
    ],
  },
  {
    title: "Sales & Business Insights",
    icon: <IconInsights />,
    items: [
      "See lifetime and monthly sales totals at a glance",
      "Know how the business is doing without digging through spreadsheets",
      "Basic order and sales breakdown built into the same dashboard",
    ],
  },
  {
    title: "Simple & Independent Control",
    icon: <IconCustomize />,
    items: [
      "Accessible on phone, tablet, or laptop browser",
      "Clean interface designed for non-technical business owners",
      "Zero monthly platform fees or forced software lock-in",
    ],
  },
];

/* ─── Main Pitch Page Component ─── */
export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeAdminFeature, setActiveAdminFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // WhatsApp Sandbox State
  const [selectedProducts, setSelectedProducts] = useState<Record<string, ProductItem>>({
    P1: sampleProducts[0],
    P2: sampleProducts[1],
  });
  const [customerName, setCustomerName] = useState("");
  const [deliveryNote, setDeliveryNote] = useState("");

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleProduct = (prod: ProductItem) => {
    setSelectedProducts((prev) => {
      const next = { ...prev };
      if (next[prod.id]) {
        delete next[prod.id];
      } else {
        next[prod.id] = prod;
      }
      return next;
    });
  };

  const selectedList = Object.values(selectedProducts);
  const totalAmount = selectedList.reduce((sum, item) => sum + item.price, 0);

  const formattedWhatsAppText =
    selectedList.length === 0
      ? "Select sample products on the left to see the generated message..."
      : `🛒 NEW ORDER REQUEST\n-----------------------\nCustomer: ${
          customerName.trim() || "Sample Customer"
        }\nAddress/Note: ${
          deliveryNote.trim() || "Main Street, Unit 4B"
        }\n\nITEMS ORDERED:\n${selectedList
          .map((i) => `• 1x ${i.name} ($${i.price.toFixed(2)})`)
          .join("\n")}\n\nTOTAL: $${totalAmount.toFixed(
          2
        )}\n-----------------------\nPlaced via Synera Storefront`;

  const handleTestSend = () => {
    if (selectedList.length === 0) return;
    const url = `https://wa.me/?text=${encodeURIComponent(formattedWhatsAppText)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const currentStepData = workflowSteps[activeStep];

  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen flex flex-col selection:bg-brand-500 selection:text-neutral-950">
      {/* ═══════════════ 1. FIXED / STICKY NAVBAR (Always Solid Dark) ═══════════════ */}
      <header className="sticky top-0 z-50 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-neutral-50 select-none">
              Synera
            </span>
          </a>

          {/* Clean Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-400 font-medium">
            <a href="#case-study" className="hover:text-neutral-200 transition-colors">
              Case Study
            </a>
            <a href="#workflow" className="hover:text-neutral-200 transition-colors">
              How It Works
            </a>
            <a href="#pwa" className="hover:text-neutral-200 transition-colors">
              App Install
            </a>
            <a href="#simulator" className="hover:text-neutral-200 transition-colors">
              Demo Sandbox
            </a>
            <a href="#owner-dashboard" className="hover:text-neutral-200 transition-colors">
              Owner Panel
            </a>
            <a href="#pricing" className="hover:text-neutral-200 transition-colors">
              What We Build
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://haritham-garden.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-neutral-300 hover:text-brand-400 px-3 py-1.5 transition-colors"
            >
              Live Demo
              <IconExternalLink />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-lift text-xs font-semibold px-4 sm:px-5 py-2 sm:py-2.5 min-h-[38px] sm:min-h-[42px] flex items-center rounded-full bg-brand-500 hover:bg-brand-400 text-neutral-950 transition-colors shadow-sm"
            >
              Contact
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950/98 backdrop-blur-xl px-4 py-4 space-y-1 shadow-2xl transition-all">
            <nav className="flex flex-col space-y-1 text-sm font-medium">
              <a
                href="#case-study"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors"
              >
                Case Study
              </a>
              <a
                href="#workflow"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#pwa"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors"
              >
                App Install
              </a>
              <a
                href="#simulator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors"
              >
                Demo Sandbox
              </a>
              <a
                href="#owner-dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors"
              >
                Owner Panel
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-neutral-300 hover:text-neutral-50 hover:bg-neutral-900 transition-colors"
              >
                What We Build
              </a>
              <div className="pt-2 pb-1 border-t border-neutral-800/80">
                <a
                  href="https://haritham-garden.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-300 hover:text-brand-400 hover:bg-neutral-900 transition-colors"
                >
                  <span>Haritham Live Demo</span>
                  <IconExternalLink />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ═══════════════ 2. HERO SECTION ═══════════════ */}
        <section className="relative min-h-[88svh] sm:min-h-[92svh] flex items-center justify-center overflow-hidden bg-neutral-950">
          {/* Faint animated network nodes background (Hero only) */}
          <HeroNetworkBackground />

          <div className="relative z-10 max-w-3xl mx-auto px-5 text-center pt-10 sm:pt-14 pb-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                Direct-Order Websites for Small Businesses
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] text-neutral-50 tracking-tight">
                A website that actually gets your customers ordering — built for
                how your business really works.
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <p className="mt-5 text-sm sm:text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
                See it live — this is a real, working site we built for a real
                business.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href="https://haritham-garden.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-full bg-brand-500 hover:bg-brand-400 text-neutral-950 font-bold text-sm sm:text-base shadow-md transition-colors"
                >
                  See the Live Demo
                  <IconExternalLink />
                </a>
                <a
                  href="#simulator"
                  className="btn-lift w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 font-semibold text-sm sm:text-base transition-colors"
                >
                  <IconWhatsApp />
                  Try WhatsApp Simulator
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════ 3. HARITHAM GARDENS CASE STUDY CARD ═══════════════ */}
        <section
          id="case-study"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 bg-neutral-900/60 border-y border-neutral-800"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="rounded-3xl border border-neutral-800 bg-neutral-950 p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                  {/* Left Side: Badge + Heading + Paragraph + Qualitative Badges */}
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-500/10 text-brand-400 text-xs font-semibold mb-4 border border-brand-500/20">
                      <IconCheck /> Featured Real-World Client Reference
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-100 mb-4 tracking-tight">
                      Haritham Gardens Direct Ordering Portal
                    </h2>

                    <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm md:text-base mb-6">
                      This is Haritham Gardens, a real business we built the entire
                      ordering system for — customers browse, order, and the owner
                      manages everything from one simple dashboard. No app download
                      required, no complicated checkout, no monthly software fees they
                      can&apos;t control. Whatever you sell — plants, food, clothing,
                      services — the same idea works for you.
                    </p>

                    {/* Qualitative Badges (Replacing numeric stats) */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2">
                      {clientReferenceBadges.map((badge, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium"
                        >
                          <IconCheck />
                          <span>{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: CTA Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
                    <a
                      href="https://haritham-garden.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-lift inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-neutral-100 hover:bg-white text-neutral-950 font-bold text-xs sm:text-sm shadow-md transition-all text-center"
                    >
                      <IconExternalLink />
                      Open Live Storefront
                    </a>
                    <a
                      href="#simulator"
                      className="btn-lift inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm transition-all text-center"
                    >
                      <IconWhatsApp />
                      Interactive Demo Sandbox
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════ 4. HOW IT WORKS (Video-Driven Step-Through) ═══════════════ */}
        <section
          id="workflow"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 md:py-28 bg-neutral-950"
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <span className="section-divider" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-50 text-center tracking-tight">
                How It Works
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 text-center max-w-md mx-auto">
                Tap through each stage to explore how the ordering system flows from customer to owner.
              </p>
            </AnimatedSection>

            {/* Step Selector Buttons (2 columns mobile, 5 across on desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3 mt-10 mb-8">
              {workflowSteps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      idx === 4 ? "col-span-2 sm:col-span-1" : ""
                    } ${
                      isActive
                        ? "bg-neutral-900 border-brand-500 shadow-sm"
                        : "bg-neutral-900/50 border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider ${
                          isActive ? "text-brand-400" : "text-neutral-500"
                        }`}
                      >
                        {s.step}
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isActive ? "bg-brand-400" : "bg-neutral-700"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-semibold block leading-tight ${
                        isActive ? "text-neutral-100" : "text-neutral-400"
                      }`}
                    >
                      {s.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Structured Feature Panel */}
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 sm:p-8 shadow-lg">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-500/15 border border-brand-500/30 flex items-center justify-center text-brand-400">
                      {currentStepData.icon}
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/15 text-brand-400 border border-brand-500/30">
                      {currentStepData.tag}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    {currentStepData.step} of 5
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-neutral-100 mb-2">
                  {currentStepData.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {currentStepData.desc}
                </p>

                {/* Structured Breakdown Card */}
                <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 sm:p-6 space-y-3.5 shadow-inner">
                  <h4 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                    How it operates in practice
                  </h4>
                  <ul className="space-y-3">
                    {currentStepData.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        <span className="w-5 h-5 rounded-md bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                          <IconCheck />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Supporting Caption (Step 5 courier disclaimer) */}
                  {currentStepData.caption && (
                    <div className="mt-4 pt-3.5 border-t border-neutral-800/80 text-[11px] sm:text-xs text-neutral-400 leading-relaxed flex items-center gap-2">
                      <span className="text-brand-400 font-semibold">Note:</span>
                      <span>{currentStepData.caption}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <AnimatedSection delay={200}>
              <p className="mt-8 text-center text-neutral-500 text-xs sm:text-sm">
                One simple flow, start to finish — for both your customers and you.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ═══════════════ 5. STANDALONE PWA / INSTALL TO HOMESCREEN SECTION ═══════════════ */}
        <section
          id="pwa"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 md:py-28 bg-neutral-900/40 border-t border-neutral-800"
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <span className="section-divider" />
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-brand-400 font-semibold text-xs tracking-widest uppercase block mb-1">
                  Progressive Web App
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-50 tracking-tight">
                  Installs like an app with one tap — no app store, no download.
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Customers can save your store directly to their phone&apos;s home screen. It opens instantly in full-screen with your custom brand icon, giving them an app-like ordering experience without the friction of App Store downloads, passwords, or storage space.
                </p>
              </div>
            </AnimatedSection>

            {/* 3-Card Structured Grid (No Video) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              <AnimatedSection delay={100}>
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-sm flex flex-col justify-between card-lift">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                      <IconSmartphone />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-100 mb-2">
                      Home Screen App Icon
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Sits right alongside other apps on iOS and Android. One tap launches your catalogue directly in full-screen view.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={180}>
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-sm flex flex-col justify-between card-lift">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                      <IconDownload />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-100 mb-2">
                      Zero App Store Friction
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      No 30% App Store commissions, no search friction, no waiting for downloads, passwords, or device storage space.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={260}>
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-sm flex flex-col justify-between card-lift">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-4">
                      <IconTrack />
                    </div>
                    <h3 className="text-sm font-bold text-neutral-100 mb-2">
                      Fast Repeat Orders
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Returning customers re-order in seconds right from their phone home screen without navigating mobile browser tabs.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════ 6. INTERACTIVE WHATSAPP ORDER SIMULATOR ═══════════════ */}
        <section
          id="simulator"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 md:py-28 bg-neutral-950 border-t border-neutral-800"
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="section-divider" />
                <span className="text-brand-400 font-semibold text-xs tracking-widest uppercase block mb-1">
                  Interactive Test Sandbox
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-50 tracking-tight">
                  Try the WhatsApp Order Generator
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-neutral-400">
                  Select sample items below to see how product selections convert into structured, instant WhatsApp orders.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Sample Product Picker */}
              <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 sm:p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                  <h3 className="text-sm font-bold text-neutral-100">1. Select Sample Products</h3>
                  <span className="text-[11px] text-neutral-400">{selectedList.length} items chosen</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sampleProducts.map((p) => {
                    const isSelected = !!selectedProducts[p.id];
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => toggleProduct(p)}
                        className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-neutral-950 border-brand-500"
                            : "bg-neutral-950/60 border-neutral-800 hover:border-neutral-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{p.emoji}</span>
                          <div>
                            <p className="text-xs font-semibold text-neutral-100 leading-snug">
                              {p.name}
                            </p>
                            <p className="text-[11px] text-brand-400 font-medium">
                              ${p.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center text-xs transition-colors ${
                            isSelected
                              ? "bg-brand-500 text-neutral-950 font-bold"
                              : "border border-neutral-700 text-transparent"
                          }`}
                        >
                          ✓
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-3 border-t border-neutral-800 space-y-3">
                  <h3 className="text-xs font-semibold text-neutral-300">2. Customer Info (Optional Demo Fields)</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Your Name (e.g. Elena)"
                      className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-brand-500"
                    />
                    <input
                      type="text"
                      value={deliveryNote}
                      onChange={(e) => setDeliveryNote(e.target.value)}
                      placeholder="Delivery Address / Note"
                      className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Live Formatted WhatsApp Output */}
              <div className="lg:col-span-5 rounded-2xl border border-neutral-800 bg-neutral-900/90 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800">
                    <span className="text-xs font-bold text-neutral-200 flex items-center gap-1.5">
                      <IconWhatsApp /> Live WhatsApp Preview
                    </span>
                    <span className="text-[10px] text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      Pre-formatted text
                    </span>
                  </div>

                  <div className="bg-neutral-950 rounded-xl p-3.5 border border-neutral-800 font-mono text-[11px] sm:text-xs text-neutral-300 min-h-[170px] whitespace-pre-wrap leading-relaxed">
                    {formattedWhatsAppText}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-neutral-400 block">Total Price:</span>
                    <span className="text-lg sm:text-xl font-bold text-brand-400">
                      ${totalAmount.toFixed(2)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleTestSend}
                    className="btn-lift inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-neutral-950 font-bold text-xs shadow-sm transition-colors cursor-pointer"
                  >
                    <IconWhatsApp /> Send Test Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ 7. OWNER ADMIN DASHBOARD SECTION ═══════════════ */}
        <section
          id="owner-dashboard"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 md:py-28 bg-neutral-900/50 border-t border-neutral-800"
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <span className="section-divider" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-50 text-center tracking-tight">
                The Owner&apos;s Side
              </h2>
              <p className="mt-3 text-center text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                This is the owner&apos;s side — simple enough to run without any technical background. Manage products, update prices, and track incoming orders from one clean panel.
              </p>
            </AnimatedSection>

            {/* Owner's Side: Master/Detail Layout (Desktop) & Accordion (Mobile) */}
            <div className="mt-10">
              {/* Desktop & Tablet: Two-Column Master/Detail Layout */}
              <div className="hidden md:grid md:grid-cols-12 gap-6 items-start">
                {/* Left Column: Vertical List of 5 Titles (Headings Only) */}
                <div className="md:col-span-5 h-[420px] overflow-y-auto space-y-2.5">
                  {adminFeatureGroups.map((group, i) => {
                    const isActive = (activeAdminFeature >= 0 ? activeAdminFeature : 0) === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveAdminFeature(i)}
                        className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isActive
                            ? "bg-neutral-900 border-brand-500 shadow-sm"
                            : "bg-neutral-950/60 border-neutral-800 hover:bg-neutral-900/60 hover:border-neutral-700"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm transition-colors ${
                              isActive
                                ? "bg-brand-500/15 border border-brand-500/30 text-brand-400"
                                : "bg-neutral-900 border border-neutral-800 text-neutral-400"
                            }`}
                          >
                            {group.icon}
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-semibold tracking-tight transition-colors ${
                              isActive ? "text-neutral-100 font-bold" : "text-neutral-400"
                            }`}
                          >
                            {group.title}
                          </span>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                            isActive ? "bg-brand-400" : "bg-neutral-800"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Right Column: Detail Panel for Selected Feature */}
                <div className="md:col-span-7">
                  {(() => {
                    const activeIndex = activeAdminFeature >= 0 ? activeAdminFeature : 0;
                    const activeGroup = adminFeatureGroups[activeIndex];
                    return (
                      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 shadow-sm h-[420px] flex flex-col">
                        {/* Fixed header — does not scroll */}
                        <div className="px-6 sm:px-8 pt-6 sm:pt-7 pb-4 border-b border-neutral-800 flex items-center justify-between shrink-0">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400">
                              {activeGroup.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight">
                              {activeGroup.title}
                            </h3>
                          </div>
                          <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider shrink-0">
                            {activeIndex + 1} of {adminFeatureGroups.length}
                          </span>
                        </div>

                        {/* Animated content area — re-mounts on key change to replay animation */}
                        <div
                          key={activeIndex}
                          className="owner-panel-enter flex-1 overflow-y-auto px-6 sm:px-8 py-5"
                        >
                          <ul className="space-y-3.5">
                            {activeGroup.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 leading-relaxed"
                              >
                                <span className="w-4 h-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                                  <IconCheck />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Fixed footer */}
                        <div className="px-6 sm:px-8 py-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 shrink-0">
                          <span className="inline-flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                            Real-time owner dashboard
                          </span>
                          <span className="text-neutral-400 font-medium">Simple &amp; non-technical</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Mobile: Accordion (Single Column Stack) */}
              <div className="md:hidden space-y-3">
                {adminFeatureGroups.map((group, i) => {
                  const isOpen = activeAdminFeature === i;
                  return (
                    <div
                      key={i}
                      className={`rounded-xl border transition-all overflow-hidden ${
                        isOpen
                          ? "bg-neutral-900/90 border-brand-500 shadow-sm"
                          : "bg-neutral-950/60 border-neutral-800"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveAdminFeature(isOpen ? -1 : i)}
                        className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                              isOpen
                                ? "bg-brand-500/15 border border-brand-500/30 text-brand-400"
                                : "bg-neutral-900 border border-neutral-800 text-neutral-400"
                            }`}
                          >
                            {group.icon}
                          </div>
                          <span
                            className={`text-xs sm:text-sm font-semibold tracking-tight ${
                              isOpen ? "text-neutral-100 font-bold" : "text-neutral-300"
                            }`}
                          >
                            {group.title}
                          </span>
                        </div>
                        <svg
                          className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180 text-brand-400" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 border-t border-neutral-800/80">
                          <ul className="space-y-2.5 mt-2">
                            {group.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed"
                              >
                                <span className="w-4 h-4 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                                  <IconCheck />
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ 8. WHAT WE CAN BUILD FOR YOU (3 Tiers, No Fake Prices) ═══════════════ */}
        <section
          id="pricing"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 md:py-28 bg-neutral-950 border-t border-neutral-800"
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <span className="section-divider" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-50 text-center tracking-tight">
                What We Can Build for You
              </h2>
            </AnimatedSection>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1: Essentials */}
              <AnimatedSection delay={100}>
                <div className="card-lift h-full rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-500" />
                      <h3 className="text-base sm:text-lg font-bold text-neutral-100">Essentials</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      A full ordering site like the one above: WhatsApp-based ordering, no login needed for customers, installs like an app, you manage everything yourself.
                    </p>
                    <ul className="space-y-2.5 text-xs text-neutral-300 pb-6 border-b border-neutral-800">
                      <li className="flex items-center gap-2">
                        <IconCheck /> WhatsApp-based direct ordering
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> No login required for customers
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Installs like an app (PWA)
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Owner dashboard to manage items & prices
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="btn-lift mt-6 w-full py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-neutral-200 font-semibold text-xs text-center border border-neutral-700 transition-colors"
                  >
                    Inquire About Essentials
                  </a>
                </div>
              </AnimatedSection>

              {/* Tier 2: Growth */}
              <AnimatedSection delay={180}>
                <div className="card-lift h-full rounded-2xl border-2 border-brand-500/80 bg-neutral-900 p-6 sm:p-7 shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-500" />
                      <h3 className="text-base sm:text-lg font-bold text-neutral-100">Growth</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      As your business grows, this can extend to stock alerts, sales insights, discount codes, and other tools tailored to what you actually need.
                    </p>
                    <ul className="space-y-2.5 text-xs text-neutral-300 pb-6 border-b border-neutral-800">
                      <li className="flex items-center gap-2">
                        <IconCheck /> Everything in Essentials
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Low-stock & inventory notifications
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Discount codes & promotion tags
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Sales summary & order insights
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="btn-lift mt-6 w-full py-2.5 rounded-full bg-brand-500 hover:bg-brand-400 text-neutral-950 font-bold text-xs text-center shadow-sm transition-colors"
                  >
                    Discuss Growth Options
                  </a>
                </div>
              </AnimatedSection>

              {/* Tier 3: Beyond that */}
              <AnimatedSection delay={260}>
                <div className="card-lift h-full rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-500" />
                      <h3 className="text-base sm:text-lg font-bold text-neutral-100">Beyond that</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                      Online payments, staff accounts, customer marketing tools, or something entirely specific to your business — if you have an idea, we can scope it and build it.
                    </p>
                    <ul className="space-y-2.5 text-xs text-neutral-300 pb-6 border-b border-neutral-800">
                      <li className="flex items-center gap-2">
                        <IconCheck /> Online payment gateway integration
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Multi-user staff & manager roles
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Tailored custom business workflows
                      </li>
                      <li className="flex items-center gap-2">
                        <IconCheck /> Custom scoped to your requirements
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#contact"
                    className="btn-lift mt-6 w-full py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-neutral-200 font-semibold text-xs text-center border border-neutral-700 transition-colors"
                  >
                    Talk With Us
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ═══════════════ 9. REBUILT TWO-COLUMN CONTACT SECTION ═══════════════ */}
        <section
          id="contact"
          className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 md:py-28 bg-neutral-950 border-t border-neutral-800"
        >
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 p-6 sm:p-10 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Eyebrow + Heading + Supporting Text + Trust Checklist */}
                <div className="lg:col-span-6">
                  <span className="text-brand-400 font-semibold text-xs tracking-widest uppercase block mb-2">
                    START YOUR PROJECT
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight mb-4">
                    Interested in something like this for your business?
                  </h2>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                    We&apos;re Synera — we build simple, affordable websites for small businesses. Happy to walk you through what this could look like for you, no pressure either way.
                  </p>

                  <div className="space-y-3 text-xs text-neutral-300 pb-6 border-b border-neutral-800/80">
                    <div className="flex items-center gap-2.5">
                      <IconCheck />
                      <span>Direct WhatsApp &amp; simple dashboard setup</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <IconCheck />
                      <span>Zero monthly software fees or platform commission</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <IconCheck />
                      <span>No-pressure consultation &amp; live demo walkthrough</span>
                    </div>
                  </div>

                  {/* Direct Contact Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="mailto:synera77@gmail.com"
                      className="btn-lift inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold text-xs transition-colors"
                    >
                      <IconMail />
                      synera77@gmail.com
                    </a>
                    <a
                      href="https://wa.me/919999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-lift inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-semibold text-xs transition-colors"
                    >
                      <IconWhatsApp />
                      WhatsApp us
                    </a>
                  </div>
                </div>

                {/* Right Column: Clean Bordered Form */}
                <div className="lg:col-span-6">
                  {formSubmitted ? (
                    <div className="p-6 rounded-2xl bg-brand-500/10 border border-brand-500/30 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center mx-auto mb-2">
                        ✓
                      </div>
                      <h4 className="text-sm font-bold text-neutral-100">Thank you for reaching out!</h4>
                      <p className="text-xs text-neutral-300">
                        We&apos;ve received your note and will get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          Your Name or Business Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Green Leaf Nursery"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          Email Address or WhatsApp Number
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="email@domain.com or +1 555-0192"
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                          What products/services do you sell?
                        </label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Tell us briefly about what you sell (e.g. plants, baked goods, clothing)..."
                          className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-brand-500 transition-colors"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-lift w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-400 text-neutral-950 font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                      >
                        Request Free Demo &amp; Consultation
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════ 10. REBUILT MINIMAL FOOTER ═══════════════ */}
      <footer className="bg-neutral-950 border-t border-neutral-800/80 py-8 text-neutral-400 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          {/* Left: Logo Mark + Synera Web Studio + Tagline */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-brand-500/20 text-brand-400 font-bold text-xs flex items-center justify-center">
              S
            </div>
            <span className="text-neutral-200 font-bold text-xs">Synera Web Studio</span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-neutral-500 hidden sm:inline">Simple, Affordable Websites for Small Businesses</span>
          </div>

          {/* Middle: Nav Links */}
          <div className="flex items-center gap-5 text-neutral-400 text-[11px] sm:text-xs">
            <a
              href="https://haritham-garden.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-400 transition-colors"
            >
              Haritham Live Demo
            </a>
            <a href="#workflow" className="hover:text-brand-400 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="hover:text-brand-400 transition-colors">
              What We Build
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="text-neutral-600 text-[11px]">
            © {new Date().getFullYear()} Synera. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
