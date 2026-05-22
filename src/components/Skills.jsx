import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bot,
  Brain,
  Bug,
  Layout,
  LayoutTemplate,
  Lock,
  Monitor,
  MousePointerClick,
  Palette,
  Server,
  Shield,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react'
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiVscodium,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    accent: 'from-cyan-500/20 to-blue-600/10',
    border: 'group-hover:border-cyan-500/40',
    glow: 'group-hover:shadow-cyan-500/10',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB', level: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 93 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    accent: 'from-emerald-500/20 to-green-600/10',
    border: 'group-hover:border-emerald-500/40',
    glow: 'group-hover:shadow-emerald-500/10',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 90 },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', level: 88 },
      { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 85 },
    ],
  },
  {
    title: 'Database',
    icon: Monitor,
    accent: 'from-sky-500/20 to-indigo-600/10',
    border: 'group-hover:border-sky-500/40',
    glow: 'group-hover:shadow-sky-500/10',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 87 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 88 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    accent: 'from-violet-500/20 to-purple-600/10',
    border: 'group-hover:border-violet-500/40',
    glow: 'group-hover:shadow-violet-500/10',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF', level: 90 },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', level: 82 },
      { name: 'VS Code', icon: SiVscodium, color: '#007ACC', level: 95 },
    ],
  },
  {
    title: 'AI & Productivity Tools',
    icon: Sparkles,
    isAi: true,
    accent: 'from-violet-500/25 via-fuchsia-500/20 to-purple-600/15',
    border: 'group-hover:border-violet-500/50',
    glow: 'group-hover:shadow-violet-500/20',
    skills: [
      {
        name: 'AI-Assisted Development',
        icon: Bot,
        color: 'text-violet-600 dark:text-violet-400',
        glow: '#8B5CF6',
        level: 88,
        lucide: true,
      },
      {
        name: 'Prompt Engineering',
        icon: Brain,
        color: 'text-fuchsia-600 dark:text-fuchsia-400',
        glow: '#D946EF',
        level: 85,
        lucide: true,
      },
      {
        name: 'Cursor AI',
        icon: MousePointerClick,
        color: 'text-purple-600 dark:text-purple-400',
        glow: '#A855F7',
        level: 90,
        lucide: true,
      },
      {
        name: 'ChatGPT Workflow',
        icon: SiOpenai,
        color: '#10A37F',
        glow: '#10A37F',
        level: 88,
      },
      {
        name: 'AI-Powered UI Development',
        icon: LayoutTemplate,
        color: 'text-cyan-600 dark:text-cyan-400',
        glow: '#06B6D4',
        level: 87,
        lucide: true,
      },
      {
        name: 'Debugging Assistance',
        icon: Bug,
        color: 'text-amber-600 dark:text-amber-400',
        glow: '#F59E0B',
        level: 86,
        lucide: true,
      },
      {
        name: 'Developer Productivity Optimization',
        icon: Zap,
        color: 'text-emerald-600 dark:text-emerald-400',
        glow: '#10B981',
        level: 89,
        lucide: true,
      },
    ],
  },
]

const currentFocus = [
  {
    title: 'Cyber Security Risk Analysis & Reporting System (CSRARS)',
    icon: Shield,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/25',
  },
  {
    title: 'Secure Web Application Development',
    icon: Lock,
    color: 'text-primary-600 dark:text-primary-400',
    bg: 'bg-primary-500/10 border-primary-500/25',
  },
  {
    title: 'Modern Responsive UI/UX Design',
    icon: Palette,
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/25',
  },
]

const GlassCard = ({ children, className = '' }) => (
  <div
    className={`rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl shadow-lg shadow-slate-200/40 dark:shadow-black/25 ${className}`}
  >
    {children}
  </div>
)

function SkillBar({ level, inView, delay, variant = 'default' }) {
  const barClass =
    variant === 'ai'
      ? 'bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-500 dark:from-violet-500 dark:via-fuchsia-400 dark:to-purple-400'
      : 'bg-gradient-to-r from-primary-600 via-cyan-500 to-emerald-500 dark:from-primary-500 dark:via-cyan-400 dark:to-emerald-400'

  const glowClass =
    variant === 'ai'
      ? 'bg-gradient-to-r from-violet-400/50 to-fuchsia-400/50'
      : 'bg-gradient-to-r from-primary-400/50 to-cyan-400/50'

  return (
    <div className="relative w-full h-2 rounded-full bg-slate-200/80 dark:bg-slate-700/80 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`absolute inset-y-0 left-0 rounded-full ${barClass}`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0.4, 0.8, 0.4] } : {}}
        transition={{ duration: 2, delay: delay + 1, repeat: Infinity }}
        className={`absolute inset-y-0 left-0 rounded-full blur-sm ${glowClass}`}
        style={{ width: inView ? `${level}%` : '0%' }}
      />
    </div>
  )
}

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="relative py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-white dark:bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(14,165,233,0.08),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(14,165,233,0.12),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/8 dark:bg-emerald-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 h-72 w-72 rounded-full bg-violet-400/8 dark:bg-fuchsia-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400 mb-3">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical{' '}
            <span className="bg-gradient-to-r from-primary-600 via-cyan-600 to-emerald-600 dark:from-primary-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Full-stack technologies and AI-assisted workflows I use to deliver secure,
            scalable, and modern applications for clients worldwide
          </p>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative ${category.glow} ${
                category.isAi ? 'md:col-span-2' : ''
              }`}
            >
              {category.isAi && (
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-purple-500/20 blur-md"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${category.accent} ${
                  category.isAi ? 'opacity-60' : 'opacity-0'
                } group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
              />
              <GlassCard
                className={`relative p-6 sm:p-8 h-full hover:shadow-xl transition-all duration-500 ${category.border} border-transparent hover:border ${
                  category.isAi
                    ? 'ring-1 ring-violet-500/20 dark:ring-fuchsia-500/20 hover:ring-violet-500/40 dark:hover:ring-fuchsia-500/40'
                    : ''
                }`}
              >
                <div className="flex flex-wrap items-center gap-3 mb-7">
                  <div
                    className={`p-2.5 rounded-xl border group-hover:scale-110 transition-transform duration-300 ${
                      category.isAi
                        ? 'bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 border-violet-500/30 dark:border-fuchsia-500/30'
                        : 'bg-slate-100 dark:bg-white/10 border-slate-200/80 dark:border-white/10'
                    }`}
                  >
                    <category.icon
                      className={`h-5 w-5 ${
                        category.isAi
                          ? 'text-violet-600 dark:text-fuchsia-400'
                          : 'text-primary-600 dark:text-primary-400'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  {category.isAi && (
                    <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-violet-500/15 to-fuchsia-500/15 border border-violet-500/30 dark:border-fuchsia-500/30 text-violet-700 dark:text-fuchsia-300">
                      <Sparkles className="h-3 w-3" />
                      Modern Workflow
                    </span>
                  )}
                </div>

                <div
                  className={`space-y-5 ${
                    category.isAi
                      ? 'grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-8 sm:gap-y-5 sm:space-y-0'
                      : ''
                  }`}
                >
                  {category.skills.map((skill, skillIndex) => {
                    const delay = categoryIndex * 0.1 + skillIndex * 0.08
                    const Icon = skill.icon
                    const glowColor = skill.glow || skill.color

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 + delay, duration: 0.45 }}
                        whileHover={{ x: 4 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between gap-3 mb-2.5">
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border bg-slate-50 dark:bg-slate-900/60 group-hover/skill:shadow-lg transition-all duration-300 ${
                                category.isAi
                                  ? 'border-violet-500/20 dark:border-fuchsia-500/20 group-hover/skill:border-violet-500/40'
                                  : 'border-slate-200/80 dark:border-white/10'
                              }`}
                              style={{
                                boxShadow: isInView
                                  ? `0 0 18px ${typeof glowColor === 'string' && glowColor.startsWith('#') ? glowColor + '33' : 'rgba(139,92,246,0.2)'}`
                                  : undefined,
                              }}
                            >
                              {skill.lucide ? (
                                <Icon className={`h-5 w-5 ${skill.color}`} />
                              ) : (
                                <Icon
                                  className="h-5 w-5"
                                  style={{ color: skill.color }}
                                />
                              )}
                            </div>
                            <span className="font-semibold text-slate-800 dark:text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-sm font-bold tabular-nums shrink-0 ${
                              category.isAi
                                ? 'text-violet-600 dark:text-fuchsia-400'
                                : 'text-primary-600 dark:text-primary-400'
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <SkillBar
                          level={skill.level}
                          inView={isInView}
                          delay={0.35 + delay}
                          variant={category.isAi ? 'ai' : 'default'}
                        />
                      </motion.div>
                    )
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Current Focus
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {currentFocus.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <GlassCard
                  className={`p-5 sm:p-6 h-full border ${item.bg} hover:shadow-xl transition-all duration-400`}
                >
                  <div
                    className={`inline-flex p-2.5 rounded-xl border mb-4 ${item.bg}`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {item.title}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
