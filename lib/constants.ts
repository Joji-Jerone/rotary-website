// ── Navigation Links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#projects" },
  { label: "Impact", href: "#impact" },
  { label: "Trust", href: "#trust" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

// ── Projects / Our Work ───────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Educational Assistance",
    description:
      "Rotary Sirumugai pays college and school fees for students in and around Sirumugai who genuinely cannot pay them due to unavoidable family circumstances.",
    image: "https://picsum.photos/seed/education2/800/600",
    tag: "Education",
  },
  {
    id: 2,
    title: "Peace Building",
    description:
      "Rotary Sirumugai provides wheelchairs and tricycles to persons with disabilities in and around Sirumugai who are not in a financial position to obtain them on their own.",
    image: "https://picsum.photos/seed/peace2/800/600",
    tag: "Peace",
  },
  {
    id: 3,
    title: "Water, Sanitation, and Hygiene",
    description:
      "For the tribal people in and around Sirumugai locality, our club, along with donors from other Rotary clubs, has provided water pots and baskets to improve sanitation and hygiene.",
    image: "https://picsum.photos/seed/water1/800/600",
    tag: "WASH",
  },
  {
    id: 4,
    title: "Basic Education and Literacy",
    description:
      "For 3 government schools in and around Sirumugai, we sponsor an online self-learning training program for 8th-grade students for the National Means Cum Merit Scholarship Test, and an online self-mock-test program for 12th-grade students preparing for NEET and JEE. For 2025–26, we supported 230 students.",
    image: "https://picsum.photos/seed/literacy4/800/600",
    tag: "Literacy",
  },
  {
    id: 5,
    title: "Maternal and Child Health",
    description:
      "In remote rural areas around Sirumugai, we sponsor \u2018Valar Pirai Kaappom\u2019 — a program providing nutritious food for pregnant women. It has crossed 100+ weeks and benefited more than 50 pregnant women from economically weaker backgrounds.",
    image: "https://picsum.photos/seed/health3/800/600",
    tag: "Health",
  },
  {
    id: 6,
    title: "Supporting the Environment",
    description:
      "We have planted and are maintaining more than 100 trees in and around Sirumugai. We also conduct awareness programs to reduce plastic usage and have removed large amounts of plastic, glass, and waste, ensuring proper disposal through treatment facilities.",
    image: "https://picsum.photos/seed/trees5/800/600",
    tag: "Environment",
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
  "Club Roster",
] as const;
