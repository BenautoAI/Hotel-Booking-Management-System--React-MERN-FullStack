import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

// ===== TYPE DEFINITIONS =====
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

// ===== CONFIGURATION DATA =====
const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Hotels", href: "/search" },
  { label: "Destinations", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const SUPPORT_LINKS: FooterLink[] = [
  { label: "Help Center", href: "#" },
  { label: "Booking Guide", href: "#" },
  { label: "Cancellation Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const POLICY_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
];

// ===== REUSABLE SUB-COMPONENTS =====

/**
 * Renders a footer section with title and list of links
 */
const FooterLinkSection = ({ title, links }: FooterSection) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-red-500">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-red-400 hover:text-red-500 transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Renders company branding section with logo and social links
 */
const CompanyInfo = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <div className="bg-white p-2 rounded-lg">
        <Building2 className="w-6 h-6 text-primary-600" />
      </div>
      <span className="text-2xl font-bold text-red-500">MernHolidays</span>
    </div>
    <p className="text-red-400 leading-relaxed">
      Discover amazing hotels, resorts, and accommodations worldwide. Book with
      confidence and enjoy unforgettable experiences.
    </p>
    <div className="flex space-x-4">
      {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
        <a
          key={label}
          href="#"
          className="text-red-400 hover:text-red-500 transition-colors duration-200 hover:scale-110 transform"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  </div>
);

/**
 * Renders contact information with icons
 */
const ContactSection = ({ contacts }: { contacts: ContactInfo[] }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-red-500">Contact Us</h3>
    <div className="space-y-3">
      {contacts.map(({ icon, label, value }) => (
        <div key={label} className="flex items-center space-x-3">
          <div className="text-red-400">{icon}</div>
          <span className="text-red-400">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Renders the bottom footer bar with copyright and policy links
 */
const FooterBottom = () => (
  <div className="border-t border-red-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-red-400 text-sm">
      © 2025 MernHolidays. All rights reserved.
    </p>
    <div className="flex space-x-6">
      {POLICY_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-red-400 hover:text-red-500 text-sm transition-colors duration-200"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

// ===== MAIN FOOTER COMPONENT =====

/**
 * Footer component - renders company info, navigation links, support info, and contact details
 * Responsive grid layout: 1 column on mobile, 2 on tablet, 4 on desktop
 */
const Footer = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "support@mernholidays.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "123 Travel St, Tourism City",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-red-700 to-red-800 text-red-100 mt-auto">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CompanyInfo />
          <FooterLinkSection title="Quick Links" links={QUICK_LINKS} />
          <FooterLinkSection title="Support" links={SUPPORT_LINKS} />
          <ContactSection contacts={contactInfo} />
        </div>

        {/* Bottom Bar */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
