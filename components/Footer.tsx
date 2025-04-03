import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-8 px-4 sm:px-8 md:px-24 border-t bg-[#021526]/30 backdrop-blur-sm" style={{ borderColor: '#686D76/50' }}>
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-medium tracking-wide" style={{ color: '#F6F0F0' }}>Sahil Ahmed Khan</h3>
                        <p className="text-sm" style={{ color: '#F6F0F0' }}>Full-Stack Web Developer</p>
                    </div>

                    <div className="flex justify-center space-x-4 sm:space-x-6">
                        <a
                            href="mailto:sahilahmedpbuh@gmail.com"
                            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-[#373A40]/30"
                            style={{ color: '#F6F0F0' }}
                        >
                            <Mail size={22} />
                            <span className="sr-only">Email</span>
                        </a>
                        <a
                            href="https://github.com/sahilahmed21"
                            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-[#373A40]/30"
                            style={{ color: '#F6F0F0' }}
                        >
                            <Github size={22} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/sahilahmedkhan"
                            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-[#373A40]/30"
                            style={{ color: '#F6F0F0' }}
                        >
                            <Linkedin size={22} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="https://x.com/sahilkahmed"
                            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-[#373A40]/30"
                            style={{ color: '#F6F0F0' }}
                        >
                            <Twitter size={22} />
                            <span className="sr-only">X</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t text-center text-sm" style={{ borderColor: '#686D76/50', color: '#F6F0F0' }}>
                    <p>© {new Date().getFullYear()} Sahil Ahmed Khan. All rights reserved.</p>

                </div>
            </div>
        </footer>
    )
}