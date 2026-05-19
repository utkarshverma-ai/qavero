import { motion } from "motion/react";
import { Rocket, Cpu, Zap, Target } from "lucide-react";

const metrics = [
  { label: "MVPs Built", value: "40+", icon: Rocket, color: "text-brand-purple" },
  { label: "AI Integrations", value: "100+", icon: Cpu, color: "text-brand-blue" },
  { label: "Faster Launch", value: "3x", icon: Zap, color: "text-yellow-500" },
  { label: "Startup Focused", value: "100%", icon: Target, color: "text-green-500" },
];

export default function Metrics() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`mx-auto w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${metric.color}`}>
                <metric.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl font-display font-medium tracking-tight mb-1">{metric.value}</div>
              <div className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
