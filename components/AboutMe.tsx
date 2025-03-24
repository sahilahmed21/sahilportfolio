import { Github, Linkedin, Mail, Instagram, Twitter } from "lucide-react";

interface AboutMeProps {
    isLoading: boolean;
}

export default function AboutMe({ isLoading }: AboutMeProps) {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Left Side: AboutMe Content */}
                <div className="absolute -left-3 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-20 w-full md:w-1/2 pr-0 md:pr-12">
                    <div className="max-w-md">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#373A40]">
                            <span className="text-transparent bg-clip-text text-[#222831]">
                                Sahil Ahmed Khan
                            </span>
                        </h1>


                        <div>
                            <a href="https://drive.google.com/drive/u/0/folders/1msfJga41RHrdgIxwTu_HM-aMoFvb-clX" className="flex items-center justify-center w-40 h-12 bg-transparent border font-medium tracking-wide rounded-full hover:bg-[#021526]/30 transition-all duration-300" style={{ borderColor: '#021526', color: '#021526', backgroundColor: '#373A40/20' }}>
                                Resume
                            </a></div>
                        <br />
                        <br />
                        <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl">

                            <p className="text-lg mb-6 font-normal leading-relaxed text-[#F5F5F5]">
                                Innovative and passionate Software Developer with expertise in AI integration and full-stack development.
                                <br />Still learning, still growing—basically a human AI model in training.
                                <br />On a never-ending quest to level up, break things (then fix them),
                                <br />and build the future. Also, I talk to code more than people—send help (or coffee)!
                            </p>
                        </div>
                        <p className="text-lg mb-4 font-light text-[#686D76]">📍 Gwalior</p>
                        <p className="text-lg mb-4 font-light text-[#686D76]">💻 Full-Stack Developer</p>

                        <div className="flex space-x-6 mb-8 mt-8">
                            <a href="sahilahmedpbuh@gmail.com" className="transition-colors hover:text-[#021526] flex items-center justify-center w-12 h-12 rounded-full bg-[#373A40]/20 hover:bg-[#021526]/30 text-[#686D76]" aria-label="Email">
                                <Mail size={28} />
                            </a>
                            <a href="https://github.com/sahilahmed21" className="transition-colors hover:text-[#021526] flex items-center justify-center w-12 h-12 rounded-full bg-[#373A40]/20 hover:bg-[#021526]/30 text-[#686D76]" aria-label="GitHub">
                                <Github size={28} />
                            </a>
                            <a href="https://www.linkedin.com/in/sahilahmedkhan/" className="transition-colors hover:text-[#021526] flex items-center justify-center w-12 h-12 rounded-full bg-[#373A40]/20 hover:bg-[#021526]/30 text-[#686D76]" aria-label="LinkedIn">
                                <Linkedin size={28} />
                            </a>
                            <a href="https://x.com/sahilkahmed" className="transition-colors hover:text-[#021526] flex items-center justify-center w-12 h-12 rounded-full bg-[#373A40]/20 hover:bg-[#021526]/30 text-[#686D76]" aria-label="Twitter">
                                <Twitter size={28} />
                            </a>
                        </div>
                        <div className="mt-8">
                            <p className="text-base mb-2 font-medium tracking-wide text-[#021526]">
                                Welcome to my portfolio!
                            </p>
                            {isLoading && (
                                <p className="text-base font-light text-[#686D76]">
                                    Loading 3D scene...
                                </p>
                            )}
                        </div>
                        <div className="mt-8">
                            <a href="#contact" className="flex items-center justify-center w-40 h-12 bg-transparent border font-medium tracking-wide rounded-full hover:bg-[#021526]/30 transition-all duration-300" style={{ borderColor: '#021526', color: '#021526', backgroundColor: '#373A40/20' }}>
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Photo Section */}
                <div className="absolute -right-32 top-96 h-6 rounded-full flex items-center justify-center transition-all duration-300 z-20 w-full md:w-1/2 pl-0 md:pl-12">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-[#021526] shadow-2xl ring-4 ring-[#373A40]/50">
                        <img src="\WhatsApp Image 2025-03-24 at 16.15.15_f328f64b.jpg" alt="Sahil Ahmed Khan" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
