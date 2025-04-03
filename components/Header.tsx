"use client"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Detect active section for nav highlighting
            const sections = ["about", "work", "projects", "contact"]
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })

            if (current) {
                setActiveSection(current)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { href: "#about", label: "About" },
        { href: "#work", label: "Work" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" }
    ]

    return (
        <header
            className={`sticky top-0 w-full px-4 sm:px-8 py-5 sm:py-7 flex justify-between items-center transition-all duration-500 z-50 
            ${isScrolled
                    ? "bg-black/60 backdrop-blur-md border-b border-[rgb(110,172,218)]/10"
                    : "bg-transparent"}`}
        >
            <div className="relative">
                <h1
                    className="text-2xl font-light tracking-widest flex items-center"
                    style={{ color: '#021526', fontVariant: "small-caps" }}
                >
                    <span className="relative inline-block before:content-[''] before:absolute before:w-full before:h-[1px] before:bg-[#021526] before:bottom-0 before:left-0 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
                        Sahil Ahmed Khan
                    </span>
                    <span className="ml-1 text-[#021526] animate-pulse"></span>
                </h1>
            </div>

            {/* Mobile menu button with cleaner animation */}
            <button
                title="Toggle menu"
                className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(110,172,218)]/5 hover:bg-[rgb(110,172,218)]/10 transition-all duration-300 border border-[rgb(110,172,218)]/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <div className="relative w-6 h-6">
                    <span
                        className={`absolute w-6 h-0.5 bg-[rgb(46,47,48)] transform transition-all duration-300 ease-in-out 
                        ${isMobileMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1.5"}`}
                    />
                    <span
                        className={`absolute w-6 h-0.5 bg-[rgb(46,47,48)] top-3 transition-all duration-300 ease-in-out 
                        ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                        className={`absolute w-6 h-0.5 bg-[rgb(46,47,48)] transform transition-all duration-300 ease-in-out 
                        ${isMobileMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-4.5"}`}
                    />
                </div>
            </button>

            {/* Desktop navigation with improved hover effects */}
            <nav className="hidden sm:block">
                <ul className="flex space-x-6 sm:space-x-10">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`text-base font-light tracking-wider transition-all duration-300 py-2 px-5 rounded-full relative group
                                ${activeSection === item.href.substring(1)
                                        ? "text-[#021526]"
                                        : "text-[#021526]/70 hover:text-[#021526]"}`}
                            >
                                <span className="relative z-10">{item.label}</span>
                                {activeSection === item.href.substring(1) ? (
                                    <span className="absolute inset-0 bg-[rgb(3,52,110)]/20 rounded-full"></span>
                                ) : (
                                    <span className="absolute inset-0 bg-[rgb(110,172,218)]/0 group-hover:bg-[rgb(110,172,218)]/10 rounded-full transition-colors duration-300"></span>
                                )}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile navigation with better animation */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex items-center justify-center animate-fadeIn">
                    <ul className="flex flex-col space-y-6 text-center w-full px-8">
                        {navItems.map((item, index) => (
                            <li key={item.href} className="transform translate-y-4 opacity-0 animate-slideUpFadeIn" style={{ "--index": index }}>
                                <a
                                    href={item.href}
                                    className="block py-3 text-2xl font-light tracking-wider text-[rgb(46,47,48)]/80 hover:text-[rgb(46,47,48)] transition-colors duration-300 border-b border-[rgb(110,172,218)]/10 pb-4"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}