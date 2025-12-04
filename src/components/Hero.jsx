import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/nadh116', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nadhii-jemal', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nadhiijemal503@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-block"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 p-1 shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Nadhii Jemal" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Nedhi Jemal
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4"
          >
            4th Year Software Engineering Student from Haramaya University with 3 years of hands-on development experience.
            Building modern web applications with Node.js, React, and MySQL. 
            Passionate about solving real-world problems through code and creating impactful software solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-6 text-sm md:text-base"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">4th Year Software Engineering Student</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💼</span>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">3 Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">80% Code Quality</span>
            </div>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {['Node.js', 'React', 'Express', 'MongoDB', 'MySQL', 'Tailwind CSS', 'JWT', 'Sequelize', 'Mongoose', 'Git', 'REST APIs'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-semibold text-sm border border-primary-200 dark:border-primary-800"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="/Nadhii-Jemal-CV-Resume.pdf" download className="btn-secondary inline-flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 right-8"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
        >
          <ArrowDown size={32} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
