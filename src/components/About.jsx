import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Code2,
  Database,
  GraduationCap,
  Layers,
  Lock,
  Server,
  Shield,
  Terminal,
} from 'lucide-react'

const stats = [
  { value: 11, suffix: '+', label: 'Real Projects Built', icon: Layers },
  { value: 10, suffix: '+', label: 'Technologies Used', icon: Database },
  { value: 4, suffix: '+', label: 'Years of Learning', icon: GraduationCap },
]

const expertise = [
  'React.js',
  'Node.js',
  'Express.js',
  'PHP',
  'MongoDB',
  'MySQL',
]

const codeLines = [
  { text: 'const developer = {', delay: 0 },
  { text: '  name: "Nadhii Jemal",', delay: 0.15 },
  { text: '  role: "Full Stack Developer",', delay: 0.3 },
  { text: '  focus: ["Secure", "Scalable", "Modern"],', delay: 0.45 },
  { text: '  stack: ["React", "Node", "MongoDB"],', delay: 0.6 },
  { text: '  status: "Building CSRARS 🔒"', delay: 0.75 },
  { text: '};', delay: 0.9 },
]

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const duration = 1600
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * value)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const GlassCard = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl shadow-lg shadow-slate-200/40 dark:shadow-black/25 ${className}`}
  >
    {children}
  </div>
)

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-950/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
        <div className="absolute bottom-1/4 -left-32 h-64 w-64 rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-[100px]" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-primary-400/10 dark:bg-primary-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-3">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About{' '}
            <span className="bg-gradient-to-r from-primary-600 via-cyan-600 to-emerald-600 dark:from-primary-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Full Stack Web Developer · 4th Year Software Engineering Student
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-14 sm:mb-16">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <GlassCard className="p-6 sm:p-8 lg:p-10 hover:shadow-xl hover:border-primary-400/30 dark:hover:border-primary-500/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/40 border border-primary-200/60 dark:border-primary-800/40">
                  <Code2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Nadhii Jemal
                  </h3>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I am a passionate Full Stack Web Developer and 4th-year Software
                  Engineering student with hands-on experience building scalable, secure,
                  and modern web applications.
                </p>
                <p>
                  I have worked on real-world projects including the{' '}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Haramaya University Red Cross Club Management System
                  </span>{' '}
                  and a{' '}
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Modern Hospital Management System
                  </span>
                  . Currently, I am developing a{' '}
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                    Cyber Security Risk Analysis & Reporting System (CSRARS)
                  </span>{' '}
                  focused on identifying security gaps and generating professional
                  cybersecurity risk reports.
                </p>
                <p>
                  My expertise includes frontend development using React.js and backend
                  development using Node.js, Express.js, PHP, MongoDB, and MySQL.
                </p>
                <p>
                  I focus on creating responsive, user-friendly, secure, and modern
                  applications with clean architecture, professional UI/UX, and efficient
                  system performance.
                </p>
              </div>

              {/* Expertise tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {expertise.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg border border-slate-200/90 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-primary-400/50 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Coding visual */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="relative"
          >
            {/* Cyber accent */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -top-3 -right-2 z-10 items-center gap-2 px-3 py-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 dark:bg-emerald-500/15 backdrop-blur-md"
            >
              <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300">
                security-first
              </span>
            </motion.div>

            <GlassCard className="overflow-hidden hover:shadow-xl transition-shadow duration-500">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-100/80 dark:bg-slate-900/60">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <div className="flex items-center gap-2 ml-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <Terminal className="h-3.5 w-3.5" />
                  developer.ts
                </div>
              </div>

              {/* Code block */}
              <div className="p-5 sm:p-6 font-mono text-sm sm:text-base bg-slate-900 dark:bg-slate-950/90 min-h-[220px]">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + line.delay, duration: 0.4 }}
                    className="leading-7"
                  >
                    <span className="text-slate-600 dark:text-slate-500 select-none mr-3">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={
                        line.text.includes('name') || line.text.includes('role')
                          ? 'text-cyan-400'
                          : line.text.includes('focus') || line.text.includes('stack')
                            ? 'text-emerald-400'
                            : line.text.includes('status')
                              ? 'text-amber-400'
                              : 'text-slate-300'
                      }
                    >
                      {line.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom status bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/40">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Server className="h-3.5 w-3.5 text-primary-500" />
                    Backend Ready
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Lock className="h-3.5 w-3.5 text-emerald-500" />
                    Secure APIs
                  </span>
                </div>
                <span className="text-xs font-mono text-primary-600 dark:text-primary-400">
                  ● Available for hire
                </span>
              </div>
            </GlassCard>

            {/* Decorative floating card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 sm:-left-6 hidden sm:block"
            >
              <div className="px-4 py-3 rounded-xl border border-primary-500/20 bg-primary-500/10 dark:bg-primary-500/15 backdrop-blur-xl shadow-lg">
                <p className="text-xs font-semibold text-primary-700 dark:text-primary-300">
                  Clean Architecture
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  MVC · REST · JWT
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated statistics */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group"
            >
              <GlassCard className="p-6 sm:p-8 text-center hover:shadow-xl hover:border-primary-400/40 dark:hover:border-primary-500/40 transition-all duration-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-cyan-500/5 dark:group-hover:from-primary-500/10 dark:group-hover:to-cyan-500/5 transition-all duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/40 border border-primary-200/60 dark:border-primary-800/40 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary-600 via-cyan-600 to-emerald-600 dark:from-primary-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      inView={isInView}
                    />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
