import { motion } from "motion/react";
import { Zap, Mic, ListChecks, Activity, BarChart2, Users, Layers, MessageSquare, Layout } from "lucide-react";

export function MeetingSaaS() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3 font-sans">
      <div className="flex gap-2 h-1/4">
        <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-2 overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <Mic className="w-3 h-3 text-brand-purple" />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-0.5 h-2 bg-brand-purple/40 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-brand-purple" />
          </div>
        </div>
        <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col justify-center">
          <div className="text-[8px] text-white/30 uppercase font-bold mb-1">AI Summary</div>
          <div className="space-y-1">
            <div className="h-1 w-full bg-white/10 rounded" />
            <div className="h-1 w-4/5 bg-white/10 rounded" />
          </div>
        </div>
      </div>
      
      <div className="flex-1 flex gap-2 overflow-hidden">
        <div className="w-2/3 flex flex-col gap-2">
          <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-3 overflow-hidden">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded-full bg-brand-purple/20 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                </div>
                <div className="h-2 w-20 bg-white/10 rounded" />
             </div>
             <div className="space-y-2">
                <div className="h-1.5 w-full bg-white/5 rounded" />
                <div className="h-1.5 w-full bg-white/5 rounded" />
                <div className="h-1.5 w-2/3 bg-white/5 rounded" />
             </div>
          </div>
          <div className="h-12 bg-brand-purple/10 rounded-lg border border-brand-purple/20 flex items-center px-3 gap-2 overflow-hidden group">
            <Zap className="w-3 h-3 text-brand-purple animate-bounce" />
            <div className="text-[9px] font-mono text-brand-purple truncate">Extracting action items...</div>
          </div>
        </div>
        
        <div className="w-1/3 flex flex-col gap-2">
          <div className="bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col gap-1">
             <div className="text-[7px] text-white/40 font-bold uppercase">Participants</div>
             <div className="flex -space-x-1">
                {[1, 2, 3].map(i => <div key={i} className="w-4 h-4 rounded-full border border-black bg-white/10" />)}
             </div>
          </div>
          <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col justify-between">
             <ListChecks className="w-3 h-3 text-white/20" />
             <div className="h-1 w-full bg-brand-purple/20 rounded" />
             <div className="h-1 w-full bg-brand-purple/20 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreatorAnalytics() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3 font-sans">
      <div className="grid grid-cols-3 gap-2 h-1/4">
        {[
          { label: "Reach", val: "1.2M", color: "text-blue-400" },
          { label: "Growth", val: "+24%", color: "text-green-400" },
          { label: "Views", val: "840K", color: "text-purple-400" }
        ].map(item => (
          <div key={item.label} className="bg-white/5 rounded-lg border border-white/5 p-2 flex flex-col justify-end gap-1">
             <div className="text-[7px] text-white/30 uppercase font-bold">{item.label}</div>
             <div className={`text-xs font-bold ${item.color}`}>{item.val}</div>
          </div>
        ))}
      </div>
      
      <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-brand-blue/10 px-2 py-0.5 rounded border border-brand-blue/20 text-[6px] font-bold text-brand-blue">LIVE FORECAST</div>
        <div className="h-full flex flex-col justify-end gap-1">
           <div className="flex items-end gap-1.5 h-20">
              {[30, 45, 35, 60, 40, 75, 55, 90, 70, 85].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 0.8 }}
                  className="flex-1 bg-gradient-to-t from-brand-blue/40 to-brand-blue/10 rounded-t-sm"
                />
              ))}
           </div>
           <div className="h-px w-full bg-white/10" />
        </div>
      </div>
      
      <div className="h-1/5 flex gap-2">
         <div className="flex-1 bg-white/5 rounded-lg border border-white/5 flex items-center px-3 gap-2">
            <Activity className="w-3 h-3 text-brand-blue" />
            <div className="text-[8px] font-mono text-white/20">RETENTION_RATE: 0.82</div>
         </div>
      </div>
    </div>
  );
}

export function CRMAutomation() {
  return (
    <div className="w-full h-full p-4 flex flex-col gap-3 font-sans">
      <div className="flex gap-2 h-1/4">
        <div className="w-1/2 bg-white/5 rounded-lg border border-white/5 p-2 flex items-center gap-2">
           <div className="w-6 h-6 rounded-lg bg-pink-500/10 flex items-center justify-center">
              <Users className="w-3 h-3 text-pink-500" />
           </div>
           <div className="space-y-1">
              <div className="h-1.5 w-12 bg-white/10 rounded" />
              <div className="h-1 w-8 bg-white/5 rounded" />
           </div>
        </div>
        <div className="w-1/2 bg-white/5 rounded-lg border border-white/5 p-2 flex items-center gap-2">
           <div className="w-6 h-6 rounded-lg bg-pink-500/10 flex items-center justify-center">
              <Layers className="w-3 h-3 text-pink-500" />
           </div>
           <div className="space-y-1">
              <div className="h-1.5 w-12 bg-white/10 rounded" />
              <div className="h-1 w-8 bg-white/5 rounded" />
           </div>
        </div>
      </div>
      
      <div className="flex-1 flex gap-2">
         <div className="w-full bg-white/5 rounded-xl border border-white/10 overflow-hidden flex flex-col">
            <div className="h-6 bg-white/5 border-b border-white/5 px-3 flex items-center justify-between">
               <div className="h-1.5 w-16 bg-white/10 rounded" />
               <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            </div>
            <div className="p-3 space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="flex gap-2">
                    <div className="w-4 h-4 rounded bg-white/10" />
                    <div className="space-y-1 flex-1">
                       <div className="h-1.5 w-full bg-white/5 rounded" />
                       <div className="h-1 w-2/3 bg-white/5 rounded" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
      
      <div className="h-1/5 bg-gradient-to-r from-pink-500/20 to-transparent rounded-lg border border-pink-500/20 p-2 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <MessageSquare className="w-3 h-3 text-pink-500" />
            <span className="text-[8px] font-bold text-pink-500 uppercase">AI Auto-Reply Active</span>
         </div>
         <div className="w-8 h-4 rounded-full bg-pink-500/20 p-0.5">
            <div className="w-3 h-3 rounded-full bg-pink-500 ml-auto" />
         </div>
      </div>
    </div>
  );
}
