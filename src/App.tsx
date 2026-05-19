/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import Showcase from "./components/Showcase";
import FooterSection from "./components/FooterSection";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-brand-dark selection:bg-brand-purple/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-purple z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Showcase />
        <FooterSection />
      </main>

      {/* Global Background Glow */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
}

