import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@mernholidays.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Travel Street, NY 10001",
      description: "New York, United States",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM",
      description: "Weekend: 10AM-4PM EST",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please fill in all fields before submitting.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We've received your message and will respond within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent" />
        
        <div className="w-full px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Have questions? We're here to help.
              <br className="hidden md:block" />
              Reach out to our team and we'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <info.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 min-h-[150px]"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 mb-6">
                  Before reaching out, you might find your answer in our FAQ section.
                </p>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-gray-900 mb-2">
                        How do I cancel my booking?
                      </h3>
                      <p className="text-gray-600 text-sm">
                        You can cancel your booking from the "My Bookings" page. Cancellation
                        policies vary by hotel, so please review the terms before canceling.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-gray-900 mb-2">
                        What payment methods do you accept?
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We accept all major credit cards, debit cards, and digital payment
                        methods including PayPal and Apple Pay.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-gray-900 mb-2">
                        Is my personal information secure?
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Yes, we use industry-standard encryption and security measures to
                        protect your personal and payment information.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                <CardContent className="pt-8 pb-6">
                  <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="text-white/90 mb-6">
                    Our customer support team is available 24/7 to help you with urgent
                    booking issues or inquiries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="tel:+15551234567"
                      className="inline-flex items-center justify-center bg-white text-primary-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href="mailto:support@mernholidays.com"
                      className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email Support
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Stop by our headquarters in New York City
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 font-medium">Map View Placeholder</p>
              <p className="text-gray-500 text-sm">123 Travel Street, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
