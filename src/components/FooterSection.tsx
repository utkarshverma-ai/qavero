import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Star, MessageSquare, ArrowRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

const techStack = [
  "Next.js", "React", "Node.js", "OpenAI", 
  "PostgreSQL", "AWS", "Stripe", "Tailwind CSS", "Vercel"
];

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at Stealth AI",
    content: "Qavero built our MVP in 4 weeks. The architecture is solid and we've already scaled to 10k users without a hitch.",
    avatar: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Founder, InsightFlow",
    content: "Their AI expertise is second to none. They didn't just build what I asked, they proposed better AI workflows that saved us thousands.",
    avatar: "SC"
  },
  {
    name: "Mark Thompson",
    role: "Product at Finova",
    content: "Minimal, clean code and elite communication. Qavero is the partner every founder needs to move fast.",
    avatar: "MT"
  }
];

export default function FooterSection() {
  return (
    <div className="space-y-32">
      
      {/* Tech Stack */}
      <section id="stack" className="py-24 max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30 mb-8 font-mono">Integrated Ecosystem</div>
          <h2 className="text-2xl font-display font-medium tracking-tight mb-20">We build with industry-leading standards</h2>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all">
            {techStack.map(tech => (
              <span key={tech} className="text-2xl lg:text-3xl font-display font-bold tracking-tighter hover:text-brand-purple hover:scale-110 transition-all cursor-default relative group/item">
                {tech}
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-brand-purple group-hover/item:w-full transition-all duration-500" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
             <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple mb-4">Founder Feedback</div>
             <h2 className="text-3xl font-sans font-bold tracking-tighter">What venture-backed founders say</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-10 rounded-[2rem] border border-white/5 relative group bg-[#0A0A0A]/60"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-brand-purple text-brand-purple" />
                  ))}
                </div>
                <p className="text-lg text-white/70 italic mb-10 leading-relaxed font-serif tracking-tight">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center font-bold text-brand-purple border border-brand-purple/20 backdrop-blur-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm tracking-tight">{t.name}</div>
                    <div className="text-[9px] text-white/30 uppercase tracking-widest font-bold font-mono">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-40 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 mb-10 px-5 py-2 rounded-full glass border border-white/10 text-[11px] font-bold uppercase tracking-widest"
          >
             <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
             Accepting Q3-Q4 Partnerships
          </motion.div>
          <h2 className="text-6xl lg:text-8xl font-sans font-bold mb-10 leading-[0.9] tracking-tighter">
            Build Your <br /> <span className="italic font-serif bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">AI Future</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto mb-16 leading-relaxed">
            Partner with Qavero to design, build, and scale your AI product with elite engineering standards.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 rounded-2xl bg-white text-black font-bold flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all"
            >
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 rounded-2xl border border-white/10 text-white font-bold backdrop-blur-3xl"
            >
              Contact Engineering
            </motion.button>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-purple/5 blur-[160px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>


      {/* Bottom Bar: Services & Tech (Integration into Footer) */}
      <footer className="relative z-10 px-10 py-12 border-t border-white/5 bg-[#050505]/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Engineering Excellence</p>
              <p className="text-[13px] font-medium text-white/80">42+ Scalable MVPs Built</p>
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Performance First</p>
              <p className="text-[13px] font-medium text-white/80">Fast-Track 6 Week Launch</p>
            </div>
            <div className="hidden md:block h-8 w-px bg-white/10"></div>
            <div className="flex items-center gap-6 opacity-30 grayscale group hover:opacity-100 hover:grayscale-0 transition-all">
              {techStack.slice(0, 5).map(tech => (
                <span key={tech} className="text-[12px] font-bold">{tech}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-white/10 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/5" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-white/40 font-medium italic">Trusted by YC Founders</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Qavero</span>
            </div>
            <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
              &copy; {new Date().getFullYear()} Qavero Studio. All rights reserved.
            </div>
            <div className="flex gap-6 items-center text-white/30">
               <Twitter className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
               <Github className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
               <Linkedin className="w-4 h-4 hover:text-white transition-colors cursor-pointer" />
            </div>
        </div>
      </footer>
    </div>
  );
}
