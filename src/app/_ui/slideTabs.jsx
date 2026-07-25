'use client'

import { AnimatePresence, motion } from 'framer-motion'

const getSlideDirection = (index, prevIndex) => {
  if (prevIndex === -1) return { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } }
  if (index > prevIndex) return { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } }
  return { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } }
}

export default function SlideTabs({ activeTab, prevIndex, children, className = '' }) {
  const direction = getSlideDirection(activeTab, prevIndex)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={direction.initial}
        animate={direction.animate}
        exit={{ opacity: 0, ...direction.initial }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
