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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2 group">
              <div className="bg-white p-2 rounded-lg shadow-soft group-hover:shadow-medium transition-all duration-300">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold tracking-tight">MernHolidays</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Discover amazing hotels, resorts, and accommodations worldwide.
              Book with confidence and enjoy unforgettable experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold tracking-tight">Quick Links</h3>
            <nav aria-label="Quick navigation links">
              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/search"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Hotels
                  </a>
                </li>
                <li>
                  <a
                    href="/destinations"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold tracking-tight">Support</h3>
            <nav aria-label="Support links">
              <ul className="space-y-3">
                <li>
                  <a
                    href="/help"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="/booking-guide"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Booking Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/cancellation-policy"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold tracking-tight">Contact Us</h3>
            <address className="not-italic space-y-4">
              <a
                href="mailto:support@mernholidays.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-5 h-5 text-primary-300 group-hover:text-primary-200 transition-colors" />
                <span className="text-sm">support@mernholidays.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 text-primary-300 group-hover:text-primary-200 transition-colors" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Travel St, Tourism City
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} MernHolidays. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
