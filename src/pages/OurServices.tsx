import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const services = [
  {
    id: "implants",
    name: "Implants",
    icon: "🦷",
    description:
      "Dental implants are a stable and secure surgical option for replacing one or more missing teeth. A dental implant uses an artificial root usually made of titanium. The implant is surgically inserted into the upper or lower jawbone and an artificial tooth is attached to the implant. The implant acts as an anchor to hold the replacement tooth in place.",
  },
  {
    id: "orthodontics",
    name: "Orthodontics",
    icon: "😁",
    description:
      "Whether you are an adult or a teen, a healthy smile with bright, well-aligned teeth can be an important part of your self-image. While well-aligned teeth can make a beautiful and confident smile, the benefits can reach far beyond. Improper alignments can also affect speech, chewing and digestion. In addition, teeth that are not well aligned or overcrowded may be more difficult to clean and cause decay or gum disease.",
  },
  {
    id: "pediatric",
    name: "Pediatric",
    icon: "👶",
    description:
      "We offer children's dentistry services to help your child maintain a healthy smile from an early age. We are experienced in working with children and will make sure your child feels comfortable and at ease during their dental visit. Our children's dentistry services include regular checkups, cleanings, and preventive care to help keep their teeth and gums healthy.",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: "🔧",
    description:
      "Regular dental maintenance, including professional cleanings and comprehensive exams, is critical for maintaining good oral health. Professional cleaning is the most effective way of tackling tartar build-up and removing plaque, and regular cleanings are essential to combat tooth decay. A comprehensive dental exam is also critical to catching dental problems early and preventing them from becoming more serious and costly to treat.",
  },
  {
    id: "restoratives",
    name: "Restoratives",
    icon: "✨",
    description:
      "Our restorative dentistry services can help repair damage caused by decay, injury, or other factors and restore your teeth to their optimal health and function. From filling cavities to root canals to repairing broken or missing teeth with dental implants or bridges, we offer a range of restorative dentistry services to help you regain your smile and confidence.",
  },
  {
    id: "esthetics",
    name: "Esthetics",
    icon: "💎",
    description:
      "We believe that a beautiful smile can boost your confidence and improve your overall quality of life. Our esthetic dentistry services, including veneers, teeth whitening, direct composite bonding, and other cosmetic treatments, can help enhance the appearance of your teeth and give you the smile you've always wanted. From covering up chips or cracks in your teeth with veneers to brightening your smile with professional teeth whitening, we offer a range of esthetic dentistry services to help you achieve the perfect smile.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const OurServices = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display mb-4"
          >
            Our Friendly Services
          </motion.h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            We have the knowledge and experience to achieve your optimal oral health.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="scroll-mt-32"
              >
                <div className={`grid md:grid-cols-[auto_1fr] gap-6 items-start p-8 rounded-sm ${i % 2 === 0 ? "bg-warm" : "bg-card border border-border"}`}>
                  <span className="text-4xl">{service.icon}</span>
                  <div>
                    <h2 className="text-2xl font-display text-foreground mb-4">{service.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="py-16 bg-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display text-foreground mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-2">Call us at <a href="tel:6042738315" className="text-primary font-medium">(604) 273-8315</a></p>
          <p className="text-muted-foreground text-sm">
            or email <a href="mailto:info@friendlydental.ca" className="text-primary">info@friendlydental.ca</a>
            {" / "}
            <a href="mailto:drphwu@gmail.com" className="text-primary">drphwu@gmail.com</a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default OurServices;
