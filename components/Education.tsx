"use client";
import { useState } from "react";

export default function Education() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const education = [
        {
            institution: "Madhav Institute of Technology and Science, Gwalior",
            degree: "Bachelor of Technology - BTech, Information Technology",
            date: "Sep 2022 - Jul 2026",
            description: "Pursuing a B.Tech in Information Technology with a focus on software development, data structures, and algorithms. Engaged in technical projects and internships.",
            achievements: [
                "Nodal Table Tennis Winner",
                "TNP Cell Coordinator",
                "GDSC Volunteer",
                "IETE Event Volunteer",
                "Active in technical communities",
                "Worked on multiple web and blockchain projects"
            ]
        },
        {
            institution: "Christ Senior Secondary School - India",
            degree: "Senior Secondary Schooling",
            date: "Completed",
            description: "Completed higher secondary education with a strong focus on science and mathematics.",
            achievements: [
                "School Table Tennis Winner",
                "Cricket Team Player",
                "State Level Basketball Runner-up",
                "Scored 92% in 10th Grade",
                "Scored 92% in 12th Grade"
            ]
        }
    ];


    return (
        <section id="education" className="py-20 px-4 sm:px-6 md:px-12 relative">
            <h2 className="text-3xl font-bold mb-12 pl-2 sm:pl-4" style={{ color: '#F5F5F5' }}>
                <span style={{ color: '#021526' }}>Education</span>
            </h2>
            {/* Left Timeline - Matching Experience structure */}
            <div className="relative pl-4 sm:pl-6 space-y-16">
                {/* Timeline Line with Animation */}
                <div
                    className="absolute left-3 top-0 w-1 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                        background: 'linear-gradient(to bottom, #1A1A1D, #3C3D37)',
                        height: hoveredIndex !== null ? '100%' : '10%',
                        opacity: hoveredIndex !== null ? 1 : 0.5,
                    }}
                ></div>
                {education.map((edu, index) => (
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
                            <h3 className="text-xl font-bold" style={{ color: '#021526' }}>{edu.institution}</h3>
                            <p className="text-lg font-medium mb-2" style={{ color: '#021526' }}>{edu.degree}</p>
                            <p className="text-sm mb-4" style={{ color: '#F5F5F5' }}>{edu.date}</p>
                            <p className="text-lg mb-4" style={{ color: '#F8FAFC' }}>{edu.description}</p>

                            {/* Achievements */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {edu.achievements.map((achievement, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 rounded-full text-sm transition-all duration-300 animate-fadeIn hover:scale-105"
                                        style={{
                                            backgroundColor: 'rgba(211, 211, 211, 0.2)',
                                            color: '#021526',
                                            animationDelay: `${i * 100}ms`,
                                        }}
                                    >
                                        {achievement}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}