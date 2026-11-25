import { motion } from 'motion/react'

/**
 * Animated wrapper — uses motion's native whileInView for reliable,
 * accessible scroll animations with smooth staggered reveals.
 */
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const directionMap = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  const offset = directionMap[direction] || directionMap.up

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
