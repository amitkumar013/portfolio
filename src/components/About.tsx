import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

const textVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
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

const titleVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export function About() {
  return (
    <section id="about" className="py-4 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatedText 
            text="About Me" 
            className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
          />
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-start gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="w-full"
            variants={itemVariants}
          >
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 text-justify text-lg"
              variants={textVariants}
            >
              I'm a passionate Full Stack Developer with over 5 years of experience in creating web applications. 
              My journey in the world of programming started when I built my first website at the age of 15, 
              and since then, I've been hooked on the endless possibilities of technology.
            </motion.p>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-4 text-justify text-lg"
              variants={textVariants}
            >
              I specialize in React, Next.js, and Node.js, and I'm always excited to learn new technologies. 
              When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the kitchen.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
