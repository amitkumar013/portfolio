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

export function Projects() {
  return (
    <section id="projects" className="py-4 px-4">
      <div className="container mx-auto">
        <AnimatedText text="My Projects" className="py-2 text-3xl md:text-5xl font-bold mb-8 text-center" />
        <AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <AnimatedText text={project.title} className="text-xl font-semibold mb-2" />
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>
                  <motion.a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    Learn More →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}