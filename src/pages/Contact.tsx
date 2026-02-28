import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting Friendly Dental Centre. We will get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Our team is happy to help you and your family achieving that perfect smile!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-display text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-8">
                <a href="tel:6042738315" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>(604) 273-8315</span>
                </a>
                <a href="mailto:info@friendlydental.ca" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>info@friendlydental.ca</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>120 - 5508 Hollybridge Way, Richmond</span>
                </a>
              </div>

              <div className="bg-warm rounded-sm p-6">
                <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Office Hours
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between"><span>Monday – Friday</span><span>9:00am – 6:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>9:00am – 5:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-display text-foreground mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Hidden fields */}
                <input type="hidden" name="site_name" value="Friendly Dental Centre" />
                <input type="hidden" name="client_name" value="Friendly Dental Centre" />
                <input type="hidden" name="mode" value="2" />
                <input type="hidden" name="source_url" value="https://friendlydental.ca/" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2.5 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2.5 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2.5 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-sm border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-sm font-sans font-medium text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
