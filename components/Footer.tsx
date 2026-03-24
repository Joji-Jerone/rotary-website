"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
} from "lucide-react";
import RotaryLogo from "@/components/RotaryLogo";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} as const;

/* ── Legal policy content ─────────────────────────────────────────────────── */
const LEGAL_POLICIES: Record<string, { title: string; content: string }> = {
  "Privacy Policy": {
    title: "Privacy Policy",
    content: `Last updated: March 2026

Rotary Club of Sirumugai ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.

Information We Collect
We may collect personal information that you voluntarily provide to us when you make a donation, sign up for our newsletter, volunteer, or contact us through the website. This may include your name, email address, phone number, mailing address, and payment information.

How We Use Your Information
We use the information we collect to:
• Process your donations and issue tax receipts
• Communicate with you about our programs, events, and initiatives
• Respond to your enquiries and requests
• Send periodic newsletters and updates (with your consent)
• Improve our website and services
• Comply with legal and regulatory obligations

Data Protection
We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Payment information is processed through secure, encrypted channels and is never stored on our servers.

Sharing of Information
We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating the website, processing donations, or conducting our activities — provided they agree to keep this information confidential.

Your Rights
You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at sirumugairotarytrust@gmail.com.

Changes to This Policy
We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.`,
  },

  "Terms of Use": {
    title: "Terms of Use",
    content: `Last updated: March 2026

Welcome to the Rotary Club of Sirumugai website. By accessing and using this website, you agree to be bound by these Terms of Use.

Acceptance of Terms
By using this website, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, please do not use the website.

Use of the Website
This website is provided for informational purposes about Rotary Club of Sirumugai and its charitable activities. You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use of the website.

Intellectual Property
All content on this website — including text, graphics, logos, images, and software — is the property of Rotary Club of Sirumugai or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.

Donations
All donations made through this website are voluntary and non-refundable unless otherwise required by law. Donation receipts will be provided for tax-deduction purposes in accordance with applicable Indian tax laws under Section 80G of the Income Tax Act.

Disclaimer
This website and its content are provided "as is" without warranties of any kind, either express or implied. Rotary Club of Sirumugai does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.

Limitation of Liability
Rotary Club of Sirumugai shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website.

Governing Law
These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.

Contact
For any questions regarding these terms, please contact us at sirumugairotarytrust@gmail.com.`,
  },

  "Cookie Policy": {
    title: "Cookie Policy",
    content: `Last updated: March 2026

This Cookie Policy explains how Rotary Club of Sirumugai uses cookies and similar technologies when you visit our website.

What Are Cookies?
Cookies are small text files that are placed on your device when you visit a website. They help the website recognise your device and remember certain information about your visit.

How We Use Cookies
We use cookies for the following purposes:

Essential Cookies — These cookies are necessary for the website to function properly. They enable basic features such as page navigation and access to secure areas of the website. The website cannot function properly without these cookies.

Analytics Cookies — We may use analytics cookies to understand how visitors interact with our website. This helps us improve the website's structure, design, and content. These cookies collect information anonymously.

Preference Cookies — These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalised features.

Third-Party Cookies
We may use third-party services (such as Google Analytics or payment processors) that set their own cookies. We do not control these cookies. Please refer to the respective third-party privacy policies for more information.

Managing Cookies
Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling cookies may affect the functionality of this website.

Changes to This Policy
We may update this Cookie Policy from time to time. Any changes will be posted on this page.

Contact
If you have any questions about our use of cookies, please contact us at sirumugairotarytrust@gmail.com.`,
  },
};

const LEGAL_LINK_KEYS = [
  "Privacy Policy",
  "Terms of Use",
  "Cookie Policy",
  "Club Roster",
] as const;

/* ── Legal Popup Component ────────────────────────────────────────────────── */
function LegalPopup({
  policy,
  onClose,
}: {
  policy: { title: string; content: string };
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-ngo-black">{policy.title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-200"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5 overflow-y-auto flex-1">
          <div className="prose prose-sm max-w-none">
            {policy.content.split("\n\n").map((paragraph, i) => {
              // Check if it's a heading-like line (no bullet, relatively short)
              const trimmed = paragraph.trim();
              if (
                !trimmed.startsWith("•") &&
                !trimmed.startsWith("—") &&
                trimmed.length < 80 &&
                !trimmed.startsWith("Last updated") &&
                i > 0
              ) {
                return (
                  <h3
                    key={i}
                    className="font-semibold text-ngo-black text-sm mt-5 mb-2"
                  >
                    {trimmed}
                  </h3>
                );
              }
              return (
                <p
                  key={i}
                  className="text-gray-600 text-sm leading-relaxed mb-3 whitespace-pre-line"
                >
                  {trimmed}
                </p>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Rotary Club of Sirumugai. All
            rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Footer Component ─────────────────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const handleClose = useCallback(() => setActivePolicy(null), []);

  const policy = activePolicy ? LEGAL_POLICIES[activePolicy] : null;

  return (
    <>
      <footer className="bg-ngo-black text-white">
        <div className="container-custom mx-auto py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-10">
            {/* ── Brand Column ── */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <RotaryLogo size={58} variant="full" dark />
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
                Dedicated to building a more equitable world through
                community-driven programs in education, health, clean water, and
                sustainable development.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => {
                  const Icon =
                    SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS];
                  return (
                    <a
                      key={s.platform}
                      href={s.href}
                      aria-label={`Follow us on ${s.platform}`}
                      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-brand text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Legal Links ── */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {LEGAL_LINK_KEYS.map((item) => (
                  <li key={item}>
                    {item === "Club Roster" ? (
                      <a
                        href="/images/Rotary_Club_Roster.pdf"
                        download="Rotary_Club_Roster.pdf"
                        className="text-white/50 hover:text-brand text-sm transition-colors duration-200 text-left"
                      >
                        {item}
                      </a>
                    ) : (
                      <button
                        onClick={() => setActivePolicy(item)}
                        className="text-white/50 hover:text-brand text-sm transition-colors duration-200 text-left"
                      >
                        {item}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/10">
          <div className="container-custom mx-auto py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/40 text-xs">
              &copy; {year} Rotary Club of Sirumugai. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Powered by{" "}
              <span className="text-white/60 font-medium">
                5Lobes Technologies Pvt Ltd
              </span>
            </p>
          </div>
        </div>
      </footer>

      {/* ── Legal Popup ── */}
      {policy && <LegalPopup policy={policy} onClose={handleClose} />}
    </>
  );
}
