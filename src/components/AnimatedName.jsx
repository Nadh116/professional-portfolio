import { motion } from 'framer-motion'
import { useState } from 'react'

const AnimatedName = () => {
  const [isHovered, setIsHovered] = useState(false)
  const name = "Nedhi Jemal"
  const letters = name.split('')

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      }
    }
  }

  // Individual letter animation
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        duration: 0.6,
      }
    }
  }

  return (
    <div className="relative inline-block">
      {/* Main animated text */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative text-5xl md:text-7xl lg:text-8xl font-bold cursor-pointer select-none"
        style={{
          fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          fontWeight: 900,
          letterSpacing: '-0.025em',
          lineHeight: 0.9,
        }}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute inset-0 opacity-20 -z-10"
          animate={{
            background: [
              'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.6) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(6, 182, 212, 0.3) 100%)',
              'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.6) 0%, rgba(6, 182, 212, 0.4) 50%, rgba(59, 130, 246, 0.3) 100%)',
              'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.6) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(139, 92, 246, 0.3) 100%)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'blur(30px)',
            transform: 'scale(1.3)',
          }}
        />

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 -z-10"
          animate={isHovered ? {
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(6, 182, 212, 0.4)',
              '0 0 30px rgba(139, 92, 246, 0.9), 0 0 60px rgba(6, 182, 212, 0.7), 0 0 90px rgba(59, 130, 246, 0.5)',
              '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)',
            ]
          } : {
            boxShadow: '0 0 0px rgba(59, 130, 246, 0)'
          }}
          transition={{
            duration: 1.5,
            repeat: isHovered ? Infinity : 0,
            ease: "easeInOut"
          }}
        />

        {/* Individual letters */}
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 40%, #06b6d4 80%, #3b82f6 100%)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.1,
              y: -3,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                duration: 0.3
              }
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}

        {/* Shimmer effect overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.8) 50%, transparent 80%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            backgroundPosition: ['-200% 0%', '200% 0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 4,
          }}
        />
      </motion.h1>

      {/* Ambient pulse effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-20"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(25px)',
          transform: 'scale(1.4)',
        }}
      />

      {/* Neon highlight on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        animate={isHovered ? {
          opacity: [0, 0.9, 0],
          scale: [0.98, 1.02, 0.98],
        } : { opacity: 0 }}
        transition={{
          duration: 1.8,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5))',
          filter: 'blur(12px)',
          borderRadius: '10px',
        }}
      />
    </div>
  )
}

export default AnimatedName