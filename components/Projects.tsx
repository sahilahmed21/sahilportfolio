"use client";
import { useState } from "react";

// Make sure image paths are correct relative to your public folder
// e.g., /images/project_name.png if they are in public/images/

export default function Projects() {

    // --- Card Component (Defined within Projects) ---
    interface CardProps {
        title: string;
        description: string;
        link: string;
        website: string;
        tags: string[];
        images: string[]; // Changed from image: string
    }

    function Card({ title, description, link, website, tags, images }: CardProps) {
        const [isHovered, setIsHovered] = useState(false);
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
        const hasMultipleImages = images.length > 1;

        const handlePrevImage = (e: React.MouseEvent) => {
            e.stopPropagation(); // Prevent card hover state changes if clicking buttons quickly
            e.preventDefault(); // Prevent link navigation if buttons overlap link area somehow
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        const handleNextImage = (e: React.MouseEvent) => {
            e.stopPropagation();
            e.preventDefault();
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

        // Fallback if images array is empty or contains invalid paths
        const currentImage = images[currentImageIndex] || '/images/placeholder.png'; // Provide a default placeholder

        return (
            <div
                className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-150 group flex-shrink-0 min-w-[300px] max-w-[400px] h-auto transform hover:-translate-y-1 hover:shadow-xl flex flex-col" // Added flex flex-col
                style={{ backgroundColor: "rgba(2, 21, 38, 0.8)" }} // Use rgba for transparency
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Improved Border Glow Effect */}
                <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgba(74,128,240,0.4)] to-[rgba(106,90,224,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" // Use rgba
                />

                {/* Card Content */}
                <div className="relative flex flex-col h-full"> {/* Ensure content fills height */}
                    {/* Image Container with Navigation */}
                    <div className="relative w-full h-48 overflow-hidden">
                        {/* Image */}
                        <img
                            src={currentImage} // Use the potentially fallback image path
                            alt={`${title} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover object-center transition-all duration-200 group-hover:scale-105 group-hover:brightness-110"
                            style={{ aspectRatio: "16/9" }}
                            loading="lazy" // Add lazy loading
                            onError={(e) => { // Handle image loading errors
                                const target = e.target as HTMLImageElement;
                                target.onerror = null; // Prevent infinite loop if placeholder also fails
                                target.src = '/images/placeholder.png'; // Fallback image on error
                                console.warn(`Failed to load image: ${images[currentImageIndex]}`);
                            }}
                        />

                        {/* Image Navigation Buttons (only if multiple images exist) */}
                        {hasMultipleImages && (
                            <>
                                {/* Prev Button */}
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all opacity-0 group-hover:opacity-100 z-10"
                                    aria-label="Previous image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                {/* Next Button */}
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-1 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all opacity-0 group-hover:opacity-100 z-10"
                                    aria-label="Next image"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                {/* Image Indicator Dots */}
                                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => { e.stopPropagation(); e.preventDefault(); setCurrentImageIndex(index); }}
                                            className={`w-2 h-2 rounded-full transition-colors duration-150 ${currentImageIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                                                } focus:outline-none focus:ring-1 focus:ring-white/50`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1 transition-transform duration-150 group-hover:translate-y-1"> {/* Added flex-1 */}
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
                                        backgroundColor: isHovered ? "rgba(74,128,240,0.6)" : "rgba(55,58,64,0.5)", // Use rgba
                                        color: isHovered ? "#F6F0F0" : "#D9EAFD",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <p
                            className="text-base mb-4 flex-1 transition-colors duration-150" // Added flex-1
                            style={{ color: isHovered ? "#FFFFFF" : "#F6F0F0" }}
                        >
                            {description}
                        </p>

                        {/* Website and Link */}
                        <div className="flex justify-between items-center mt-auto"> {/* Added mt-auto to push to bottom */}
                            {/* Live Demo / Website Link */}
                            <a
                                href={website || '#'} // Fallback href
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-sm transition-all duration-150 hover:underline ${!website ? 'cursor-not-allowed opacity-50' : ''}`} // Style disabled link
                                style={{
                                    color: isHovered ? "#F6F0F0" : "#D9EAFD",
                                    transform: isHovered ? "translateX(2px)" : "translateX(0)",
                                }}
                                onClick={(e) => {
                                    if (!website) e.preventDefault(); // Prevent navigation if no link
                                    e.stopPropagation();
                                }}
                                aria-disabled={!website}
                            >
                                {website && website.startsWith("http") ? "Live Demo" : (website || "N/A")}
                            </a>
                            {/* GitHub / Project Link */}
                            <a
                                href={link || '#'} // Fallback href
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-sm flex items-center gap-1 transition-all duration-150 px-3 py-1 rounded-md hover:bg-[rgba(74,128,240,0.6)] ${!link ? 'cursor-not-allowed opacity-50' : ''}`} // Style disabled link
                                style={{
                                    backgroundColor: isHovered ? "rgba(74,128,240,0.4)" : "transparent", // Use rgba
                                    color: "#F6F0F0",
                                    transform: isHovered ? "translateX(2px)" : "translateX(0)",
                                }}
                                onClick={(e) => {
                                    if (!link) e.preventDefault(); // Prevent navigation if no link
                                    e.stopPropagation();
                                }}
                                aria-disabled={!link}
                            >
                                {link && link.includes("github.com") ? "GitHub" : (link ? "View Project" : "Link N/A")}
                                {link && ( // Only show arrow if there is a link
                                    <svg
                                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
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
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- Project Data (Defined directly inside the component) ---
    // IMPORTANT: Replace placeholder image paths with actual paths relative to your /public directory
    // e.g., "/images/leetnotes/main.png", "/images/mentora/dashboard.jpg" etc.
    const projectsData = [
        {
            title: "LeetNotes - AI LeetCode Companion",
            description: "A full-stack application fetching LeetCode data (profile, problems, submissions) and using Google Gemini API to auto-generate structured notes (Intuition, Algorithm, Code) for solved problems.",
            link: "https://github.com/sahilahmed21/LeetNotes",
            website: "https://leetnotes.netlify.app",
            tags: ["React", "TypeScript", "Node.js", "Express", "Supabase", "PostgreSQL", "Python", "Gemini API", "TailwindCSS"],
            images: ["\Screenshot 2025-04-03 235338.png", "\Screenshot 2025-04-03 235326.png", "\Screenshot 2025-04-03 235356.png"], // Add paths to your LeetNotes screenshots
        },
        {
            title: "Mentora - AI-Powered Study Assistant",
            description: "An intelligent study companion leveraging AI for personalized study planning, resource curation, and interactive assistance.",
            link: "https://mentora-kappa.vercel.app/home",
            website: "https://mentora-kappa.vercel.app/home", // Assuming website is same as link for demo
            tags: ["Next.js 14", "Node.js", "Express", "TypeScript", "Tailwind CSS", "ShadCN", "Zustand", "MongoDB", "HuggingFace", "Tavily API", "Groq API"],
            images: ["\Screenshot 2025-04-03 235505.png", "\Screenshot 2025-04-03 235527.png", "\Screenshot 2025-04-03 235550.png", "\Screenshot 2025-04-03 235538.png"], // Add paths to Mentora screenshots
        },
        {
            title: "FinIntel - Financial Banking App",
            description: "A financial app offering AI-driven budgeting, expense tracking, and personalized guidance using Plaid and Appwrite.",
            link: "https://fin-intel.vercel.app/sign-in",
            website: "https://fin-intel.vercel.app/sign-in", // Assuming website is same as link for demo
            tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Appwrite", "Dwolla", "Plaid", "ShadCN", "Zod"],
            images: ["\Screenshot 2025-04-03 235941.png", "\Screenshot 2025-04-03 235611.png", "\Screenshot 2025-04-03 235955.png", "\Screenshot 2025-04-04 000008.png"], // Add paths to FinIntel screenshots
        },
        {
            title: "MapFolks - Profile Directory Application",
            description: "A professional profile directory application allowing users to browse, view, and manage profiles, integrated with Google Maps for location display.",
            link: "https://github.com/sahilahmed21/MapFolks",
            website: "https://map-folks.vercel.app/",
            tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "API Integration", "ShadCN"],
            images: ["\Screenshot 2025-04-03 235222.png", "\Screenshot 2025-04-02 234203.png"], // Add paths to MapFolks screenshots
        },
        {
            title: "LeetCode Data Fetcher",
            description: "A Python script using Requests, BeautifulSoup, and Selenium to fetch LeetCode profile stats and submissions, saving as JSON. Powers the backend data retrieval for LeetNotes.",
            link: "https://github.com/sahilahmed21/LeetCode-Data-Fetcher",
            website: "", // No live demo for a script
            tags: ["Python", "Requests", "BeautifulSoup", "Selenium", "LeetCode API", "JSON"],
            images: ["\Screenshot 2025-03-23 171143.png"], // Add path(s) for script examples or output
        },
        {
            title: "FoodBuddy - Restaurant Review & Delivery App",
            description: "A web app for restaurant reviews, discovery, and food delivery with role-based access (Admin, User) and real-time updates.",
            link: "https://github.com/sahilahmed21/FoodBuddy", // Added GitHub link assuming it exists
            website: "https://food-buddy-sand.vercel.app/", // Updated Vercel link if available
            tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "TailwindCSS", "Google OAuth"],
            images: ["\Screenshot 2025-03-21 201624.png", "\Screenshot 2025-04-03 235723.png"], // Add paths to FoodBuddy screenshots
        },
        {
            title: "3D Minimalistic Portfolio",
            description: "A visually appealing portfolio website built with React and Three.js, showcasing developer skills through interactive 3D elements.",
            link: "https://github.com/sahilahmed21/portfolio-website", // Added GitHub link assuming it exists
            website: "https://portfolio-website-phi-smoky.vercel.app/",
            tags: ["React", "Three.js", "React Three Fiber", "React Three Drei", "Tailwind CSS", "EmailJS", "Vite"],
            images: ["\oldportfolio.png"], // Add paths to Portfolio screenshots
        },
        {
            title: "CrudCamp - Campground Review Platform",
            description: "A full-stack web application for campers to discover, rate, and review campgrounds with interactive maps using Mapbox.",
            link: "https://github.com/sahilahmed21/CrudCamp", // Added GitHub link assuming it exists
            website: "", // No live demo link provided
            tags: ["Node.js", "Express", "EJS", "MongoDB", "Passport.js", "Bootstrap", "Mapbox"],
            images: ["\Screenshot 2025-03-21 201421.png"], // Add paths to CrudCamp screenshots
        },
    ];

    // --- Projects Section ---
    return (
        <section id="projects" className="py-16 md:py-20 w-full bg-gray-900/30 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 md:mb-16 text-center" style={{ color: "#E0E0E0" }}>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                    My Projects
                </span>
            </h2>
            {/* Horizontal Scroll Container */}
            {/* `pb-4` adds padding below cards for scrollbar visibility */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#686D76]/70 scrollbar-track-transparent pb-4">
                {/* Increased gap, added horizontal padding `px-4` or `px-8` */}
                <div className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-4 min-w-max">
                    {projectsData.map((project) => ( // Use project.title for key if unique
                        <Card
                            key={project.title} // Assuming titles are unique
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            website={project.website}
                            tags={project.tags}
                            images={project.images} // Pass the images array
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}