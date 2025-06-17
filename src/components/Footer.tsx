import { motion } from "framer-motion";
import { Mail, Heart, ArrowUp, Copy, Check } from "lucide-react";
import { useState } from "react";

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textVariants = {
  initial: { 
    opacity: 1,
    scale: 1,
    color: "inherit"
  },
  hover: {
    scale: 1.05,
    color: "#2563eb",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const linkVariants = {
  initial: { 
    x: 0,
    color: "inherit",
    scale: 1
  },
  hover: {
    x: 10,
    color: "#2563eb",
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const copyButtonVariants = {
  initial: { 
    opacity: 0,
    scale: 0.8
  },
  hover: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("amit013021@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.footer
      className="bg-white dark:bg-gray-900 py-8 relative overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/20 dark:to-blue-900/10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial="initial"
              whileHover="hover"
              variants={textVariants}
            >
              Amit Kumar
            </motion.h3>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <motion.a
              href="mailto:amit013021@gmail.com"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              initial="initial"
              whileHover="hover"
              variants={linkVariants}
            >
              <Mail size={18} />
              <span>amit013021@gmail.com</span>
            </motion.a>
            
            <motion.button
              onClick={handleCopy}
              className="absolute -right-8 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              variants={copyButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.9 }}
            >
              {copied ? (
                <Check size={16} className="text-white" />
              ) : (
                <Copy size={16} className="text-white" />
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-6 text-gray-600 dark:text-gray-400"
        >
          <motion.p 
            className="flex items-center justify-center space-x-1"
            initial="initial"
            whileHover="hover"
            variants={textVariants}
          >
            <span>© {currentYear} Amit Kumar. Made with</span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ 
            scale: 1.1, 
            rotate: 360,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </motion.footer>
  );
}
