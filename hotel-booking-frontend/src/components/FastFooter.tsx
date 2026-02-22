import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FastFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MernHolidays</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover amazing hotels and accommodations worldwide.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 rounded hover:bg-primary-700">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 rounded hover:bg-primary-700">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 rounded hover:bg-primary-700">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors p-2 rounded hover:bg-primary-700">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hotels
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-300" />
                <span className="text-gray-300">support@mernholidays.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-300" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary-300" />
                <span className="text-gray-300">123 Travel St</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-300">
            © 2025 MernHolidays. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FastFooter;
