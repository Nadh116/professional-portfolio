import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'Murti Guuto Students Association Platform',
      description: 'Full-stack portal supporting MGSA students with resource sharing, profile management, multimedia gallery, and admin tools for user and content moderation.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Rammiso/Murti-Guutoo-Student-Association',
      demo: '#',
    },
    {
      title: 'Student Record Management System',
      description: 'Comprehensive system allowing teachers to input and manage student marks per subject. Generates detailed reports including total, average, rank, and status with role-based access control.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/Nadh116/Student-record-manegemt-system',
      demo: '#',
    },
    {
      title: 'Event Management System',
      description: 'Comprehensive event management platform built with PHP. Features event creation, participant registration, scheduling, and real-time notifications. Admin dashboard for managing events and attendees.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/yohanis-Tasfa/event-management-system-php',
      demo: '#',
    },
    {
      title: 'Ethiopian Skylight Hotel Website',
      description: 'Modern hotel booking platform with user registration, room listings, booking system, and dynamic contact forms. Clean UI for seamless user experience.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/Nadh116/Ethiopian_sklyight_Hotal_Website',
      demo: '#',
    },
    {
      title: 'School Portal System (Grades 9-12)',
      description: 'Centralized grading system for multiple sections. Teachers manage subjects, students, and grades. Features admin dashboard with analytics and comprehensive reporting.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'Chart.js'],
      github: 'https://github.com/nadh116/school-portal',
      demo: '#',
    },
    {
      title: 'Health Center Management System',
      description: 'Clinic-focused platform streamlining patient registration, appointment scheduling, medical records, and inventory oversight with dedicated admin tools.',
      image: 'https://images.unsplash.com/photo-1580281657521-0ef3c08cd9ac?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/yihune1234/Health-Center-Management-System',
      demo: '#',
    },
    {
      title: 'Roster Management System',
      description: 'Efficient scheduling and roster management application for organizations. Features automated scheduling, conflict detection, and reporting capabilities.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/nadh116/roster-management',
      demo: '#',
    },
    {
      title: 'Event Registration Management System',
      description: 'Streamlined event registration system allowing users to browse events, register online, and receive confirmations. Features payment integration and automated email notifications.',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
      tags: ['Node.js', 'React', 'MongoDB', 'Express'],
      github: 'https://github.com/Nadh116/Event-regesrteration_managemant-system',
      demo: '#',
    },
    {
      title: 'DSA Project - Data Structures & Algorithms',
      description: 'Implementation of fundamental data structures and algorithms including sorting algorithms, search trees, graphs, and dynamic programming solutions. Educational project demonstrating problem-solving skills.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      tags: ['Java', 'Algorithms', 'Data Structures'],
      github: 'https://github.com/nadh116/DSA-project',
      demo: '#',
    },
    {
      title: 'Ethio University App',
      description: 'Mobile-friendly university management application for Ethiopian universities. Features student portal, course registration, grade viewing, and campus news. Streamlines academic administration.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/Nadh116/Ethio-universtiy-app',
      demo: '#',
    },
  ]

  // Quick access repository links frequently requested during demos
  const featuredRepositories = [
    {
      label: 'Murti Guuto Students Association Platform',
      href: 'https://github.com/Rammiso/Murti-Guutoo-Student-Association',
    },
    {
      label: 'Event Registration Management System',
      href: 'https://github.com/Nadh116/Event-regesrteration_managemant-system',
    },
    {
      label: 'Event Management System (PHP)',
      href: 'https://github.com/yohanis-Tasfa/event-management-system-php',
    },
    {
      label: 'Ethiopian Skylight Hotel Website',
      href: 'https://github.com/Nadh116/Ethiopian_sklyight_Hotal_Website',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Direct repository links for quick access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-center mb-4 text-gray-900 dark:text-white">
            Direct Repository Links
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {featuredRepositories.map((repo, index) => (
              <a
                key={index}
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                {repo.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/nadh116"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
