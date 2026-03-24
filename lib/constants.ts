// ── Navigation Links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Trust", href: "#trust" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Projects / Our Work ───────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Disease Prevention and Treatment",
    description:
      "We built the Laboratory Building, along with toilets for men and women, on the premises of the Sirumugai Primary Health Care Centre and handed it over to district officials. The project cost around $15,000, supported by club members, Rotarians from other clubs, and a District Grant from Rotary District 3203. Since its opening, more than 800 lab tests have been performed on-site.",
    image: "/images/Our-work/Card 1 - Disease Prevention and Treatment.svg",
    tag: "Health",
  },
  {
    id: 2,
    title: "Water, Sanitation, and Hygiene",
    description:
      "For the tribal people in and around Sirumugai locality, our club — along with donors from other Rotary clubs — has provided water pots and baskets to improve sanitation and hygiene.",
    image: "/images/Our-work/Card 2 - Water, Sanitation, and Hygiene.svg",
    tag: "WASH",
  },
  {
    id: 3,
    title: "Basic Education and Literacy",
    description:
      "For 3 government schools in and around Sirumugai, we sponsor an online self-learning program for 8th-grade students for the National Means Cum Merit Scholarship Test, and a self-mock-test program for 12th-grade students preparing for NEET and JEE. For the academic year 2025–26, we supported 230 students.",
    image: "/images/Our-work/Card 3 - Basic Education and Literacy.svg",
    tag: "Education",
  },
  {
    id: 4,
    title: "Maternal and Child Health",
    description:
      "In remote rural areas around Sirumugai, we sponsor \u2018Valar Pirai Kaappom\u2019 \u2014 a program providing nutritious food for pregnant women. It has crossed 100+ weeks and benefited more than 50 pregnant women from poor and lower-profile families.",
    image: "/images/Our-work/Count 4 - Maternal and Child Health.svg",
    tag: "Health",
  },
  {
    id: 5,
    title: "Supporting the Environment",
    description:
      "We have planted and are maintaining more than 100 trees in and around Sirumugai. We also conduct multiple awareness programs to reduce plastic usage and keep our land clean. Across these programs, we have removed tons of plastic, glass bottles, and other materials from Mother Earth and sent the waste to treatment plants.",
    image: "/images/Our-work/Card 5 - Supporting the Environment.svg",
    tag: "Environment",
  },
  {
    id: 6,
    title: "Peace Building",
    description:
      "Rotary Sirumugai provides wheelchairs and tricycles to persons with disabilities in and around Sirumugai who are not in a financial position to obtain them on their own.",
    image: "/images/Our-work/Card 6 - Peace Building.svg",
    tag: "Peace",
  },
  {
    id: 7,
    title: "Educational Assistance",
    description:
      "Rotary Sirumugai pays college and school fees for students in and around Sirumugai who genuinely cannot pay them due to unavoidable family circumstances.",
    image: "/images/Our-work/Card 7 - Educational Assistance.svg",
    tag: "Education",
  },
] as const;

// ── Impact / Achievement Stats ────────────────────────────────────────────────
export const IMPACT_STATS = [
  { value: "35", label: "Active Members", icon: "Users" },
  { value: "200+", label: "Activities Completed", icon: "CheckCircle" },
  { value: "4+", label: "Years of Service", icon: "Globe" },
  { value: "50+", label: "Women Supported", icon: "Heart" },
] as const;

// ── Certifications & Trust Signals ───────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    label: "80G Approved",
    description: "Approval no. ABHTS4005K24CH02 — 2024 to 2029",
  },
  {
    label: "PAN: ABHTS4005K",
    description: "Registered with the Income Tax Department",
  },
  {
    label: "Registered Trust",
    description: "Legally constituted charitable trust",
  },
  {
    label: "IT Act Section 80G",
    description: "All donations are tax-deductible",
  },
] as const;

export const FINANCIALS = [
  { label: "Program Expenses", pct: 82, color: "bg-brand" },
  { label: "Administrative Costs", pct: 10, color: "bg-brand-300" },
  { label: "Fundraising Costs", pct: 8, color: "bg-brand-100" },
] as const;

// ── Contact Information ───────────────────────────────────────────────────────
export const CONTACT_INFO = {
  address:
    "608/2, VOC Nagar, 4th Street, Sirumugai, Coimbatore DT, Tamil Nadu – 641302",
  email: "sirumugairotarytrust@gmail.com",
  phone: "+91 98658 10325",
} as const;

// ── Social Links ──────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { platform: "Twitter", href: "#", icon: "Twitter" },
  { platform: "Facebook", href: "#", icon: "Facebook" },
  { platform: "Instagram", href: "#", icon: "Instagram" },
  { platform: "LinkedIn", href: "#", icon: "Linkedin" },
  { platform: "YouTube", href: "#", icon: "Youtube" },
] as const;

// ── Donation Amounts ──────────────────────────────────────────────────────────
export const DONATION_AMOUNTS = [
  "$10",
  "$25",
  "$50",
  "$100",
  "Custom",
] as const;

// ── Footer Legal Links ────────────────────────────────────────────────────────
export const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Use",
  "Cookie Policy",
] as const;
