import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { AnimatedSection } from "./AnimatedSection";
import amit from "../images/amit.jpg";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left py-8 px-4 pt-10"
    >
      <AnimatedSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center"
        >
          <CardContainer className="inter-var flex justify-center w-60">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] sm:w-[18rem] md:w-[20rem] h-auto rounded-2xl p-8 border flex flex-col items-center shadow-xl">
              {/* Circular Profile Image */}
              <CardItem
                translateZ="80"
                className="overflow-hidden rounded-full w-44 h-44 flex justify-center items-center shadow-lg"
              >
                <img
                  src={amit}
                  height="176"
                  width="176"
                  className="w-44 h-44 object-cover rounded-full group-hover/card:shadow-xl transition-all duration-300"
                  alt="profile"
                />
              </CardItem>

              {/* Name & Title */}
              <div className="flex flex-col items-center mt-6 text-center">
                <AnimatedText
                  text="Hi, I'm Amit"
                  className="text-2xl font-bold mb-2"
                />
                <AnimatedText
                  text="Full Stack Developer"
                  className="text-lg text-blue-600 dark:text-gray-300"
                />
              </div>

              {/* Spacing Fix */}
              <div className="mt-2"></div>
            </CardBody>
          </CardContainer>

          <motion.div className="md:w-1/2 md:pl-24" variants={itemVariants}>
            <AnimatedText
              text="Hi, I'm Amit"
              className="text-4xl md:text-6xl font-bold mb-4"
            />
            <AnimatedText
              text="Full Stack Developer"
              className="text-xl md:text-2xl mb-7 text-blue-600 dark:text-gray-300"
            />
            <motion.p
              variants={itemVariants}
              className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
            >
              I'm passionate about creating beautiful and functional web applications that solve real-world problems.
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl inline-block transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
