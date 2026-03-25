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
  mobile: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  mobile?: string;
  subject?: string;
  message?: string;
}

const CONTACT_ITEMS = [
  {
    Icon: MapPin,
    label: "Address",
    key: "address" as const,
    color: "bg-blue-50 text-blue-600",
  },
  {
    Icon: Mail,
    label: "Email",
    key: "email" as const,
    color: "bg-green-50 text-green-600",
  },
  {
    Icon: Phone,
    label: "Phone",
    key: "phone" as const,
    color: "bg-purple-50 text-purple-600",
  },
] as const;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  // Name — required, min 2 chars, only letters & spaces
  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = "Name is required.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  } else if (!/^[A-Za-z\s.'-]+$/.test(trimmedName)) {
    errors.name = "Name can only contain letters, spaces, and hyphens.";
  }

  // Email — optional, but if filled must be valid
  const trimmedEmail = data.email.trim();
  if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address.";
  }

  // Mobile — optional, but if filled must be exactly 10 digits (+91 prefix is shown separately)
  const trimmedMobile = data.mobile.trim();
  if (trimmedMobile) {
    const digitsOnly = trimmedMobile.replace(/[\s\-()]/g, "");
    if (!/^\d{10}$/.test(digitsOnly)) {
      errors.mobile = "Please enter a valid 10-digit mobile number.";
    }
  }

  // Message — required, min 10 chars
  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = "Message is required.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const next = { ...formData, [name]: value };
    setFormData(next);

    // Live-clear error once the field is valid (only if already touched)
    if (touched.has(name)) {
      const fieldErrors = validate(next);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormErrors],
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    setTouched((prev) => new Set(prev).add(name));
    const fieldErrors = validate(formData);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors[name as keyof FormErrors],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched(new Set(["name", "email", "mobile", "subject", "message"]));

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-6 xl:gap-8 max-w-5xl mx-auto">
          {/* ── Contact Info Column ── */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map(({ Icon, label, key, color }) => (
              <CardWrapper key={label} className="p-4" lift={false}>
                <div className="flex gap-4 items-start">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}
                  >
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
                  <p className="text-xs text-gray-500">
                    Mon – Fri, 9am – 6pm IST
                  </p>
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
                  <h3 className="text-xl font-bold text-ngo-black mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 max-w-sm text-sm">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-brand text-brand hover:bg-brand hover:text-white transition-all duration-200"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        mobile: "",
                        subject: "",
                        message: "",
                      });
                      setErrors({});
                      setTouched(new Set());
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl h-11 ${errors.name ? "border-red-400 focus:border-red-400 focus-visible:ring-red-300" : ""}`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl h-11 ${errors.email ? "border-red-400 focus:border-red-400 focus-visible:ring-red-300" : ""}`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-semibold text-gray-700"
                      >
                        Mobile Number
                      </label>
                      <div className={`flex items-center rounded-xl border h-11 overflow-hidden transition-all duration-200 focus-within:ring-2 focus-within:ring-brand ${errors.mobile ? "border-red-400 focus-within:ring-red-300" : "border-gray-200 focus-within:border-brand"}`}>
                        <span className="pl-3 pr-1.5 text-sm text-gray-500 font-medium select-none shrink-0">+91</span>
                        <input
                          id="mobile"
                          name="mobile"
                          type="tel"
                          placeholder="98765 43210"
                          value={formData.mobile}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="flex-1 h-full bg-transparent text-sm outline-none border-none focus:ring-0 placeholder:text-gray-400 pr-3"
                        />
                      </div>
                      {errors.mobile && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl h-11"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your interest in our work, or how you'd like to get involved..."
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`border-gray-200 focus:border-brand focus-visible:ring-brand focus-visible:ring-2 transition-all duration-200 rounded-xl resize-none ${errors.message ? "border-red-400 focus:border-red-400 focus-visible:ring-red-300" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
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
