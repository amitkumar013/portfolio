import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./theme/ThemeProvider";
import { Sun, Moon, Menu, X, Github, Linkedin, Twitter } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold hover:text-blue-600">
          Amit Kumar
        </a>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-400 dark:bg-gray-800"
          >
            <Github
              size={20}
              className="text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-400 dark:bg-gray-800"
          >
            <Linkedin
              size={20}
              className="text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-400 dark:bg-gray-800"
          >
            <Twitter
              size={20}
              className="text-white dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            />
          </a>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-800"
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-gray-900 py-4"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
