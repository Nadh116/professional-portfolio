import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Github,
  GraduationCap,
  HeartPulse,
  Linkedin,
  Lock,
  Mail,
  Shield,
  Sparkles,
  Stethoscope,
  User,
} from 'lucide-react'
import { SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiReact } from 'react-icons/si'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const techStack = [
  { name: 'React.js', icon: SiReact, color: 'text-cyan-500 dark:text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600 dark:text-green-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-sky-600 dark:text-sky-400' },
  { name: 'PHP', icon: SiPhp, color: 'text-indigo-500 dark:text-indigo-400' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/nadh116', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/nadhii-jemal', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nadhiijemal503@gmail.com', label: 'Email' },
]

const featuredProjects = [
  {
    title: 'Haramaya University Red Cross Club Management System',
    description:
      'A modern web-based management platform developed for Haramaya University Red Cross Club to manage members, events, announcements, activities, and organizational operations efficiently with a clean and responsive interface.',
    icon: HeartPulse,
    accent: 'from-rose-500/20 to-red-600/10',
    border: 'border-rose-500/25 hover:border-rose-400/50',
    iconColor: 'text-rose-500 dark:text-rose-400',
    tag: 'Management System',
  },
  {
    title: 'Modern Hospital Management System',
    description:
      'A complete healthcare management platform designed to manage patients, doctors, appointments, medical records, and hospital operations efficiently through a secure and user-friendly system.',
    icon: Stethoscope,
    accent: 'from-teal-500/20 to-cyan-600/10',
    border: 'border-teal-500/25 hover:border-teal-400/50',
    iconColor: 'text-teal-600 dark:text-teal-400',
    tag: 'Healthcare Platform',
  },
  {
    title: 'Cyber Security Risk Analysis & Reporting System (CSRARS)',
    description:
      'Currently working on a cybersecurity-focused risk analysis and reporting platform designed to identify security gaps, evaluate organizational risks, and generate professional security assessment reports.',
    icon: Shield,
    accent: 'from-emerald-500/20 to-green-600/10',
    border: 'border-emerald-500/25 hover:border-emerald-400/50',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    tag: 'Current Project',
    isCurrent: true,
  },
]

const GlassCard = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 ${className}`}
  >
    {children}
  </div>
)

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      {/* Animated gradient background — dark mode compatible */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(14,165,233,0.14),transparent_60%)] dark:bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(14,165,233,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(20,184,166,0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(20,184,166,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_100%,rgba(16,185,129,0.06),transparent_45%)] dark:bg-[radial-gradient(ellipse_45%_35%_at_0%_100%,rgba(16,185,129,0.1),transparent_45%)]" />
        <div
          className="absolute inset-0 opacity-40 dark:opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(100,116,139,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.07) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <motion.div
          className="absolute top-24 left-[5%] h-80 w-80 rounded-full bg-primary-400/20 dark:bg-primary-500/15 blur-[100px]"
          animate={{ x: [0, 35, 0], y: [0, 25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 right-[5%] h-96 w-96 rounded-full bg-teal-400/15 dark:bg-teal-500/10 blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-[90px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Cybersecurity floating accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="hidden xl:flex absolute left-6 top-[32%] z-0 items-center gap-2 px-4 py-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/10 backdrop-blur-xl"
      >
        <Lock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
        <span className="text-xs font-mono text-emerald-700 dark:text-emerald-300">
          SSL · JWT · Secure API
        </span>
      </motion.div>

      {/* Healthcare floating accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25 }}
        className="hidden xl:flex absolute right-8 top-[38%] z-0 items-center gap-2 px-4 py-3 rounded-xl border border-teal-500/20 bg-teal-500/5 dark:bg-teal-500/10 backdrop-blur-xl"
      >
        <Stethoscope className="h-4 w-4 text-teal-600 dark:text-teal-400" />
        <span className="text-xs font-medium text-teal-700 dark:text-teal-300">
          Healthcare UI Systems
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute left-[14%] bottom-[38%] h-14 w-14 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-md"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden md:block absolute top-[22%] right-[28%] h-2 w-2 rounded-full bg-primary-500"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Main hero row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm"
            >
              <Sparkles className="h-4 w-4 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide">
                Full Stack Web Developer
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.06}
              className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-4"
            >
              Building Secure, Scalable & Modern Web Applications
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08]"
            >
              <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 mb-2">
                Hello, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-slate-900 via-primary-700 to-cyan-700 dark:from-white dark:via-primary-200 dark:to-cyan-300 bg-clip-text text-transparent">
                Nadhii Jemal
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.16}
              className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base font-medium">
                <GraduationCap className="h-5 w-5 text-primary-600 dark:text-primary-400 shrink-0" />
                4th Year Software Engineering Student
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.22}
              className="mt-7 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed md:leading-8"
            >
              I am a passionate Full Stack Web Developer with hands-on experience
              building scalable, secure, and modern web applications using React.js,
              Node.js, MongoDB, MySQL, and PHP. I specialize in developing responsive
              systems with modern UI/UX, secure backend architecture, and real-world
              problem-solving solutions.
            </motion.p>

            {/* Tech badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="mt-9 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + index * 0.07, duration: 0.45 }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md hover:border-primary-400/40 dark:hover:border-primary-500/40 transition-all duration-300"
                >
                  <tech.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${tech.color}`} />
                  {tech.name}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.38}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 bg-primary-600 hover:bg-primary-500 text-white font-semibold rounded-xl shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-500/35 transition-all duration-300 hover:-translate-y-1"
              >
                <Briefcase size={20} />
                View Projects
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 font-semibold text-slate-800 dark:text-white rounded-xl border border-slate-300/80 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur-md hover:bg-white dark:hover:bg-white/10 hover:border-primary-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Hire Me
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.44}
              className="mt-9 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="text-sm font-medium text-slate-500 dark:text-slate-500 mr-1 hidden sm:inline">
                Connect
              </span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.06 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl border border-slate-200/90 dark:border-white/10 bg-white/60 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-white hover:border-primary-400/50 hover:bg-primary-50 dark:hover:bg-primary-600/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={21} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 rounded-full hero-profile-glow"
                animate={{ opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -inset-[3px] rounded-full opacity-80"
                style={{
                  background:
                    'conic-gradient(from 0deg, #0ea5e9, #14b8a6, #10b981, #6366f1, #0ea5e9)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute -inset-[3px] rounded-full bg-white dark:bg-slate-950 p-[3px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-950" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/80 dark:border-white/10 bg-slate-100 dark:bg-slate-800 shadow-2xl shadow-slate-300/50 dark:shadow-black/40">
                  {imageError ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                      <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white/80 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 mb-3">
                        <User
                          className="text-primary-600 dark:text-primary-400"
                          size={48}
                          strokeWidth={1.25}
                        />
                      </div>
                      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary-600 to-cyan-600 dark:from-primary-400 dark:to-cyan-400 bg-clip-text text-transparent">
                        NJ
                      </span>
                      <span className="mt-2 text-[10px] sm:text-xs text-slate-500 dark:text-slate-500 font-medium tracking-wider uppercase px-4 text-center">
                        Add photo → public/profile.jpg
                      </span>
                    </div>
                  ) : (
                    <img
                      src="/profile.jpg"
                      alt="Nadhii Jemal"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  )}
                </div>

                <GlassCard className="absolute -bottom-1 -left-4 sm:-left-10 px-4 py-3 !rounded-xl">
                  <p className="text-xl font-bold text-slate-900 dark:text-white">3+</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Years Experience
                  </p>
                </GlassCard>

                <div className="absolute -top-1 -right-2 sm:-right-6 px-4 py-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/15 backdrop-blur-xl">
                  <div className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                      Secure Dev
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Featured projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.75 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Featured Work
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Real-world platforms built for organizations & enterprises
              </p>
            </div>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:gap-2.5 transition-all duration-300"
            >
              See all projects
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href="#projects"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className={`group block rounded-2xl border bg-gradient-to-br ${project.accent} ${project.border} backdrop-blur-xl p-5 sm:p-6 transition-all duration-300 hover:shadow-xl bg-white/50 dark:bg-white/[0.04]`}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-xl bg-white/80 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 ${project.iconColor}`}
                  >
                    <project.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      project.isCurrent
                        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/10'
                    }`}
                  >
                    {project.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-4">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
