import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Chinese = () => {
  return (
    <Layout>
      <section className="bg-warm py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display text-foreground mb-4"
          >
            歡迎光臨友善牙科中心
          </motion.h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            我們友善的團隊致力於在溫暖和歡迎的環境中為您提供最高水平的專業服務和個性化護理。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-display text-foreground mb-6">關於我們</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              我們相信與患者建立牢固的關係是提供卓越牙科護理的關鍵，我們期待了解您和您的獨特需求。感謝您選擇友善牙科來實現您的最佳口腔健康。
            </p>

            <h2 className="text-2xl font-display text-foreground mb-6">我們的服務</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { name: "植牙", id: "implants" },
                { name: "矯正", id: "orthodontics" },
                { name: "兒童牙科", id: "pediatric" },
                { name: "牙齒保養", id: "maintenance" },
                { name: "修復牙科", id: "restoratives" },
                { name: "美容牙科", id: "esthetics" },
              ].map((s) => (
                <Link
                  key={s.id}
                  to={`/our-services#${s.id}`}
                  className="p-4 border border-border rounded-sm text-center text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-display text-foreground mb-6">聯繫我們</h2>
            <div className="space-y-4 mb-8">
              <a href="tel:6042738315" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5 text-primary" /> (604) 273-8315
              </a>
              <a href="mailto:info@friendlydental.ca" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" /> info@friendlydental.ca
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" /> 120 - 5508 Hollybridge Way, Richmond
              </div>
            </div>

            <div className="bg-warm rounded-sm p-6">
              <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> 營業時間
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>週一至週五</span><span>9:00am – 6:00pm</span></div>
                <div className="flex justify-between"><span>週六</span><span>9:00am – 5:00pm</span></div>
                <div className="flex justify-between"><span>週日</span><span>休息</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Chinese;
