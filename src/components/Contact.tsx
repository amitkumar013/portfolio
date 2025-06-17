import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'
import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: -20,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

const buttonVariants = {
  idle: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormStatus(Math.random() > 0.5 ? 'sent' : 'error') // Randomly succeed or fail for demonstration
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatedText 
            text="Get in Touch" 
            className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
          />
        </motion.div>

        <motion.div 
          className="bg-white dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-all duration-200"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-all duration-200"
                ></motion.textarea>
              </motion.div>
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={formStatus !== 'idle'}
                  variants={buttonVariants}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'sent' && (
                    <>
                      <CheckCircle className="mr-2" size={18} />
                      Message Sent!
                    </>
                  )}
                  {formStatus === 'error' && (
                    <>
                      <AlertCircle className="mr-2" size={18} />
                      Error. Try Again.
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </div>
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-600 dark:to-gray-700 px-8 py-6 md:px-12 md:py-8"
          >
            <motion.h3 
              className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contact Information
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Feel free to reach out through the form or directly via:
            </motion.p>
            <motion.ul 
              className="mt-4 space-y-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.li 
                className="flex items-center text-gray-600 dark:text-gray-300"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                amit013021@gmail.com
              </motion.li>
              <motion.li 
                className="flex items-center text-gray-600 dark:text-gray-300"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +91 (123) 456-7890
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

