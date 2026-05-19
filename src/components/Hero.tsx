import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap, BarChart3, Clock } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-purple/20 bg-brand-purple/5 text-brand-purple text-[10px] uppercase tracking-widest font-bold mb-6">
              <span className="w-1 h-1 bg-brand-purple rounded-full"></span>
              <span>Building the next generation of AI SaaS</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-sans font-bold leading-[1.05] tracking-tight mb-6">
              AI-Powered SaaS MVPs <br /> 
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent italic font-serif">Built Fast</span>
            </h1>
            
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[420px]">
              Qavero helps founders design, build, and launch scalable AI-powered products with modern full-stack engineering and deep LLM integrations.
            </p>
            
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:opacity-90 transition-all text-sm"
              >
                Book a Free MVP Call
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-lg transition-all text-sm"
              >
                Start Your MVP
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side: Immersive Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 relative flex items-center justify-center p-4 lg:p-0"
          >
            {/* Glow Base */}
            <div className="absolute w-[120%] h-[80%] bg-brand-blue/5 blur-[120px] rounded-full rotate-12 -z-10" />
            
            {/* Mockup Window */}
            <div className="w-full h-[460px] rounded-2xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col glow-blue">
              <div className="h-10 border-b border-white/10 flex items-center px-4 gap-1">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="ml-4 text-[10px] text-white/30 font-mono">qavero-studio-v1.0 / deploy-pipeline</div>
              </div>
              
              <div className="flex-grow flex">
                {/* Sidebar */}
                <div className="w-12 border-r border-white/5 flex flex-col items-center py-6 gap-6">
                  <div className="w-6 h-6 rounded-md bg-white/5" />
                  <div className="w-6 h-6 rounded-md bg-white/20 shadow-lg shadow-white/10" />
                  <div className="w-6 h-6 rounded-md bg-white/5" />
                </div>
                
                {/* Dashboard Content */}
                <div className="flex-grow p-8 flex flex-col gap-8">
                  <div className="flex justify-between items-start">
                    <div className="space-y-3">
                      <div className="h-4 w-40 bg-white/10 rounded-full" />
                      <div className="h-3 w-64 bg-white/5 rounded-full" />
                    </div>
                    <div className="h-8 px-4 bg-brand-blue/20 border border-brand-blue/30 rounded-lg flex items-center justify-center text-[10px] text-brand-blue font-bold uppercase tracking-widest">
                      Active Node
                    </div>
                  </div>
                  
                  <div className="flex-grow grid grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col justify-end group transition-colors hover:bg-white/10">
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2 font-bold">Success Rate</div>
                      <div className="text-3xl font-mono tracking-tighter">99.8%</div>
                    </div>
                    <div className="bg-white/5 rounded-xl border border-white/5 p-6 flex flex-col justify-end group transition-colors hover:bg-white/10">
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2 font-bold">Inference Time</div>
                      <div className="text-3xl font-mono tracking-tighter">142ms</div>
                    </div>
                  </div>

                  <div className="h-12 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-4 gap-4">
                    <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                    <div className="h-2 flex-grow bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-brand-purple" 
                       />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Widget */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-56 p-5 rounded-2xl border border-white/10 bg-[#121212] shadow-2xl z-20 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue group-hover:rotate-12 transition-transform" />
                <div className="text-[11px] font-bold tracking-tight">AI Agent Config</div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 1.5 }} className="h-full bg-brand-blue" />
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} transition={{ duration: 1.5, delay: 0.5 }} className="h-full bg-brand-purple" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Decorative Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] -z-10" />
    </section>
  );
}

