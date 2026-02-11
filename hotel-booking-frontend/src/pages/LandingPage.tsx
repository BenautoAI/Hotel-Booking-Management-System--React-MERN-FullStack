import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  Shield,
  CreditCard,
  HeadphonesIcon,
  CheckCircle2,
  Award,
  TrendingUp,
  Globe,
  Sparkles,
  ArrowRight,
  Quote,
} from "lucide-react";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";
import AdvancedSearch from "../components/AdvancedSearch";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const LandingPage = () => {
  const navigate = useNavigate();
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const handleSearch = (searchData: any) => {
    console.log("Search initiated with:", searchData);
  };

  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description:
        "Your payments are protected with bank-level encryption and security.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: CreditCard,
      title: "Best Price Guarantee",
      description:
        "Find a better price? We'll match it and give you an extra discount.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Our dedicated team is available round the clock to assist you.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: CheckCircle2,
      title: "Free Cancellation",
      description:
        "Plans change? Cancel for free on most bookings up to 24 hours before check-in.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const statistics = [
    { icon: Globe, value: "150+", label: "Countries Covered" },
    { icon: Star, value: "500K+", label: "Happy Travelers" },
    { icon: Award, value: "10K+", label: "Premium Hotels" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment:
        "Absolutely fantastic experience! The booking process was seamless, and the hotel exceeded all expectations. Will definitely use MernHolidays again!",
      image: "SJ",
    },
    {
      name: "Michael Chen",
      location: "Singapore",
      rating: 5,
      comment:
        "Best hotel booking platform I've ever used. Great prices, excellent customer service, and a wide selection of accommodations worldwide.",
      image: "MC",
    },
    {
      name: "Emma Williams",
      location: "London, UK",
      rating: 5,
      comment:
        "The 24/7 support team helped me when I needed to modify my booking last minute. Super responsive and professional. Highly recommend!",
      image: "EW",
    },
  ];

  const whyChooseUs = [
    "Verified hotel reviews from real guests",
    "Instant booking confirmation",
    "Flexible payment options",
    "Exclusive member discounts",
    "No hidden fees or charges",
    "Easy booking management",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Advanced Search */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce-gentle" />
        <div
          className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce-gentle"
          style={{ animationDelay: "1s" }}
        />

        <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-12 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white/90 font-medium">
                Trusted by over 500,000 travelers worldwide
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-red-600">Your Journey Begins</span>
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                With Perfect Stays
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover handpicked hotels, resorts, and unique accommodations
              across 150+ countries.
              <br className="hidden md:block" />
              Book with confidence and create unforgettable memories.
            </p>

            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
              <div className="flex items-center text-white/80">
                <Search className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Smart Search</span>
              </div>
              <div className="flex items-center text-white/80">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Global Destinations</span>
              </div>
              <div className="flex items-center text-white/80">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Flexible Booking</span>
              </div>
              <div className="flex items-center text-white/80">
                <Users className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Advanced Search Component */}
          <div className="max-w-8xl mx-auto">
            <AdvancedSearch onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-100 p-4 rounded-full">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary-100 text-primary-700 hover:bg-primary-100">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book with Confidence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need for a stress-free booking
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-200"
                >
                  <CardContent className="p-6">
                    <div
                      className={`${feature.bgColor} ${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
              Explore Now
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked hotels from the most sought-after locations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {hotels?.slice(0, 6).map((hotel) => (
              <LatestDestinationCard key={hotel._id} hotel={hotel} />
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate("/search")}
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore All Destinations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
              Customer Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real experiences from thousands of satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary-200"
              >
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-10 h-10 text-primary-200" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.comment}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                Our Promise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                More Than Just Bookings
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're committed to making your travel experience exceptional
                from start to finish. Here's what sets us apart:
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-12 h-12 text-yellow-800" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <span className="text-gray-700 font-semibold">
                      Average Rating
                    </span>
                    <div className="flex items-center space-x-2">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      <span className="text-2xl font-bold text-gray-900">
                        4.9
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <div className="text-gray-700 font-semibold mb-2">
                      Total Bookings
                    </div>
                    <div className="text-3xl font-bold text-primary-600">
                      2.5M+
                    </div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <div className="text-gray-700 font-semibold mb-2">
                      Response Time
                    </div>
                    <div className="text-3xl font-bold text-purple-600">
                      {"< 2 min"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-white/90 font-medium">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of happy travelers and book your perfect stay today.
            Get exclusive deals and instant confirmation!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/search")}
              size="lg"
              className="bg-white text-primary-700 hover:bg-gray-100 px-10 py-7 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              Search Hotels Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button
              onClick={() => navigate("/register")}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-700 px-10 py-7 text-xl font-bold rounded-xl transition-all duration-300"
            >
              Sign Up Free
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span>No booking fees</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span>Instant confirmation</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-5 h-5 mr-2" />
              <span>Free cancellation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
