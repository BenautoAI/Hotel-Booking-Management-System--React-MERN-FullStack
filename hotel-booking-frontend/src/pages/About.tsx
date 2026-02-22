import { Building2, Users, Globe, Award, Shield, Clock, Heart, Star } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  const stats = [
    { label: "Hotels Worldwide", value: "10,000+", icon: Building2 },
    { label: "Happy Travelers", value: "1M+", icon: Users },
    { label: "Countries", value: "150+", icon: Globe },
    { label: "Awards Won", value: "25+", icon: Award },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your security and privacy are our top priorities. We ensure all hotels meet our strict quality standards.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "24/7 support to ensure you have the best booking experience and memorable stays worldwide.",
    },
    {
      icon: Clock,
      title: "Best Price Guarantee",
      description: "Find better rates? We'll match them. Book with confidence knowing you're getting the best deal.",
    },
    {
      icon: Star,
      title: "Quality Stays",
      description: "Hand-picked hotels and resorts verified by our team to ensure exceptional experiences.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
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
              About MernHolidays
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Connecting travelers with extraordinary stays since 2020.
              <br className="hidden md:block" />
              Your journey to unforgettable experiences starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe that travel has the power to transform lives. Our mission is to make
              exceptional accommodations accessible to everyone, connecting travelers with
              unique stays that create lasting memories. Through innovation, dedication, and
              a passion for hospitality, we're building a platform that serves millions of
              travelers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your travel experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6 pb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              MernHolidays was founded in 2020 with a simple yet powerful vision: to revolutionize
              the way people discover and book accommodations worldwide. What started as a small
              team of travel enthusiasts has grown into a global platform serving millions of
              travelers.
            </p>
            <p>
              Our founders recognized that booking a hotel shouldn't be complicated or stressful.
              They set out to create a platform that combines cutting-edge technology with
              personalized service, making it easy for anyone to find their perfect stay.
            </p>
            <p>
              Today, we partner with over 10,000 hotels across 150+ countries, offering everything
              from boutique B&Bs to luxury resorts. Our commitment to quality, transparency, and
              customer satisfaction has made us a trusted name in the travel industry.
            </p>
            <p>
              As we continue to grow, our mission remains unchanged: to inspire and enable
              unforgettable travel experiences for everyone. Whether you're planning a weekend
              getaway or a month-long adventure, we're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join millions of travelers who trust MernHolidays for their accommodations
            </p>
            <a
              href="/"
              className="inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Hotels
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
