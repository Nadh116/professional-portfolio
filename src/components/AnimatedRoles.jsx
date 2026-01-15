import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const AnimatedRoles = () => {
    const roles = [
        "Full Stack Developer",
        "Software Developer",
        "Software Designer",
        "Nedhi Tech"
    ]

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        }, 4000) // Increased time for character animation

        return () => clearInterval(interval)
    }, [roles.length])

    // Container animation variants
    const containerVariants = {
        enter: {
            opacity: 0,
        },
        center: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08, // Delay between each character
                delayChildren: 0.3,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1, // Reverse order for exit
            }
        }
    }

    // Individual character animation variants
    const characterVariants = {
        enter: {
            opacity: 0,
            y: 30,
            scale: 0.5,
        },
        center: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            y: -30,
            scale: 0.5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.4,
            }
        }
    }

    const currentRole = roles[currentRoleIndex]
    const characters = currentRole.split('')

    return (
        <div className="relative h-12 md:h-16 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentRoleIndex}
                    variants={containerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="flex"
                >
                    {characters.map((char, index) => (
                        <motion.span
                            key={`${currentRoleIndex}-${index}`}
                            variants={characterVariants}
                            className="inline-block text-2xl md:text-3xl font-semibold relative"
                            style={{
                                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)',
                                backgroundSize: '200% 200%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.2))',
                            }}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                backgroundPosition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.1,
                                }
                            }}
                            whileHover={{
                                scale: 1.2,
                                y: -3,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 15,
                                }
                            }}
                        >
                            {char === ' ' ? '\u00A0' : char}

                            {/* Individual character glow */}
                            <motion.span
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'inherit',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    filter: 'blur(6px) brightness(1.3)',
                                    opacity: 0.4,
                                }}
                                animate={{
                                    opacity: [0.4, 0.7, 0.4],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.05,
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        </motion.span>
                    ))}
                </motion.div>
            </AnimatePresence>

            {/* Background accent glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none -z-10"
                animate={{
                    background: [
                        'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
                        'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
                        'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
                    ],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    filter: 'blur(20px)',
                    transform: 'scale(2.2)',
                }}
            />

            {/* Indicator dots */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {roles.map((_, index) => (
                    <motion.div
                        key={index}
                        className="w-1.5 h-1.5 rounded-full"
                        animate={{
                            backgroundColor: index === currentRoleIndex
                                ? 'rgba(59, 130, 246, 0.8)'
                                : 'rgba(156, 163, 175, 0.4)',
                            scale: index === currentRoleIndex ? 1.3 : 1,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default AnimatedRoles