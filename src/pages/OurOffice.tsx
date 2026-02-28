import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import officeImg from "@/assets/office-interior.jpg";
import treatmentImg from "@/assets/treatment-room.jpg";
import { Clock, MapPin, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const OurOffice = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={officeImg} alt="Our Office" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-background"
          >
            Our Office
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-display text-foreground mb-6">
                Welcome to <span className="text-primary">Friendly Dental Centre</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our friendly team is committed to providing you with the highest level of professional services and personalized care in a warm and welcoming environment. We believe that building strong relationship with our patients is the key to exceptional dental care, and we look forward to knowing you and your unique needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground text-sm">120 - 5508 Hollybridge Way, Richmond</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:6042738315" className="text-muted-foreground text-sm hover:text-primary transition-colors">(604) 273-8315</a>
                  </div>
                </div>
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

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <img src={treatmentImg} alt="Treatment room" className="w-full rounded-sm shadow-lg mb-6" />
              <div className="rounded-sm overflow-hidden shadow-lg">
                <iframe
                  title="Friendly Dental Centre Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.1325!3d49.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEwJzIxLjAiTiAxMjPCsDA3JzU3LjAiVw!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurOffice;
