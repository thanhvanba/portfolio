'use client'
import React, { useState } from 'react'
import { Calendar, MapPin, Mail, Phone, Download, Award, Code, Users, Clock, Github, ExternalLink } from 'lucide-react'

export default function About() {
  const [activeTab, setActiveTab] = useState('about')

  const experience = [
    {
      id: 1,
      title: "Fresher",
      company: "HUU PHU AGENCY",
      period: "October 2024 - Present",
      description: "Worked on BizTrack (ERP web app) using React and Tailwind CSS. Built WordPress websites and landing pages for clients. Participated in API development for a recruitment platform.",
      technologies: ["React", "Tailwind CSS", "WordPress", "API Development"]
    },
    {
      id: 2,
      title: "Intern",
      company: "FPT Software Company",
      period: "Early October 2023 - Late November 2023",
      description: "Building an API system for a recruitment website. Approaching the workflow process using Agile. Managing tasks with Jira.",
      technologies: ["API Development", "Agile", "Jira"]
    },
    {
      id: 3,
      title: "Freelancer Web Developer",
      company: "Self-employed",
      period: "January 2024 - October 2024",
      description: "Built websites using WordPress and React for small business clients. Developed a tool that generates articles using Gemini AI and auto-publishes them to WordPress via REST API.",
      technologies: ["WordPress", "React", "Gemini AI", "REST API"]
    }
  ]

  const education = [
    {
      id: 1,
      degree: "Information Technology",
      school: "Ho Chi Minh City University of Technical Education",
      period: "September 2020 - September 2024",
      description: "Major: Information Technology, Softwares, Web Applications. Current GPA: 3.22"
    }
  ]

  // const projects = [
  //   {
  //     id: 1,
  //     title: "BizTrack ERP SaaS Web Application",
  //     period: "03/2025-07/2025",
  //     description: "A full-featured ERP SaaS web application designed to streamline business operations for small and medium-sized enterprises (SMEs). Provides an all-in-one management solution with integrated modules for Dashboard, Sales & Order Management, CRM, Inventory & Warehouse Management, Product Management, Supplier Management, and Financial Module.",
  //     technologies: ["ReactJs", "Redux Toolkit", "Ant Design", "Tailwind CSS", "Axios", "JWT Auth", "Chart.js", "Vite"],
  //     teamSize: "6 persons",
  //     github: null,
  //     website: null,
  //     responsibilities: [
  //       "Developing and maintaining UI components across multiple modules",
  //       "Implementing responsive, reusable components",
  //       "Managing complex application states with Redux Toolkit",
  //       "Integrating secure routing using JWT-based authentication",
  //       "Collaborating with backend APIs to deliver real-time business data"
  //     ]
  //   },
  //   {
  //     id: 2,
  //     title: "TvN Cinemas - Ticket Booking Management System",
  //     period: "11/2023-07/2024",
  //     description: "A website for creating a ticket booking management system tailored for a cinema chain. The system supports four roles: admin, manager, staff, and user. It manages essential information, including cinemas, movies, schedules, user accounts, products, promotions, and statistics.",
  //     technologies: ["ReactJs", "Vite", "TailwindCss", "Antd Design"],
  //     teamSize: "4 persons",
  //     github: "https://github.com/thanhvanba/TvN-Cinemas",
  //     website: "https://tvn-cinema.vercel.app/",
  //     responsibilities: [
  //       "Planning and overseeing website deployment",
  //       "Designing user interface for each role in the system",
  //       "Conducting testing and making adjustments to the interface",
  //       "Providing support and maintenance for database and interface"
  //     ]
  //   },
  //   {
  //     id: 3,
  //     title: "Website thietkeinandep",
  //     period: "02/2024-03/2024",
  //     description: "The website project offers design and printing services, including logos, packaging, labels, and advertising materials, from concept to completion. The website provides custom printing solutions like business cards and brochures, with detailed quotations for cost clarity.",
  //     technologies: ["ReactJs", "Vite", "TailwindCss", "Antd Design"],
  //     teamSize: "4 persons",
  //     github: "https://github.com/thanhvanba/thietkeinandep",
  //     website: "https://thietkeinandep.vercel.app/",
  //     responsibilities: [
  //       "Migrating website from WordPress to ReactJS",
  //       "Working directly with clients on system features",
  //       "Implementing new features and modifications based on client requests"
  //     ]
  //   },
  //   {
  //     id: 4,
  //     title: "Mock Project Recruitment",
  //     period: "10/2023-11/2023",
  //     description: "API system for a recruitment website. Allow users to create CVs based on pre-existing templates. User Authentication and Access Control: Ensure security and control access rights within the system.",
  //     technologies: ["Java", "MySQL", "Jira"],
  //     teamSize: "9 persons",
  //     github: "https://github.com/thanhduybui/Mock-Project-Recruitment",
  //     website: null,
  //     responsibilities: [
  //       "Designing APIs for register account, verify OTP, update, delete user, job, interview",
  //       "Designing user interfaces using Figma",
  //       "Conducting unit testing for APIs",
  //       "Creating comprehensive API guides"
  //     ]
  //   }
  // ]

  const skills = {
    programming: ["HTML", "CSS", "Javascript", "C#", "C/C++"],
    frameworks: ["ReactJS", "Spring Boot"],
    database: ["SQL", "MySQL", "MongoDB"],
    knowledge: ["Bootstrap", "Antd", "Tailwind CSS", "RESTful API", "Jira", "Git/GitLab", "Process Agile"],
    softSkills: ["Communicate", "Handling situations", "Teamwork", "Working carefully", "Creativity"]
  }

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          About <span className="text-[#ff7b00]">Me</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto">
          With the amount of knowledge I have learned at school as well as soft skills, I look forward to learning and working to gain experience and develop myself. At the same time, I hope to work in a professional environment and have a long-term relationship with your company.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-wrap gap-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
          {[
            { id: 'about', name: 'About', icon: Users },
            { id: 'experience', name: 'Experience', icon: Clock },
            { id: 'education', name: 'Education', icon: Award },
            // { id: 'projects', name: 'Projects', icon: Code },
            { id: 'skills', name: 'Skills', icon: Award }
          ].map((tab) => {
            const IconComponent = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-[#ff7b00] text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                <IconComponent size={20} />
                {tab.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Info */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-[#ff7b00]" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Born: 01/01/2002</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-[#ff7b00]" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Tan Hoa 2 Street, Hiep Phu Ward, Thu Duc City</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-[#ff7b00]" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">vanbatrungthanh@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-[#ff7b00]" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">0345 046 656</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-[#ff7b00]" size={20} />
                  <a href="https://github.com/thanhvanba" className="text-gray-600 dark:text-gray-300 hover:text-[#ff7b00] transition-colors">
                    github.com/thanhvanba
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff7b00] text-white rounded-lg hover:bg-[#e66a00] transition-colors duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>

            {/* About Me */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate Frontend Developer with a strong foundation in web development technologies.
                  With experience in both corporate and freelance environments, I've developed a diverse skill set
                  that includes React, WordPress, and various modern web technologies.
                </p>
                <p>
                  I believe in creating user-centered digital experiences that are not only functional but also
                  intuitive and enjoyable. My approach combines technical expertise with creative problem-solving
                  to deliver solutions that meet both user needs and business objectives.
                </p>
                <p>
                  I'm always eager to learn new technologies and methodologies, and I thrive in collaborative
                  environments where I can contribute to meaningful projects while continuing to grow professionally.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Work Experience</h3>
            {experience.map((job) => (
              <div key={job.id} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h4>
                    <p className="text-[#ff7b00] font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{job.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h5 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h5>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-[#ff7b00] font-medium mb-2">{edu.school}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* {activeTab === 'projects' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Projects</h3>
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h4>
                    <p className="text-[#ff7b00] font-medium">Team size: {project.teamSize}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{project.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Responsibilities:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                    {project.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#ff7b00] transition-colors"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#ff7b00] transition-colors"
                    >
                      <ExternalLink size={20} />
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )} */}

        {activeTab === 'skills' && (
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.programming.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Knowledge</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.knowledge.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg md:col-span-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.softSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
