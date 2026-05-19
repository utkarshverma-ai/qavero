import { motion } from "motion/react";
import { Bot, Layers, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";

const services = [
  {
    title: "AI SaaS MVP Development",
    description: "Rapid development of scalable AI-powered SaaS products. From concept to production-ready application in weeks.",
    icon: Bot,
    gradient: "from-brand-purple/20 to-transparent",
  },
  {
    title: "AI Integrations & Automation",
    description: "OpenAI integrations, custom AI workflows, and intelligent automation systems that give your product an edge.",
    icon: Zap,
    gradient: "from-brand-blue/20 to-transparent",
  },
  {
    title: "Scalable Full-Stack Applications",
    description: "Performance-first cloud-native applications built with modern architecture and standard-setting clean code.",
    icon: Layers,
    gradient: "from-green-500/10 to-transparent",
  },
];

const benefits = [
  "Startup-first execution",
  "AI-native architecture",
  "Fast MVP launches",
  "Clean scalable code",
  "Founder collaboration",
  "Production-ready systems",
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Services Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-bold mb-6 text-white/50"
          >
             Our Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-sans font-bold mb-8 tracking-tighter"
          >
            Elite AI Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            We don't just build apps. We build future-proof AI-native platforms designed to scale to millions of users.
          </motion.p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative p-8 rounded-3xl glass border border-white/5 overflow-hidden transition-all duration-300",
                "hover:border-white/10 hover:shadow-2xl hover:shadow-brand-purple/5"
              )}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.gradient)} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Qavero */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple mb-6">Comparison</div>
            <h2 className="text-3xl lg:text-4xl font-sans font-bold mb-8 tracking-tighter">Why founders choose Qavero over freelancers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                  <span className="font-medium text-white/70">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6">
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-brand-purple animate-pulse" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="h-4 w-32 bg-white/5 rounded" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-full bg-white/5 rounded" />
                <div className="h-3 w-4/5 bg-white/5 rounded" />
                <div className="h-3 w-2/3 bg-white/5 rounded" />
              </div>
              <div className="p-4 bg-brand-purple/10 rounded-2xl border border-brand-purple/20">
                <span className="text-sm font-mono text-brand-purple">AI_LOG: Architecture validated for scalability.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
