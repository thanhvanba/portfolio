'use client'
import React, { useState } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "BizTrack ERP SaaS Web Application",
        period: "03/2025-07/2025",
        description: "AFull featured SaaS ERP for small and medium businesses, providing a complete solution with integrated modules for Dashboard, Sales & Orders, CRM, Inventory & Warehouse, Products, Supplier, Finance & Accounts Receivable",
        technologies: ["ReactJs", "Redux Toolkit", "Ant Design", "Tailwind CSS", "JWT Auth", "Chart.js", "Vite"],
        teamSize: "6 persons",
        github: '',
        website: null,
        responsibilities: [
            "Developing and maintaining UI components across multiple modules",
            "Implementing responsive, reusable components",
            "Managing complex application states with Redux Toolkit",
            "Integrating secure routing using JWT-based authentication",
            "Collaborating with backend APIs to deliver real-time business data"
        ],
        category: 'web',
        featured: true
    },
    {
        id: 2,
        title: "TvN Cinemas - Ticket Booking Management System",
        period: "11/2023-07/2024",
        description: "A cinema ticket booking management website with roles for admin, manager, staff, and user, managing cinemas, movies, schedules, accounts, products, promotions, and statistics.",
        technologies: ["ReactJs", "Vite", "TailwindCss", "Antd Design"],
        teamSize: "4 persons",
        github: "https://github.com/thanhvanba/TvN-Cinemas",
        website: "https://tvn-cinema.vercel.app/",
        responsibilities: [
            "Planning and overseeing website deployment",
            "Designing user interface for each role in the system",
            "Conducting testing and making adjustments to the interface",
            "Providing support and maintenance for database and interface"
        ],
        category: 'web',
        featured: true
    },
    {
        id: 3,
        title: "Website thietkeinandep",
        period: "02/2024-03/2024",
        description: "The website project offers design and printing services, including logos, packaging, labels, and advertising materials, from concept to completion. The website provides custom printing solutions like business cards and brochures, with detailed quotations for cost clarity.",
        technologies: ["ReactJs", "Vite", "TailwindCss", "Antd Design"],
        teamSize: "4 persons",
        github: "https://github.com/thanhvanba/thietkeinandep",
        website: "https://thietkeinandep.vercel.app/",
        responsibilities: [
            "Migrating website from WordPress to ReactJS",
            "Working directly with clients on system features",
            "Implementing new features and modifications based on client requests"
        ],
        category: 'web',
        featured: false
    },
    // {
    //     id: 4,
    //     title: "Mock Project Recruitment",
    //     period: "10/2023-11/2023",
    //     description: "API system for a recruitment website. Allow users to create CVs based on pre-existing templates. User Authentication and Access Control: Ensure security and control access rights within the system.",
    //     technologies: ["Java", "MySQL", "Jira"],
    //     teamSize: "9 persons",
    //     github: "https://github.com/thanhduybui/Mock-Project-Recruitment",
    //     website: null,
    //     responsibilities: [
    //         "Designing APIs for register account, verify OTP, update, delete user, job, interview",
    //         "Designing user interfaces using Figma",
    //         "Conducting unit testing for APIs",
    //         "Creating comprehensive API guides"
    //     ],
    //     category: 'web',
    //     featured: false
    // },
    {
        id: 5,
        title: "Bếp Xanh Việt Nam",
        period: null,
        description: "Trang web bán các sản phẩm bếp cao cấp và thiết bị nhà bếp.",
        technologies: ["WordPress"],
        teamSize: null,
        github: '',
        website: "https://bepxanhvietnam.com/",
        responsibilities: [
            "Thiết kế UI/UX theo yêu cầu",
            "Tùy chỉnh giao diện WordPress và plugin",
            "Đăng sản phẩm và cấu hình đơn hàng"
        ],
        category: "wordPress",
        featured: false
    },
    {
        id: 6,
        title: "Điện máy Quốc Tuấn",
        period: null,
        description: "Website bán điện máy và đồ gia dụng.",
        technologies: ["WordPress"],
        teamSize: null,
        github: '',
        website: "https://dienmayquoctuan.com/",
        responsibilities: [
            "Xây dựng website bằng WordPress",
            "Đăng tải sản phẩm điện máy",
            "Cấu hình phương thức vận chuyển và thanh toán"
        ],
        category: "wordPress",
        featured: false
    },
    {
        id: 7,
        title: "Bếp Văn Hưng",
        period: null,
        description: "Website bán điện máy và đồ gia dụng.",
        technologies: ["WordPress"],
        teamSize: null,
        github: '',
        website: "https://bepvanhung.com/",
        responsibilities: [
            "Xây dựng website bằng WordPress",
            "Đăng tải sản phẩm điện máy",
            "Cấu hình phương thức vận chuyển và thanh toán"
        ],
        category: "wordPress",
        featured: false
    },
    {
        id: 10,
        title: "Kho Bếp 247",
        period: null,
        description: "Website kho bếp, cung cấp các sản phẩm và dịch vụ liên quan đến bếp.",
        technologies: ["WordPress"],
        teamSize: null,
        github: '',
        website: "https://khobep247.com/",
        responsibilities: [
            "Phát triển website với WordPress",
            "Tùy chỉnh các plugin để phù hợp nhu cầu kho bếp",
            "Tối ưu tốc độ tải trang"
        ],
        category: "wordPress",
        featured: false
    },
    {
        id: 8,
        title: "Bếp 86",
        period: null,
        description: "Trang thương mại điện tử chuyên về thiết bị bếp.",
        technologies: ["WordPress"],
        teamSize: null,
        github: '',
        website: "https://bep86.com/",
        responsibilities: [
            "Tùy chỉnh theme WordPress theo thiết kế",
            "Cập nhật hình ảnh và nội dung sản phẩm",
            "Tích hợp form liên hệ và chatbot"
        ],
        category: "wordPress",
        featured: false
    },
    {
        id: 9,
        title: "Đồ Xịn Nhà Xinh",
        period: null,
        description: "Trang thương affilate.",
        technologies: ["React"],
        teamSize: null,
        github: '',
        website: "https://doxinnhaxinh.vercel.app/",
        responsibilities: [
            "Tùy chỉnh theme WordPress theo thiết kế",
            "Cập nhật hình ảnh và nội dung sản phẩm",
            "Tích hợp form liên hệ và chatbot"
        ],
        category: "Web",
        featured: false
    },
]

const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    // { id: 'ai', name: 'AI & ML' },
    { id: 'wordPress', name: 'WordPress' }
]

export default function Project() {
    const [activeCategory, setActiveCategory] = useState('all')

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory)

    return (
        <div className="min-h-screen py-8">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                    My <span className="text-[#ff7b00]">Projects</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Explore my latest work and creative solutions.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex justify-center mb-8">
                <div className="flex flex-wrap gap-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-[#ff7b00] text-white shadow-lg'
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    >
                        {/* Project Image Placeholder */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-4xl font-bold text-gray-400 dark:text-gray-600">
                                    {project.title.charAt(0)}
                                </div>
                            </div>
                            {project.featured && (
                                <div className="absolute top-4 left-4 bg-[#ff7b00] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Featured
                                </div>
                            )}
                        </div>

                        {/* Project Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300"
                                >
                                    <Github size={16} />
                                    <span className="text-sm">Code</span>
                                </a>
                                {project.website && (
                                    <a
                                        href={project.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-[#ff7b00] text-white rounded-lg hover:bg-[#e66a00] transition-colors duration-300"
                                    >
                                        <ExternalLink size={16} />
                                        <span className="text-sm">Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-[#ff7b00] to-[#ff9500] p-8 rounded-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-white/90 mb-6 max-w-md mx-auto">
                        Let's work together to bring your ideas to life.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#ff7b00] rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                        Get In Touch
                        <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}
