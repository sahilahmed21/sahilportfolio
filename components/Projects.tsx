"use client";
import { useState } from "react";

export default function Projects() {
    // Card Component (Defined within Projects)
    interface CardProps {
        title: string;
        description: string;
        link: string;
        website: string;
        tags: string[];
        image: string;
    }

    function Card({ title, description, link, website, tags, image }: CardProps) {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-150 group flex-shrink-0 min-w-[300px] max-w-[400px] h-auto transform hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: "#021526/80" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Improved Border Glow Effect */}
                <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#4A80F0]/40 to-[#6A5AE0]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />

                {/* Card Content */}
                <div className="relative flex flex-col h-full">
                    {/* Image with fixed aspect ratio */}
                    <div className="relative w-full h-48 overflow-hidden">
                        <img
                            src={image}
                            alt={`${title} screenshot`}
                            className="w-full h-full object-cover object-center transition-all duration-200 group-hover:scale-105 group-hover:brightness-110"
                            style={{ aspectRatio: "16/9" }} // Ensure consistent aspect ratio
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1 transition-transform duration-150 group-hover:translate-y-1">
                        {/* Title */}
                        <h3
                            className="text-xl font-semibold mb-3 transition-colors duration-150"
                            style={{ color: isHovered ? "#F6F0F0" : "#ADB2D4" }}
                        >
                            {title}
                        </h3>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-2 py-1 rounded-full transition-all duration-150 transform group-hover:scale-105"
                                    style={{
                                        backgroundColor: isHovered ? "#4A80F0/60" : "#373A40/50",
                                        color: isHovered ? "#F6F0F0" : "#D9EAFD",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p
                            className="text-base mb-4 flex-1 transition-colors duration-150"
                            style={{ color: isHovered ? "#FFFFFF" : "#F6F0F0" }}
                        >
                            {description}
                        </p>

                        {/* Website and Link */}
                        <div className="flex justify-between items-center">
                            <p
                                className="text-sm transition-all duration-150"
                                style={{
                                    color: isHovered ? "#F6F0F0" : "#D9EAFD",
                                    transform: isHovered ? "translateX(2px)" : "translateX(0)",
                                }}
                            >
                                {website}
                            </p>
                            <a
                                href={link}
                                className="text-sm flex items-center gap-1 transition-all duration-150 px-3 py-1 rounded-md"
                                style={{
                                    backgroundColor: isHovered ? "#4A80F0/40" : "transparent",
                                    color: "#F6F0F0",
                                    transform: isHovered ? "translateX(2px)" : "translateX(0)",
                                }}
                            >
                                View Project
                                <svg
                                    className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Projects Data with Single Image
    const projects = [
        {
            title: "Mentora - AI-Powered Study Assistant",
            description: "An intelligent study companion leveraging AI for personalized study planning, resource curation, and interactive assistance.",
            link: "https://mentora-kappa.vercel.app/home",
            website: "Website for Project Description",
            tags: ["Next.js 14", "Node.js", "Express", "TypeScript", "Tailwind CSS", "ShadCN", "Zustand", "MongoDB", "HuggingFace", "Tavily API", "Groq API"],
            image: "\\Screenshot 2025-03-21 200655.png",
        },
        {
            title: "FinIntel - Financial Banking App",
            description: "A financial app offering AI-driven budgeting, expense tracking, and personalized guidance.",
            link: "https://fin-intel.vercel.app/sign-in",
            website: "Website for Project Description",
            tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Appwrite", "Dwolla", "Plaid", "ShadCN"],
            image: "\\Screenshot 2025-03-21 201111.png",
        },
        {
            title: "LeetCode Data Fetcher - Profile and Submission Analyzer",
            description: "A Python script to fetch and analyze a user's LeetCode profile stats and submissions, saving them as a structured JSON file.",
            link: "https://github.com/sahilahmed21/LeetCode-Data-Fetcher",
            website: "Website for Project Description",
            tags: ["Python", "Requests", "BeautifulSoup", "Selenium", "LeetCode API", "JSON"],
            image: "\\Screenshot 2025-03-23 171143.png",
        },
        {
            title: "FoodBuddy - Restaurant Review & Food Delivery App",
            description: "A web app for restaurant reviews, discovery, and food delivery with role-based access and real-time updates.",
            link: "https://vercel.com/sahilahmedpbuh-gmailcoms-projects/food-buddy",
            website: "Website for Project Description",
            tags: ["React", "TypeScript", "Supabase", "TailwindCSS", "PostgreSQL", "Google OAuth"],
            image: "\\Screenshot 2025-03-21 201624.png",
        },
        {
            title: "3D Minimalistic Portfolio - Interactive Developer Showcase",
            description: "A visually stunning portfolio website with 3D elements, showcasing developer skills through interactive features and a responsive design.",
            link: "https://portfolio-website-phi-smoky.vercel.app/",
            website: "Website for Project Description",
            tags: ["React.js", "Three.js", "React Three Fiber", "React Three Drei", "Node.js", "Tailwind CSS", "Email JS", "Vite"],
            image: "\\Screenshot 2025-03-23 123457.png", // Placeholder; replace with an actual screenshot path
        },
        {
            title: "CrudCamp - Campground Review Platform",
            description: "A full-stack web application for campers to discover, rate, and review campgrounds with interactive maps.",
            link: "#",
            website: "Website for Project Description",
            tags: ["Node.js", "Express", "MongoDB", "Passport.js", "Bootstrap", "Mapbox"],
            image: "\\Screenshot 2025-03-21 201421.png",
        },

    ];

    // Projects Section
    return (
        <section id="projects" className="py-20 w-full bg-gray-900/30 backdrop-blur-sm">
            <h2 className="text-4xl font-extrabold mb-12 text-center" style={{ color: "#373A40" }}>
                <span className="bg-gradient-to-r from-cyan-300 to-purple-400 text-transparent bg-clip-text">
                    Projects
                </span>
            </h2>
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#686D76] scrollbar-track-[#021526]">
                <div className="flex gap-6 px-8 py-4 min-w-max">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            website={project.website}
                            tags={project.tags}
                            image={project.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}