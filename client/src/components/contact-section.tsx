import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-sophisticated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blackboard mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Need help? Our support team is here to assist you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-carrot text-white p-3 rounded-lg">
                  <span className="material-icons">phone</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blackboard mb-2">Phone Support</h3>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                  <a 
                    href="tel:0713379230" 
                    className="text-carrot font-semibold hover:text-opacity-80 transition-colors"
                  >
                    0713 379 230
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-carrot text-white p-3 rounded-lg">
                  <span className="material-icons">help_outline</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blackboard mb-2">Quick Balance Check</h3>
                  <p className="text-gray-600">Check your account anytime</p>
                  <p className="text-carrot font-semibold">Dial *648#</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-carrot text-white p-3 rounded-lg">
                  <span className="material-icons">schedule</span>
                </div>
                <div>
                  <h3 className="font-semibold text-blackboard mb-2">Support Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-blackboard mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-blackboard mb-2">
                    Full Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carrot focus:border-carrot transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-blackboard mb-2">
                    Phone Number
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carrot focus:border-carrot transition-colors"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-blackboard mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-carrot focus:border-carrot transition-colors"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-carrot text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all h-auto"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
