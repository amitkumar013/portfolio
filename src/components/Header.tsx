import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./theme/ThemeProvider";
import { Sun, Moon, Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const socialIconVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.9,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#home" 
          className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Amit Kumar
        </motion.a>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="font-medium dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors relative"
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <motion.a
            href="https://github.com/amitkumar013"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-700 dark:to-gray-800"
            variants={socialIconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Github
              size={20}
              className="text-white dark:text-gray-300"
            />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/amitkumar013021"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-700 dark:to-gray-800"
            variants={socialIconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Linkedin
              size={20}
              className="text-white dark:text-gray-300"
            />
          </motion.a>

          <motion.a
            href="https://x.com/AMIT013021"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-700 dark:to-gray-800"
            variants={socialIconVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Twitter
              size={20}
              className="text-white dark:text-gray-300"
            />
          </motion.a>

          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800"
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          <motion.button
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-4"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
