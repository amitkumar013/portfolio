"use client"

import { motion } from 'framer-motion'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
 

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  },
  exit: { opacity: 0 }
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <Skills />
    </motion.div>
  )
}
