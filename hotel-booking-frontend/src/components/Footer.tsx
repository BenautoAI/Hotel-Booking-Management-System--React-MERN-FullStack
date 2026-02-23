const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Avatar Section */}
        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-1 shadow-lg">
            {/* Avatar Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
              {/* Placeholder Avatar - Styled div instead of image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-orange-400 flex items-center justify-center text-4xl font-bold text-primary-700">
                {/* Using styled placeholder for visual effect */}
                <svg
                  className="w-full h-full"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Decorative circle background */}
                  <circle cx="100" cy="100" r="95" fill="url(#grad)" />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FCD34D", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#F97316", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  {/* Simple face illustration */}
                  <circle cx="60" cy="70" r="12" fill="#1e1b4b" />
                  <circle cx="140" cy="70" r="12" fill="#1e1b4b" />
                  <path d="M 80 130 Q 100 150 120 130" stroke="#1e1b4b" strokeWidth="4" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hotels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Booking Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Discover amazing hotels, resorts, and accommodations worldwide.
              Book with confidence and enjoy unforgettable experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Email:</p>
              <p className="text-gray-400">support@mernholidays.com</p>
              <p className="text-gray-300 mt-3">Phone:</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 MernHolidays. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
