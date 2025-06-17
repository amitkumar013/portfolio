import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { AnimatedSection } from "./AnimatedSection";
import reactLogo from "../images/react-bk.png";
import nextjs from "../images/nextjs.png"
import nodejs from "../images/nodejs.png"
import ts from "../images/typeScript.png"
import sb from "../images/springBoot.png"
import tailwind from "../images/tailwind.png"

const skills = [
  { name: "React", level: 90, logo: reactLogo},
  { name: "Next.js", level: 65, logo: nextjs},
  { name: "TypeScript", level: 75, logo: ts},
  { name: "Node.js", level: 90, logo: nodejs},
  { name: "Spring Boot", level: 60, logo: sb},
  { name: "Tailwind CSS", level: 80, logo: tailwind},
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    },
  },
};

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
};

const progressBarVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  })
};

const logoVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.5,
    rotate: -180
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatedText
            text="My Skills"
            className="py-2 text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          />
        </motion.div>
        
        <AnimatedSection>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-6 flex flex-col items-center">
                  <motion.div 
                    className="w-20 h-20 mb-4 relative"
                    variants={logoVariants}
                  >
                    <motion.img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="object-contain w-full h-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </motion.div>
                  
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {skill.name}
                  </motion.h3>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-600 mb-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                      variants={progressBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  <motion.span
                    className="text-sm font-medium text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
