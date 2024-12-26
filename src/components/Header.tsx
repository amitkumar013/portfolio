"use client"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useTheme } from './theme/ThemeProvider'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to ="/" className="text-2xl font-bold">
          Portfolio
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to ={item.href}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
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
            <Link
              key={item.href}
              to ={item.href}
              className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  )
}


// import { useState } from 'react';
// import { Link } from 'react-scroll'; // Smooth scrolling
// import { motion } from 'framer-motion'; // Animations
// import { useTheme } from './theme/ThemeProvider'; // Custom theme context
// import { Sun, Moon, Menu, X } from 'lucide-react'; // Icons

// const navItems = [
//   { href: 'home', label: 'Home' }, // Target section IDs
//   { href: 'about', label: 'About' },
//   { href: 'skills', label: 'Skills' },
//   { href: 'projects', label: 'Projects' },
//   { href: 'contact', label: 'Contact' },
// ];

// export function Header() {
//   const { theme, toggleTheme } = useTheme(); // Theme context
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state

//   return (
//     <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <a href="/" className="text-2xl font-bold">
//           Portfolio
//         </a>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex space-x-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               smooth={true}
//               duration={500}
//               offset={-70} // Offset for fixed header
//               className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Theme Toggle & Mobile Menu Button */}
//         <div className="flex items-center space-x-4">
//           <motion.button
//             onClick={toggleTheme}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
//             whileTap={{ scale: 0.95 }}
//           >
//             {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
//           </motion.button>
//           <button
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <motion.nav
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-white dark:bg-gray-900 py-4"
//         >
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               to={item.href}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </motion.nav>
//       )}
//     </header>
//   );
// }
