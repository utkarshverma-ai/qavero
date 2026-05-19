import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import NavbarLogo from "./NavbarLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <NavbarLogo />
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[11px] uppercase tracking-widest font-medium text-white/50 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[12px] font-semibold hover:bg-white/10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              Book a Call
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white/60">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-black/90 border-b border-white/5"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-lg font-medium text-white/60 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full px-5 py-4 rounded-xl bg-white text-black font-bold text-center">
            Book a Call
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
