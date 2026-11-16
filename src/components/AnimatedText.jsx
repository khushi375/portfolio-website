import { motion } from 'framer-motion'

export default function AnimatedText({ text, className = '', delay = 0 }) {
  return (
    <div className={`inline-flex flex-wrap gap-1 ${className}`} aria-label={text}>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + index * 0.06 }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
