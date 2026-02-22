import { Check, X, Star, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const Pricing = () => {
  const travellerPlans = [
    {
      name: "Free",
      price: "0",
      period: "forever",
      description: "Perfect for occasional travelers",
      features: [
        "Search all hotels",
        "Basic customer support",
        "Email notifications",
        "Standard booking process",
      ],
      limitations: [
        "No exclusive deals",
        "No priority support",
        "Limited booking history",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "9.99",
      period: "month",
      description: "Best for frequent travelers",
      features: [
        "Everything in Free",
        "Exclusive member deals (up to 20% off)",
        "Priority customer support",
        "Extended booking history",
        "Early access to new hotels",
        "Price drop notifications",
        "Flexible cancellation options",
      ],
      limitations: [],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Business",
      price: "29.99",
      period: "month",
      description: "Ideal for corporate travel",
      features: [
        "Everything in Premium",
        "Multi-user account management",
        "Corporate billing options",
        "Dedicated account manager",
        "Advanced reporting & analytics",
        "Negotiated corporate rates",
        "Unlimited booking modifications",
        "Travel policy enforcement",
      ],
      limitations: [],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const hotelOwnerPlans = [
    {
      name: "Starter",
      price: "49",
      period: "month",
      description: "Perfect for small properties",
      features: [
        "List 1 property",
        "Up to 50 bookings/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard visibility",
      ],
      limitations: [
        "No featured listings",
        "Limited photos (10 max)",
      ],
      cta: "Start Listing",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "149",
      period: "month",
      description: "Best for growing businesses",
      features: [
        "List up to 5 properties",
        "Unlimited bookings",
        "Advanced analytics & insights",
        "Priority support",
        "Featured listing placement",
        "Unlimited photos",
        "Promotional campaigns",
        "Calendar synchronization",
      ],
      limitations: [],
      cta: "Get Started",
      highlighted: true,
      badge: "Recommended",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "custom pricing",
      description: "For hotel chains & large operations",
      features: [
        "Unlimited properties",
        "Unlimited bookings",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "API access",
        "Priority featured placement",
        "Advanced revenue management",
        "Multi-channel management",
      ],
      limitations: [],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all premium plans. If you're not satisfied, contact us for a full refund.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and for enterprise plans, we can arrange invoicing.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent" />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Choose the perfect plan for your needs.
              <br className="hidden md:block" />
              No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Traveller Plans */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-4">
              <Star className="w-5 h-5 text-primary-600 mr-2" />
              <span className="text-primary-600 font-semibold">For Travelers</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Plans</h2>
            <p className="text-xl text-gray-600">
              Unlock exclusive benefits and save on your bookings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {travellerPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.highlighted
                    ? "border-2 border-primary-600 shadow-xl scale-105"
                    : "hover:shadow-lg"
                } transition-all`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary-600 text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary-600 hover:bg-primary-700"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Owner Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary-100 rounded-full px-4 py-2 mb-4">
              <Building2 className="w-5 h-5 text-primary-600 mr-2" />
              <span className="text-primary-600 font-semibold">For Hotel Owners</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Listing Plans</h2>
            <p className="text-xl text-gray-600">
              Grow your business and reach millions of travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hotelOwnerPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.highlighted
                    ? "border-2 border-primary-600 shadow-xl scale-105"
                    : "hover:shadow-lg"
                } transition-all`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary-600 text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    ) : (
                      <>
                        <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                        <span className="text-gray-600 ml-2">/ {plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.limitations.map((limitation, idx) => (
                      <div key={idx} className="flex items-start">
                        <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-primary-600 hover:bg-primary-700"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Premium?</h2>
            <p className="text-xl text-gray-600">
              See how you can save more with our premium memberships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-8 pb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Save Up to 20%</h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium members enjoy exclusive discounts on thousands of hotels worldwide.
                  Average savings of $150 per booking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Priority Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get help when you need it with 24/7 priority support. Average response time
                  under 5 minutes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 pb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Flexible Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free cancellation on most bookings up to 24 hours before check-in. Travel
                  with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-white/90">
              Our team is here to help you choose the right plan for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Sales
              </a>
              <a
                href="/"
                className="inline-block bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
              >
                Explore Hotels
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
