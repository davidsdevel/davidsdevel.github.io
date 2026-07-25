'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: (staggerDelay = 0.1) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function StaggerContainer({ children, className = '', staggerDelay = 0.1, ...props }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={staggerDelay}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
