// ── Navigation Links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "About Us",     href: "#about" },
  { label: "Our Work",     href: "#projects" },
  { label: "Impact",       href: "#impact" },
  { label: "Transparency", href: "#transparency" },
  { label: "Contact",      href: "#contact" },
] as const;

// ── Projects / Our Work ───────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    title: "Clean Water Initiative",
    description:
      "Providing access to safe drinking water in 15 rural communities, installing 40+ boreholes and filtration systems.",
    image: "https://picsum.photos/seed/water1/800/600",
    tag: "Infrastructure",
  },
  {
    id: 2,
    title: "Education for All",
    description:
      "Building schools and funding scholarships for over 2,000 underprivileged children across the region.",
    image: "https://picsum.photos/seed/education2/800/600",
    tag: "Education",
  },
  {
    id: 3,
    title: "Healthcare Outreach",
    description:
      "Mobile medical camps serving 30 remote villages with essential health services and free medicine.",
    image: "https://picsum.photos/seed/health3/800/600",
    tag: "Healthcare",
  },
  {
    id: 4,
    title: "Women Empowerment",
    description:
      "Skill development and microfinance programs enabling 500+ women to launch their own enterprises.",
    image: "https://picsum.photos/seed/women4/800/600",
    tag: "Empowerment",
  },
  {
    id: 5,
    title: "Reforestation Drive",
    description:
      "Planting 100,000 trees and restoring degraded land in partnership with local farming communities.",
    image: "https://picsum.photos/seed/trees5/800/600",
    tag: "Environment",
  },
  {
    id: 6,
    title: "Disaster Relief",
    description:
      "Emergency response and long-term rehabilitation for families affected by floods and earthquakes.",
    image: "https://picsum.photos/seed/relief6/800/600",
    tag: "Relief",
  },
] as const;

// ── Impact / Achievement Stats ────────────────────────────────────────────────
export const IMPACT_STATS = [
  { value: "10K+",  label: "Lives Impacted",    icon: "Users" },
  { value: "50+",   label: "Projects Completed", icon: "CheckCircle" },
  { value: "20+",   label: "Countries Reached",  icon: "Globe" },
  { value: "$2M+",  label: "Funds Raised",       icon: "DollarSign" },
] as const;

// ── Certifications & Trust Signals ───────────────────────────────────────────
export const CERTIFICATIONS = [
  { label: "GuideStar Platinum",  description: "Highest transparency rating awarded" },
  { label: "ISO 9001:2015",       description: "Quality management system certified" },
  { label: "FCRA Registered",     description: "Foreign contribution compliant" },
  { label: "80G Tax Exemption",   description: "All donations are tax-deductible" },
] as const;

export const FINANCIALS = [
  { label: "Program Expenses",     pct: 82, color: "bg-brand" },
  { label: "Administrative Costs", pct: 10, color: "bg-brand-300" },
  { label: "Fundraising Costs",    pct: 8,  color: "bg-brand-100" },
] as const;

// ── Contact Information ───────────────────────────────────────────────────────
export const CONTACT_INFO = {
  address: "123 Humanitarian Ave, Geneva, Switzerland 1211",
  email:   "contact@hopefoundation.org",
  phone:   "+41 22 000 0000",
} as const;

// ── Social Links ──────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { platform: "Twitter",   href: "#", icon: "Twitter" },
  { platform: "Facebook",  href: "#", icon: "Facebook" },
  { platform: "Instagram", href: "#", icon: "Instagram" },
  { platform: "LinkedIn",  href: "#", icon: "Linkedin" },
  { platform: "YouTube",   href: "#", icon: "Youtube" },
] as const;

// ── Donation Amounts ──────────────────────────────────────────────────────────
export const DONATION_AMOUNTS = ["$10", "$25", "$50", "$100", "Custom"] as const;

// ── Footer Legal Links ────────────────────────────────────────────────────────
export const LEGAL_LINKS = [
  "Privacy Policy",
  "Terms of Use",
  "Cookie Policy",
  "Annual Report",
] as const;
