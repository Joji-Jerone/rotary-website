"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShieldCheck,
  ArrowRight,
  Copy,
  Check,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const UPI_ID = "CFST20007693@CUB";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=${UPI_ID}%26pn=Rotary%20Club%26cu=INR`;

export default function DonateSection() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [paid, setPaid] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setOpen(false);
    // Reset state after modal animation ends
    setTimeout(() => setPaid(false), 300);
  };

  return (
    <section
      id="donate"
      className="section-padding bg-brand text-white relative overflow-hidden"
      aria-label="Donate"
    >
      {/* ── Layered decorative background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand to-brand-700" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full pointer-events-none" />

      <div className="container-custom text-center relative z-10">

        {/* ── Pulse icon ── */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-60" />
          <div className="relative w-20 h-20 rounded-full bg-white/15 border border-white/20 flex items-center justify-center shadow-lg">
            <Heart className="h-10 w-10 text-white" fill="white" />
          </div>
        </div>

        {/* ── Eyebrow ── */}
        <p className="text-brand-100 text-sm font-semibold uppercase tracking-widest mb-3">
          Support Our Work
        </p>

        {/* ── Main heading ── */}
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your Contribution Can
          <br className="hidden sm:block" /> Change Lives
        </h2>

        {/* ── Description ── */}
        <p className="text-white/80 max-w-2xl mx-auto mb-5 text-lg leading-relaxed">
          Every contribution you make directly supports initiatives that provide
          food, education, and hope to those in need. Join thousands of supporters
          across <strong className="text-white">India</strong> who are making a
          real difference every day.
        </p>

        {/* ── Catchphrase ── */}
        <p className="text-white/60 italic text-base md:text-lg max-w-xl mx-auto mb-10">
          &ldquo;Your Support Can Rewrite Someone&rsquo;s Future.&rdquo;
        </p>

        {/* ── CTA Button ── */}
        <Button
          onClick={() => setOpen(true)}
          size="lg"
          className="bg-white text-brand hover:bg-white/90 font-bold px-10 py-6 text-lg shadow-2xl rounded-full transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
        >
          Donate Now <ArrowRight className="h-5 w-5" />
        </Button>

        {/* ── Trust line ── */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-6 text-white/55 text-sm">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-white/40" /> Secure payment
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="h-4 w-4 text-white/40" /> UPI enabled
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Check className="h-4 w-4 text-white/40" /> 80G tax benefits available
          </span>
        </div>
      </div>

      {/* ── UPI Payment Modal ── */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent
          className="max-w-sm rounded-2xl border border-gray-200 shadow-2xl p-0 overflow-hidden"
          showCloseButton={!paid}
        >
          {paid ? (
            /* ── Payment confirmed state ── */
            <div className="flex flex-col items-center justify-center px-8 py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
              <h3
                className="text-xl font-bold text-ngo-black mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Thank You! 🙏
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Your generosity is deeply appreciated. We&apos;ll put your
                contribution to work right away.
              </p>
              <Button
                onClick={handleClose}
                className="w-full bg-brand hover:bg-brand-600 text-white rounded-xl font-semibold"
              >
                Close
              </Button>
            </div>
          ) : (
            /* ── QR code state ── */
            <>
              {/* Modal header */}
              <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center">
                    <Heart className="h-4 w-4 text-brand" />
                  </div>
                  <DialogTitle
                    className="text-lg font-bold text-ngo-black"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Donate via UPI
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-500 text-sm">
                  Scan the QR code or use the UPI ID below to complete your donation.
                </DialogDescription>
              </DialogHeader>

              <div className="px-6 py-5 space-y-5">
                {/* QR Code card */}
                <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={QR_URL}
                    alt="UPI QR Code for Rotary Club donation"
                    width={200}
                    height={200}
                    className="rounded-xl border border-gray-200 shadow-sm"
                  />
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Scan using any UPI app
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                      <span
                        key={app}
                        className="text-xs bg-white border border-gray-200 rounded-md px-2 py-0.5 text-gray-500 font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* UPI ID copy row */}
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    UPI ID
                  </p>
                  <div className="flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-xl px-4 py-3">
                    <span className="flex-1 text-sm font-sans font-semibold text-ngo-black tracking-wide">
                      {UPI_ID}
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-700 transition-colors duration-200 shrink-0"
                      aria-label="Copy UPI ID"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span className="text-green-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="px-6 pb-6 space-y-3">
                <Button
                  onClick={() => setPaid(true)}
                  className="w-full bg-brand hover:bg-brand-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 py-5"
                >
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  I have completed the payment
                </Button>
                <p className="text-center text-xs text-gray-400">
                  <ShieldCheck className="inline h-3 w-3 mr-1 text-gray-400" />
                  80G tax receipt will be sent to your registered email
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
