import { motion } from "motion/react";

export default function NavbarLogo() {
  return (
    <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center cursor-pointer"
    >
      <img
        src="/qavero_logo.svg"
        alt="Qavero"
        className="h-8 w-auto"
      />
    </motion.a>
  );
}
