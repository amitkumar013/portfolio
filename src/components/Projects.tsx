import { motion } from 'framer-motion'
import { AnimatedText } from './AnimatedText'
import { AnimatedSection } from './AnimatedSection'
import ebookImg from "../images/ebook.jpg"
import ecommerceImg from "../images/ecommerce.jpg"
import websiteImg from "../images/website.jpg"

const projects = [
  { id: 1, title: 'E-Book', description: 'A brief description of Project 1', image: ebookImg },
  { id: 2, title: 'E-Commerce', description: 'A brief description of Project 2', image: ecommerceImg },
  { id: 3, title: 'Website', description: 'A brief description of Project 3', image: websiteImg },
]

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatedText 
            text="My Projects" 
            className="py-2 text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
          />
        </motion.div>
        
        <AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="overflow-hidden"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                    initial={{ opacity: 0, scale: 1.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                <motion.div 
                  className="p-6"
                  variants={cardVariants}
                >
                  <motion.h3 
                    className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors inline-block"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn More →
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}