import Link from "next/link";
import {
  Heart,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, LEGAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ngo-black text-white">
      <div className="container-custom mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Rotary Club
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Dedicated to building a more equitable world through
              community-driven programs in education, health, clean water, and
              sustainable development.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon as keyof typeof SOCIAL_ICONS];
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
              {LEGAL_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/50 hover:text-brand text-sm transition-colors duration-200"
                  >
                    {item}
                  </Link>
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
            &copy; {year} Rotary Club. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Registered Non-Profit 501(c)(3) &bull; EIN: 12-3456789
          </p>
        </div>
      </div>
    </footer>
  );
}
