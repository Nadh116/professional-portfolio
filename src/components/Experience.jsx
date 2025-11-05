import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Freelance & Academic Projects',
      period: '2019 - Present',
      description: 'Developing and maintaining full-stack web applications using React, Node.js, Express, MySQL, and MongoDB. Building scalable solutions for education, healthcare, and hospitality sectors.',
      achievements: [
        'Built 6+ production-ready web applications',
        'Implemented role-based access control systems',
        'Integrated payment gateways (Chapa API)',
        'Designed and optimized MySQL database schemas',
      ],
    },
    {
      type: 'work',
      title: 'Software Engineering Student',
      company: 'Haramaya University',
      period: '2015 - 2019',
      description: 'Completed comprehensive software engineering program with focus on web development, database systems, and software architecture. Participated in coding competitions and hackathons.',
      achievements: [
        'Graduated with BSc in Software Engineering',
        'Developed multiple academic projects',
        'Strong foundation in algorithms and data structures',
        'Participated in university coding club',
      ],
    },
  ]

  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Haramaya University, Ethiopia',
      period: '2015 - 2019',
      description: 'Comprehensive software engineering program with focus on web development, database systems, object-oriented programming, and algorithms & data structures.',
      achievements: [
        'Graduated with BSc in Software Engineering',
        'Key Coursework: Web Development, Database Systems, OOP, Algorithms',
        'Completed multiple full-stack projects',
        'Active member of university coding community',
      ],
    },
    {
      type: 'education',
      degree: 'Self-Directed Learning & Professional Development',
      institution: 'Online Platforms & Documentation',
      period: '2019 - Present',
      description: 'Continuously learning modern web technologies, frameworks, and best practices through online courses, documentation, and hands-on project development.',
      achievements: [
        'Mastered React.js, Node.js, Express.js ecosystem',
        'Advanced MySQL and MongoDB database design',
        'RESTful API development and integration',
        'Modern JavaScript (ES6+) and responsive design',
      ],
    },
  ]

  const TimelineItem = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="card hover:shadow-2xl transition-shadow duration-300">
        {/* Icon */}
        <div className="absolute -left-12 top-6 hidden md:flex items-center justify-center w-12 h-12 bg-primary-600 rounded-full text-white shadow-lg">
          {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
        </div>

        {/* Content */}
        <div className="flex items-start gap-4 mb-4">
          <div className="md:hidden flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white">
            {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {item.title || item.degree}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
              {item.company || item.institution}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {item.period}
            </p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {item.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2">
          {item.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Briefcase className="text-primary-600" />
            Work Experience
          </h3>
          <div className="relative md:ml-12 space-y-8">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[-18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <TimelineItem key={index} item={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <GraduationCap className="text-primary-600" />
            Education
          </h3>
          <div className="relative md:ml-12 space-y-8">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[-18px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>
            
            {education.map((edu, index) => (
              <TimelineItem key={index} item={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
