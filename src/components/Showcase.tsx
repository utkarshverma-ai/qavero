import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Search, Zap, Code, Rocket } from "lucide-react";
import { MeetingSaaS, CreatorAnalytics, CRMAutomation } from "./DashboardMockups";

const steps = [
  { title: "Discovery", icon: Search, desc: "Deep dive into your market and AI possibilities." },
  { title: "Product Strategy", icon: Zap, desc: "Architecting the perfect MVP roadmap." },
  { title: "AI MVP Development", icon: Code, desc: "Rapid building with production-ready code." },
  { title: "Launch & Scale", icon: Rocket, desc: "Going live and iterating based on data." },
];

const projects = [
  {
    title: "AI Meeting Notes SaaS",
    desc: "AI-powered transcription and intelligent meeting summaries for modern teams.",
    tags: ["Next.js", "OpenAI", "Whisper", "Supabase"],
    gradient: "from-brand-purple/20 to-brand-blue/10",
    badge: "Concept Project",
    visual: <MeetingSaaS />,
  },
  {
    title: "Creator Analytics Platform",
    desc: "Predictive analytics and AI-powered growth insights for creators and brands.",
    tags: ["React", "Python", "AWS", "Analytics AI"],
    gradient: "from-brand-blue/20 to-cyan-500/10",
    badge: "Internal Demo",
    visual: <CreatorAnalytics />,
  },
  {
    title: "Smart CRM Automation",
    desc: "AI-driven lead qualification and automated customer workflows.",
    tags: ["Node.js", "LangChain", "Stripe", "Automation AI"],
    gradient: "from-pink-500/20 to-brand-purple/10",
    badge: "Experimental MVP",
    visual: <CRMAutomation />,
  },
];

export default function Showcase() {
  return (
    <section className="py-24 space-y-32">
      
      {/* Process Section */}
      <div id="process" className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-4">Execution Framework</div>
          <h2 className="text-4xl lg:text-5xl font-sans font-bold mb-6 tracking-tighter">Our Build Process</h2>
          <p className="text-white/40 text-lg">From architectural discovery to market launch in record speed.</p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 glass p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors duration-500">
                  <step.icon className="w-8 h-8 text-white group-hover:text-brand-purple transition-colors" />
                </div>
                <div className="absolute top-4 right-4 text-xs font-mono text-white/20">0{index + 1}</div>
                <h3 className="text-xl font-bold mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-blue mb-4">Case Studies</div>
            <h2 className="text-4xl lg:text-5xl font-sans font-bold mb-6 tracking-tighter">Featured Projects</h2>
            <p className="text-white/40 text-sm mb-4 max-w-sm leading-relaxed">Selected internal demos and concept MVPs built to showcase AI-first product engineering.</p>
            <p className="text-white/30 max-w-sm text-sm">Real SaaS products built and architected by our elite team.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[2rem] overflow-hidden glass border border-white/5 flex flex-col bg-[#0A0A0A]/40 hover:border-brand-purple/30 transition-all duration-500"
            >
              {/* Concept Badge */}
              <div className="absolute top-6 right-6 z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="px-3 py-1.5 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 border border-white/10 backdrop-blur-xl group-hover:border-brand-purple/50 transition-all duration-500"
                >
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/60 group-hover:text-white/80 transition-colors">
                    {project.badge}
                  </span>
                </motion.div>
              </div>

              {/* Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, rgba(168, 85, 247, 0.15), transparent 80%)",
                }}
              />

              {/* Project Visual */}
              <div className={cn("h-64 relative overflow-hidden bg-gradient-to-br", project.gradient)}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div 
                    initial={{ y: 20 }}
                    whileHover={{ y: 10, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full glass-card rounded-2xl border border-white/10 shadow-3xl overflow-hidden group-hover:shadow-2xl group-hover:border-white/20 transition-all duration-500"
                  >
                     <div className="w-full h-full bg-[#050505]/60 backdrop-blur-md relative">
                        {project.visual}
                        {/* Glass Reflections */}
                        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                     </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex gap-2 mb-6 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-[9px] font-bold text-white/30 uppercase tracking-widest border border-white/5 group-hover:border-white/10 group-hover:text-white/40 transition-all duration-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-brand-purple transition-colors duration-300">{project.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1 group-hover:text-white/50 transition-colors duration-300">
                  {project.desc}
                </p>
                <div className="pt-6 border-t border-white/5 group-hover:border-brand-purple/20 transition-colors duration-500">
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/50 transition-colors flex items-center gap-3 cursor-default select-none">
                    Concept Project <span className="w-3.5 h-3.5 text-brand-purple/40 group-hover:text-brand-purple/60 transition-colors">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

