import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: number;
  description: string;
  features: PlanFeature[];
  isRecommended?: boolean;
  buttonText?: string;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for trying out",
    features: [
      { name: "Up to 1 hotel listing", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: false },
      { name: "Priority support", included: false },
      { name: "Featured listings", included: false },
    ],
    isRecommended: false,
    buttonText: "Get Started",
  },
  {
    name: "Professional",
    price: 29,
    description: "Best for growing businesses",
    features: [
      { name: "Up to 10 hotel listings", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Featured listings", included: false },
    ],
    isRecommended: true,
    buttonText: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For large-scale operations",
    features: [
      { name: "Unlimited hotel listings", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Featured listings", included: true },
    ],
    isRecommended: false,
    buttonText: "Contact Sales",
  },
];

const PlanHeader = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce-gentle" />
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Star className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 font-medium">
              Transparent Pricing for All Sizes
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-red-500">Simple, Flexible</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan to grow your hotel business. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-300 hover:scale-105 ${
                plan.isRecommended ? "md:scale-105" : ""
              }`}
            >
              {/* Recommended Badge Background */}
              {plan.isRecommended && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                  <Badge variant="default" className="bg-yellow-400 text-gray-900">
                    ⭐ Recommended
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full p-8 flex flex-col ${
                  plan.isRecommended
                    ? "border-2 border-yellow-400 shadow-large bg-white"
                    : "border border-white/20 bg-white/10 backdrop-blur-sm text-white"
                }`}
              >
                {/* Plan Name and Price */}
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.isRecommended ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      plan.isRecommended ? "text-gray-600" : "text-white/80"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span
                      className={`text-4xl font-bold ${
                        plan.isRecommended ? "text-gray-900" : "text-white"
                      }`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.isRecommended ? "text-gray-600" : "text-white/70"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full mb-8 font-semibold text-lg py-3 ${
                    plan.isRecommended
                      ? "bg-primary-600 text-white hover:bg-primary-700"
                      : "bg-white/20 text-white border border-white/40 hover:bg-white/30"
                  }`}
                  variant={plan.isRecommended ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>

                {/* Features List */}
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          feature.included
                            ? plan.isRecommended
                              ? "text-green-500"
                              : "text-yellow-400"
                            : plan.isRecommended
                            ? "text-gray-300"
                            : "text-white/30"
                        }`}
                      />
                      <span
                        className={`${
                          feature.included
                            ? plan.isRecommended
                              ? "text-gray-900"
                              : "text-white"
                            : plan.isRecommended
                            ? "text-gray-500 line-through"
                            : "text-white/50 line-through"
                        }`}
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* FAQ / CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-white/90 mb-6">
            Need a custom plan? Contact our sales team for enterprise pricing.
          </p>
          <Button
            className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 text-lg font-semibold shadow-large"
            variant="default"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlanHeader;
