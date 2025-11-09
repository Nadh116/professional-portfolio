import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Specializing in <span className="font-semibold text-primary-600 dark:text-primary-400">Node.js, React, Express & MongoDB</span> - 
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Hello! I'm Nadhii Jemal
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
              <p>
                I am a dedicated Full Stack Developer with hands-on experience in Node.js, React, Express, 
                MySQL, MongoDB, and JavaScript. I specialize in developing scalable web applications and have 
                successfully completed multiple academic and personal projects.
              </p>
              <p>
                I graduated with a BSc in Software Engineering from Haramaya University in 2019. 
                Since then, I've been building real-world solutions including student management systems, 
                exam preparation platforms, hotel booking systems, and school portal applications.
              </p>
              <p>
                I'm passionate about problem-solving and continuously learning emerging technologies to build 
                impactful software solutions. My goal is to create applications that make a difference in 
                people's lives while maintaining clean, maintainable code.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                  <item.icon className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '12+', label: 'Projects Completed' },
            { number: '3+', label: 'Years Experience' },
            { number: '9', label: 'Major Systems Built' },
            { number: '80%', label: 'Code Quality' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
