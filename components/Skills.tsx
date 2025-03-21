"use client"

import type { RefObject } from "react"
import { useEffect, useState } from "react"

interface SkillsProps {
    techStackRef: RefObject<HTMLDivElement>
}

export default function Skills({ techStackRef }: SkillsProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const skills = [
        { name: "C++", icon: "C++" },
        { name: "Python", icon: "Py" },
        { name: "TypeScript", icon: "TS" },
        { name: "JavaScript", icon: "JS" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "N" },
        { name: "HTML", icon: "HTML" },
        { name: "CSS", icon: "CSS" },
        { name: "Node.js", icon: "Node.js" },
        { name: "Three.js", icon: "3D" },
        { name: "Git", icon: "Git" },
        { name: "Docker", icon: "🐳" },
        { name: "Firebase", icon: "🔥" },
        { name: "MongoDB", icon: "DB" },
        { name: "Supabase", icon: "SP" },
        { name: "SQL", icon: "SQL" },
        { name: "PostgreSQL", icon: "PG" },
        { name: "WebGL", icon: "GL" },
        { name: "Spline", icon: "🎨" },
        { name: "RESTful APIs", icon: "API" },
        { name: "Google OAuth", icon: "🔑" },
        { name: "AI Integration", icon: "🤖" },
        { name: "AWS", icon: "AWS" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "GraphQL", icon: "GQL" },
        { name: "AI & ML", icon: "🧠" },
        { name: "Cloud Technologies", icon: "☁️" },
        { name: "AI Agents", icon: "🤖" }
    ];



    // Split skills into two arrays for two belts
    const firstBelt = skills.slice(0, Math.ceil(skills.length / 2))
    const secondBelt = skills.slice(Math.ceil(skills.length / 2))

    return (
        <section
            id="skills"
            className="py-20 px-8 md:px-24 w-full mx-auto overflow-hidden bg-black/30 backdrop-blur-sm rounded-xl"
        >
            <h2 className="text-3xl font-bold mb-10 text-white text-center">
                <span className="bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
                    What I work with
                </span>
            </h2>

            <div ref={techStackRef} className="space-y-8">
                {/* First belt: Left to Right */}
                <div className="relative h-16 overflow-hidden">
                    <div className={`${isMounted ? 'animate-belt-ltr' : ''} flex space-x-6`}>
                        {[...firstBelt, ...firstBelt, ...firstBelt].map((tech, idx) => (
                            <div
                                key={`first-${idx}`}
                                className="flex-shrink-0 flex items-center gap-3 bg-gray-900/60 p-3 rounded-lg hover:bg-cyan-900/40 transition-colors duration-300 border border-gray-800"
                                style={{ minWidth: "120px" }}
                            >
                                <span className="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-300">{tech.icon}</span>
                                <span className="text-gray-200">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second belt: Right to Left */}
                <div className="relative h-16 overflow-hidden">
                    <div className={`${isMounted ? 'animate-belt-rtl' : ''} flex space-x-6`}>
                        {[...secondBelt, ...secondBelt, ...secondBelt].map((tech, idx) => (
                            <div
                                key={`second-${idx}`}
                                className="flex-shrink-0 flex items-center gap-3 bg-gray-900/60 p-3 rounded-lg hover:bg-cyan-900/40 transition-colors duration-300 border border-gray-800"
                                style={{ minWidth: "120px" }}
                            >
                                <span className="text-xs bg-gray-800 px-2 py-1 rounded text-cyan-300">{tech.icon}</span>
                                <span className="text-gray-200">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-belt-ltr {
                    animation: beltLtr 30s linear infinite;
                    display: flex;
                    width: max-content;
                }

                .animate-belt-rtl {
                    animation: beltRtl 30s linear infinite;
                    display: flex;
                    width: max-content;
                }

                @keyframes beltLtr {
                    0% {
                        transform: translateX(-33.33%);
                    }
                    100% {
                        transform: translateX(0%);
                    }
                }

                @keyframes beltRtl {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-33.33%);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .animate-belt-ltr,
                    .animate-belt-rtl {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    )
}