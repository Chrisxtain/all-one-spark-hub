
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would connect to your newsletter service in a real implementation
      toast({
        title: "Success!",
        description: "You're now subscribed to our newsletter.",
      });
      setEmail('');
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-missionblue-100 py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-lg mb-8">
            Subscribe to our newsletter to receive updates, resources, and inspiration for your spiritual journey.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white border-2 focus:border-missionpurple-500"
            />
            <Button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-gray-600 mt-4">
            We respect your privacy and will never share your information.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-missionpurple-100 flex items-center justify-center mr-3">
                <span className="text-lg">🎁</span>
              </div>
              <span className="text-gray-700">Exclusive content</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-missionpurple-100 flex items-center justify-center mr-3">
                <span className="text-lg">🔔</span>
              </div>
              <span className="text-gray-700">Early access</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-missionpurple-100 flex items-center justify-center mr-3">
                <span className="text-lg">📝</span>
              </div>
              <span className="text-gray-700">Monthly insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
