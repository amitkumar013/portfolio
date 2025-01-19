import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'
import { AnimatedSection } from './AnimatedSection'
import amit from "../images/amit.jpg"

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

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 pt-16">
      <AnimatedSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div className="md:w-1/2 mb-8 md:mb-0" variants={itemVariants}>
          <div className="w-80 h-80">
              <img
                src={amit}
                alt="Amit"
                className="rounded-full shadow-lg object-cover w-full h-full"
              />
            </div>
          </motion.div>
          <motion.div className="md:w-1/2 md:pl-8" variants={itemVariants}>
            <AnimatedText text="Hi, I'm Amit" className="text-4xl md:text-6xl font-bold mb-4" />
            <AnimatedText text="Full Stack Developer" className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300" />
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
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimatedSection>
    </section>
  )
}


// import { motion } from 'framer-motion'
// import { AnimatedText } from './AnimatedText'
// import { AnimatedSection } from './AnimatedSection'

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// }

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100
//     }
//   }
// }

// export function Hero() {
//   return (
//     <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16">
//       <AnimatedSection>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div variants={itemVariants}>
//             <AnimatedText text="Hi, I'm Your Name" className="text-4xl md:text-6xl font-bold mb-4" />
//           </motion.div>
//           <motion.div variants={itemVariants}>
//             <AnimatedText text="Full Stack Developer" className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300" />
//           </motion.div>
//           <motion.p 
//             variants={itemVariants}
//             className="text-lg mb-8 max-w-2xl mx-auto text-gray-700 dark:text-gray-300"
//           >
//             I'm passionate about creating beautiful and functional web applications that solve real-world problems.
//           </motion.p>
//           <motion.div variants={itemVariants}>
//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors"
//             >
//               Get in Touch
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </AnimatedSection>
//     </section>
//   )
// }

