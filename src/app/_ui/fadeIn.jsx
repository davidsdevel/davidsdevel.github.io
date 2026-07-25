'use client'

import { motion } from 'framer-motion'

const directions = {
  up:    { x: 0,  y: 40 },
  down:  { x: 0,  y: -40 },
  left:  { x: -40, y: 0 },
  right: { x: 40,  y: 0 },
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  ...props
}) {
  const offset = directions[direction] || directions.up

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
