"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, CheckCircle, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import CardWrapper from "@/components/CardWrapper";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_ITEMS = [
  { Icon: MapPin, label: "Address", key: "address" as const, color: "bg-blue-50 text-blue-600" },
  { Icon: Mail,   label: "Email",   key: "email"   as const, color: "bg-green-50 text-green-600" },
  { Icon: Phone,  label: "Phone",   key: "phone"   as const, color: "bg-purple-50 text-purple-600" },
] as const;

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50"
      aria-label="Contact Us"
    >
      <div className="container-custom">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Have questions, want to volunteer, or explore a partnership? We'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {/* ── Contact Info Column ── */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map(({ Icon, label, key, color }) => (
              <CardWrapper key={label} className="p-4" lift={false}>
                <div className="flex gap-4 items-start">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {CONTACT_INFO[key]}
                    </p>
                  </div>
                </div>
              </CardWrapper>
            ))}

            {/* Availability note */}
            <CardWrapper className="p-4" lift={false}>
              <div className="flex gap-3 items-start">
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm text-ngo-black font-semibold mb-0.5">
                    Response within 24 hours
                  </p>
                  <p className="text-xs text-gray-500">Mon – Fri, 9am – 6pm IST</p>
                </div>
              </div>
            </CardWrapper>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:col-span-2">
            <CardWrapper className="p-8" lift={false}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-ngo-black mb-2">Message Sent!</h3>
                  <p className="text-gray-500 max-w-sm text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-brand text-brand hover:bg-brand hover:text-white transition-all duration-200"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl h-11"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your interest in our work, or how you'd like to get involved..."
                      value={formData.message}
                      onChange={handleChange}
                      className="border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand hover:bg-brand-600 text-white font-semibold py-5 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </CardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
