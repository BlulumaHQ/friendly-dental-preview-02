import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const teamMembers = [
  {
    name: "Dr. Patrick Wu",
    title: "D.M.D.",
    credentials: [
      "University of Pennsylvania, School of Dental Medicine, 2009",
      "Clinical assistant professor, University of British Columbia",
      "Associate Fellow, American Association of Implant Dentistry",
    ],
    bio: "Dr. Patrick Wu, an honour graduate from the esteemed University of Pennsylvania, practiced dentistry in New Jersey for four years before returning to his hometown of Vancouver in 2012. Dr. Wu treats patients across all age groups and has profound interest in implant dentistry, orthodontics, pediatrics, and complex restorative cases.",
  },
  {
    name: "Dr. Mike Pan",
    title: "D.D.S.",
    credentials: [
      "Chung Shan Medical University, 2005",
      "National Dental Examining Board of Canada, 2015",
    ],
    bio: "Dr. Pan has depth of knowledge and outstanding skills in orthodontics, implant dentistry, wisdom teeth removal and various aspects of dental treatment. He is best known for clinical problem solving and high proficiency. Outside of work, Dr. Pan is equally talented in golfing, skiing, millwork, and music.",
  },
  {
    name: "Dr. Ivy Lin",
    title: "D.D.S.",
    credentials: [
      "Shanghai Jiao Tong University, 2005",
      "National Dental Examining Board of Canada, 2015",
    ],
    bio: "Dr. Ivy Lin is gentle, caring and detail-oriented delivering dental care to patients of all ages. She has exceptional skills in restoration and providing her patients with relaxing and pleasant treatment experience.",
  },
  {
    name: "Dr. Jie Chen",
    title: "D.D.S.",
    credentials: [
      "D.D.S., Masters in Prosthodontics",
      "Shanghai Jiao Tong University, 2008",
      "National Dental Examining Board of Canada, 2022",
    ],
    bio: "Dr. Chen is a highly skilled and experienced prosthodontist with expertise in cosmetic dentistry, complex restorations, dentures and full mouth rehabilitation. Her meticulous work and gentleness are much appreciated by patients. Dr. Chen can help you design a beautiful smile and restore the confidence in you.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const OurTeam = () => {
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
            Our Friendly Dentists
          </motion.h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Meet our experienced team of dental professionals dedicated to your oral health.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card border border-border rounded-sm p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-display text-xl">
                    {member.name.split(" ").pop()?.[0]}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground">{member.name}</h3>
                <p className="text-primary font-sans text-sm font-medium mb-3">{member.title}</p>
                <ul className="space-y-1 mb-4">
                  {member.credentials.map((cred) => (
                    <li key={cred} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-0.5">–</span> {cred}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurTeam;
