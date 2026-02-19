import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  ChevronUp,
  Send,
  Loader2,
} from "lucide-react";

import useAppContext from "../hooks/useAppContext";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

/**
 * Newsletter subscription form data structure.
 * Contains the email address submitted by the user for newsletter signup.
 */
interface NewsletterFormData {
  email: string;
}

/**
 * Footer component with newsletter subscription, dynamic links, and mobile collapsible sections.
 * Features include email validation, toast notifications, React Router integration,
 * social media links with external link handling, and comprehensive accessibility support.
 */
const Footer = () => {
  const { showToast } = useAppContext();
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const handleNewsletterToggle = useCallback(
    () => setIsNewsletterOpen((prev) => !prev),
    [],
  );

  const handleQuickLinksToggle = useCallback(
    () => setIsQuickLinksOpen((prev) => !prev),
    [],
  );

  const handleSupportToggle = useCallback(
    () => setIsSupportOpen((prev) => !prev),
    [],
  );

  const handleContactToggle = useCallback(
    () => setIsContactOpen((prev) => !prev),
    [],
  );

  const onSubmit = useCallback(async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      showToast({
        title: "Successfully Subscribed!",
        description: `Welcome aboard! We'll send updates to ${data.email}`,
        type: "SUCCESS",
      });
      setIsSubscribed(true);
      reset();
    } catch (error) {
      showToast({
        title: "Subscription Failed",
        description: "Please try again later.",
        type: "ERROR",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [showToast]);



  return (
    <footer className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <button
              onClick={handleNewsletterToggle}
              className="md:hidden w-full flex items-center justify-between mb-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-lg p-2"
              aria-expanded={isNewsletterOpen}
              aria-label="Toggle newsletter section"
            >
              <h3 className="text-xl font-bold">Stay Updated</h3>
              {isNewsletterOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <div
              className={cn(
                { block: isNewsletterOpen, hidden: !isNewsletterOpen },
                "md:block space-y-4"
              )}
            >
              <h3 className="text-xl font-bold hidden md:block">
                Stay Updated
              </h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for exclusive deals and travel
                inspiration.
              </p>
              {!isSubscribed ? (
                <form
                  onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                  })}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-white focus:ring-white"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      disabled={isSubmitting}
                      aria-label="Newsletter email address"
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-red-300 text-sm mt-1 text-left"
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-primary-600 hover:bg-gray-100 font-semibold whitespace-nowrap"
                    aria-label="Subscribe to newsletter"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-white font-medium">
                    ✓ You're subscribed! Check your inbox for confirmation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-2xl font-bold">MernHolidays</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Discover amazing hotels, resorts, and accommodations worldwide.
              Book with confidence and enjoy unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <button
              onClick={handleQuickLinksToggle}
              className="md:hidden w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-lg p-2"
              aria-expanded={isQuickLinksOpen}
              aria-label="Toggle Quick Links section"
            >
              <h3 className="text-lg font-semibold">Quick Links</h3>
              {isQuickLinksOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <h3 className="text-lg font-semibold hidden md:block">
              Quick Links
            </h3>
            <ul
              className={cn(
                { block: isQuickLinksOpen, hidden: !isQuickLinksOpen },
                "md:block space-y-2"
              )}
            >
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <button
              onClick={handleSupportToggle}
              className="md:hidden w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-lg p-2"
              aria-expanded={isSupportOpen}
              aria-label="Toggle Support section"
            >
              <h3 className="text-lg font-semibold">Support</h3>
              {isSupportOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <h3 className="text-lg font-semibold hidden md:block">Support</h3>
            <ul
              className={cn(
                { block: isSupportOpen, hidden: !isSupportOpen },
                "md:block space-y-2"
              )}
            >
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Booking Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <button
              onClick={handleContactToggle}
              className="md:hidden w-full flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-300 rounded-lg p-2"
              aria-expanded={isContactOpen}
              aria-label="Toggle Contact section"
            >
              <h3 className="text-lg font-semibold">Contact Us</h3>
              {isContactOpen ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            <h3 className="text-lg font-semibold hidden md:block">
              Contact Us
            </h3>
            <div
              className={cn(
                { block: isContactOpen, hidden: !isContactOpen },
                "md:block space-y-3"
              )}
            >
              <div className="flex items-center space-x-3">
                <Mail
                  className="w-5 h-5 text-primary-300"
                  aria-hidden="true"
                />
                <a
                  href="mailto:support@mernholidays.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  support@mernholidays.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone
                  className="w-5 h-5 text-primary-300"
                  aria-hidden="true"
                />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin
                  className="w-5 h-5 text-primary-300"
                  aria-hidden="true"
                />
                <span className="text-gray-300">
                  123 Travel St, Tourism City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} MernHolidays. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
