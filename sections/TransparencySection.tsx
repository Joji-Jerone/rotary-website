import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, BarChart3, FileText } from "lucide-react";
import { CERTIFICATIONS, FINANCIALS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import CardWrapper from "@/components/CardWrapper";

export default function TransparencySection() {
  return (
    <section
      id="transparency"
      className="section-padding bg-white"
      aria-label="Transparency"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Accountability"
          title="Our Commitment to Transparency"
          subtitle={`We believe every donor deserves to know exactly how their contributions are being used. 82 cents of every dollar goes directly to programs that change lives.`}
        />

        {/* ── Full-width community image ── */}
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-10 border border-gray-200">
          <Image
            src="https://picsum.photos/seed/transparency-team/1200/500"
            alt="Rotary Club members at a community event"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/80 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-sm">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-widest mb-2">
                Our Promise
              </p>
              <h3
                className="text-white text-2xl md:text-3xl font-bold leading-snug"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Every Rupee Counts,<br />Every Action Matters
              </h3>
            </div>
          </div>
        </div>

        {/* ── Cards row ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Certifications Card */}
          <CardWrapper className="p-6">
            <h3 className="flex items-center gap-2 text-ngo-black font-bold text-lg mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                <ShieldCheck className="h-4 w-4 text-brand" />
              </div>
              Certifications &amp; Accreditations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-brand-50 border border-brand-100 hover:border-brand hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <ShieldCheck className="h-5 w-5 text-brand mt-0.5 shrink-0" />
                  <div>
                    <Badge className="bg-brand text-white text-xs mb-1">
                      {cert.label}
                    </Badge>
                    <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardWrapper>

          {/* Financial Breakdown Card */}
          <CardWrapper className="p-6">
            <h3 className="flex items-center gap-2 text-ngo-black font-bold text-lg mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-brand" />
              </div>
              How Your Donation Is Used
            </h3>
            <div className="space-y-5">
              {FINANCIALS.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    <span className="text-sm font-bold text-ngo-black">{item.pct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-2 mt-4 pt-4 border-t border-gray-100">
                <FileText className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                <p className="text-xs text-gray-400 leading-relaxed">
                  Financial statements are independently audited by KPMG annually.
                  Full reports are available upon request or on our website.
                </p>
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>
    </section>
  );
}
