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
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-4 px-4 bg-gray-50 dark:bg-gray-800">
      <div className=" container mx-auto">
        <AnimatedText
          text="My Skills"
          className="py-2 text-3xl md:text-5xl font-bold mb-8 text-center"
        />
        <AnimatedSection>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                variants={itemVariants}
              >
                <div className="p-6 flex flex-col items-center">
                  <div className="w-20 h-20 mb-4 relative">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <AnimatedText
                    text={skill.name}
                    className="text-xl font-semibold mb-2"
                  />
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600 mb-2">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <AnimatedText
                    text={`${skill.level}%`}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
