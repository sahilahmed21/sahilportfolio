"use client"
import { useState } from "react"

export default function Experience() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const experiences = [
        {
            company: "Fulcrum Digital Inc",
            role: "AI Intern",
            date: "February 2025 - Present",
            description: "Researching LLM alternatives, performing various operations on different LLMs, mainly open-source, analyzing their strengths for different use cases, and running them locally to evaluate performance.",
            skills: ["LLMs", "Open-Source AI", "Model Evaluation", "Machine Learning"]
        },
        {
            company: "Fugumobile Limited",
            role: "Software Developer Intern",
            date: "October 2024 - December 2024",
            description: "Integrated Gemini AI and Perplexity AI to deliver intelligent conversational interfaces. Utilized real-time data from thomascook.in for enhanced user experience. Leveraged technologies such as React.js, Firebase, TailwindCSS, and RESTful APIs to create a seamless travel query platform.",
            skills: ["React.js", "Firebase", "TailwindCSS", "RESTful APIs"]
        }
    ]

    return (
        <section id="work" className="py-16 px-4 sm:px-6 md:px-12 relative">
            <h2 className="text-3xl font-bold mb-8 sm:mb-12 pl-2 sm:pl-4" style={{ color: '#F5F5F5' }}>
                <span style={{ color: '#021526' }}>Experiences</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Timeline - With pleasing padding */}
                <div className="relative pl-4 sm:pl-6 space-y-12 sm:space-y-16 md:w-1/2">
                    {/* Timeline Line with Animation */}
                    <div
                        className="absolute left-3 top-0 w-1 rounded-full transition-all duration-500 ease-in-out"
                        style={{
                            background: 'linear-gradient(to bottom, #1A1A1D, #3C3D37)',
                            height: hoveredIndex !== null ? '100%' : '10%',
                            opacity: hoveredIndex !== null ? 1 : 0.5,
                        }}
                    ></div>
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="relative transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg z-10"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div
                                className="absolute -left-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-20"
                                style={{
                                    backgroundColor: hoveredIndex === index ? '#D3D3D3' : '#373A40/50',
                                    transform: hoveredIndex === index ? 'scale(1.2) rotate(45deg)' : 'scale(1)',
                                    boxShadow: hoveredIndex === index ? '0 0 10px rgba(211, 211, 211, 0.5)' : 'none',
                                }}
                            >
                                <div
                                    className="w-3 h-3 rounded-full transition-colors duration-300"
                                    style={{ backgroundColor: hoveredIndex === index ? '#021526' : '#D3D3D3' }}
                                ></div>
                            </div>
                            <div
                                className="p-6 rounded-xl transition-all duration-300 z-10"
                                style={{
                                    background: hoveredIndex === index
                                        ? 'linear-gradient(to bottom right, rgba(2, 21, 38, 0.4), rgba(55, 58, 64, 0.4))'
                                        : 'linear-gradient(to bottom right, rgba(2, 21, 38, 0.3), rgba(55, 58, 64, 0.3))',
                                    backdropFilter: 'blur(4px)',
                                }}
                            >
                                <h3 className="text-xl font-bold" style={{ color: '#021526' }}>{exp.company}</h3>
                                <p className="text-lg font-medium mb-2" style={{ color: '#021526' }}>{exp.role}</p>
                                <p className="text-sm mb-4" style={{ color: '#F5F5F5' }}>{exp.date}</p>
                                <p className="text-lg" style={{ color: 'F8FAFC' }}>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side Creative Element - No blur */}
                <div className="md:w-1/2 pt-12 sm:pt-16 md:pt-0 flex justify-end">
                    <div className="sticky top-20 w-80 z-10">
                        {/* Skill Visualization for currently hovered experience */}
                        <div
                            className="p-6 rounded-xl shadow-sm"
                            style={{
                                background: 'linear-gradient(to bottom right, rgba(2, 21, 38, 0.3), rgba(55, 58, 64, 0.3))',
                            }}
                        >
                            <h3 className="text-xl font-semibold mb-4" style={{ color: '#F5F5F5' }}>
                                {hoveredIndex !== null ? "Skills & Technologies" : "Hover for Skills"}
                            </h3>

                            {hoveredIndex !== null ? (
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {experiences[hoveredIndex].skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-sm transition-all duration-300 animate-fadeIn hover:scale-105"
                                            style={{
                                                backgroundColor: 'rgba(211, 211, 211, 0.2)',
                                                color: '#021526',
                                                animationDelay: `${i * 100}ms`,
                                            }}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            ) : (
                                <div className="h-24 flex items-center justify-center">
                                    <p className="text-center" style={{ color: '#A9A9A9' }}>
                                        Hover over an experience to see related skills
                                    </p>
                                </div>
                            )}

                            {/* Connection visual */}
                            {hoveredIndex !== null && (
                                <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(104, 109, 118, 0.3)' }}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm" style={{ color: '#A9A9A9' }}>Experience Level</span>
                                        <div className="w-2/3 h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(211, 211, 211, 0.2)' }}>
                                            <div
                                                className="h-full bg-gradient-to-r from-[#3C3D37] to-[#686D76] transition-all duration-500 ease-out"
                                                style={{ width: hoveredIndex === 0 ? '85%' : '70%' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}