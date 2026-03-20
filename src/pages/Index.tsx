import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-dental.jpg";
import officeImg from "@/assets/office-interior.jpg";
import treatmentImg from "@/assets/treatment-room.jpg";
import Layout from "@/components/Layout";

const services = [
  { name: "Implants", icon: "🦷", id: "implants" },
  { name: "Orthodontics", icon: "😁", id: "orthodontics" },
  { name: "Pediatric", icon: "👶", id: "pediatric" },
  { name: "Maintenance", icon: "🔧", id: "maintenance" },
  { name: "Restoratives", icon: "✨", id: "restoratives" },
  { name: "Esthetics", icon: "💎", id: "esthetics" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Friendly Dental Centre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-secondary uppercase tracking-[0.2em] text-sm mb-4 font-sans font-medium">
              Richmond Dental Professionals
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-background leading-tight mb-6">
              dental<br />
              for the<br />
              people.
            </h1>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-sans font-medium tracking-wide hover:opacity-90 transition-opacity rounded-sm"
            >
              Book an Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-2">
                Welcome to
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary mb-8">
                Friendly Dental Centre
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationship with our patients is the key to exceptional dental care, and we look forward to knowing you and your unique needs. Thank you for choosing Friendly Dental in achieving your optimal oral health.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <img
                src={officeImg}
                alt="Friendly Dental Office"
                className="w-full rounded-sm shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-20 bg-warm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <img
                src={treatmentImg}
                alt="Treatment room"
                className="w-full rounded-sm shadow-lg"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                Why Trust <span className="text-primary">Friendly Dental?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We understand that visiting the dentist can be stressful. Our highly trained and knowledgeable team is dedicated in providing you with personalized care in a warm and inviting environment. We take time learning about your concerns and answering your questions. Let us take care of your dental needs while keeping your mind at ease.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Our Friendly Services
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              We have the knowledge and experience to achieve your optimal oral health.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  to={`/our-services#${service.id}`}
                  className="block p-8 rounded-sm border border-border hover:border-primary hover:shadow-md transition-all group bg-card"
                >
                  <span className="text-3xl mb-3 block">{service.icon}</span>
                  <span className="text-sm font-sans font-medium tracking-wide text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link
            to="/our-services"
            className="inline-block mt-10 border border-primary text-primary px-8 py-3 text-sm font-sans font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display mb-6">Our Contact</h2>
              <p className="text-primary-foreground/80 mb-8">
                Our team is happy to help you and your family achieving that perfect smile!
              </p>
              <div className="space-y-4">
                <a href="tel:6042738315" className="flex items-center gap-3 text-primary-foreground/90 hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5" /> (604) 273-8315
                </a>
                <a href="https://maps.app.goo.gl/siy6NG1vN6Ckz9zR9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/90 hover:text-secondary transition-colors">
                  <MapPin className="w-5 h-5" /> 120 - 5508 Hollybridge Way, Richmond
                </a>
                <a href="mailto:info@friendlydental.ca" className="flex items-center gap-3 text-primary-foreground/90 hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5" /> info@friendlydental.ca
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display mb-4">Office Hours</h3>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-primary-foreground">Mon – Fri</p>
                    <p>9:00am – 6:00pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-primary-foreground">Saturday</p>
                    <p>9:00am – 5:00pm</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="font-medium text-primary-foreground">Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
