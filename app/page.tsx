"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import React, { useRef, useState } from "react";
import VariableProximity from "@/components/VariableProximity";
import BlurText from "@/components/ui/BlurText";
import Aurora from "@/components/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  React.useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 60,
    });
  }, []);

  const teamMembers = [
    {
      name: "Avail Dwi Febrianto",
      role: "Full Stack Developer",
      image: "/avail1.jpg",
      skills: ["React", "Node.js", "TypeScript"],
      github: "#",
      linkedin: "#",
    },
    {
      name: "M. Dika Maulana",
      role: "Backend Developer",
      image: "/dika.jpg",
      skills: ["PHP", "JavaScript", "CSS"],
      github: "#",
      linkedin: "#",
    },
    {
      name: "M. Hisyam Syafaat",
      role: "Editor & Content Creator",
      image: "/paat.jpg",
      skills: ["Python", "Blender", "Unity"],
      github: "#",
      linkedin: "#",
    },
    {
      name: "Arlafelda Meindra Widayat",
      role: "Full Stack Developer",
      image: "/arla.jpg",
      skills: ["PHP", "JavaScript", "UI/UX Design"],
      github: "#",
      linkedin: "#",
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with team features",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Python", "Chart.js"],
      link: "#",
    },
  ]

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Figma",
    "Adobe XD",
  ]

  const skillLogos: { [key: string]: string } = {
    "React": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
    "Next.js": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
    "Node.js": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
    "Python": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",
    "TypeScript": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
    "JavaScript": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg",
    "MongoDB": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg",
    "AWS": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg",
    "Docker": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
    "Figma": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
    "Adobe XD": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobexd.svg",
  };

  const skillColors: { [key: string]: string } = {
    "React": "#61DAFB",
    "Next.js": "#000000",
    "Node.js": "#339933",
    "Python": "#3776AB",
    "TypeScript": "#3178C6",
    "JavaScript": "#F7DF1E",
    "PostgreSQL": "#4169E1",
    "MongoDB": "#47A248",
    "AWS": "#FF9900",
    "Docker": "#2496ED",
    "Figma": "#F24E1E",
    "Adobe XD": "#FF61F6",
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 flex flex-row items-center justify-between h-20">
          <div className="flex items-center">
          </div>
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className={`block h-0.5 w-6 bg-purple-400 transition-all duration-300 mb-1 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-purple-400 transition-all duration-300 mb-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 bg-purple-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          {/* Desktop menu */}
          <ul className="hidden md:flex gap-4 md:gap-8 text-base md:text-lg font-medium justify-center mx-auto">
            <li>
              <button className="hover:text-purple-400 hover:bg-purple-900/20 px-4 py-2 rounded transition-colors duration-200" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            </li>
            <li>
              <button className="hover:text-purple-400 hover:bg-purple-900/20 px-4 py-2 rounded transition-colors duration-200" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button>
            </li>
            <li>
              <button className="hover:text-purple-400 hover:bg-purple-900/20 px-4 py-2 rounded transition-colors duration-200" onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>Team</button>
            </li>
            <li>
              <button className="hover:text-purple-400 hover:bg-purple-900/20 px-4 py-2 rounded transition-colors duration-200" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button>
            </li>
            <li>
              <button className="hover:text-purple-400 hover:bg-purple-900/20 px-4 py-2 rounded transition-colors duration-200" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
            </li>
            <li>
              <button className="hover:text-purple-400 hover:bg-purple-900/20 px-4 py-2 rounded transition-colors duration-200" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contacts</button>
            </li>
          </ul>
        </div>
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/80 z-40" onClick={() => setIsMenuOpen(false)}></div>
        )}
        <ul
          className={`md:hidden fixed top-20 left-0 w-full bg-gray-900/95 z-50 flex flex-col items-center gap-2 py-6 shadow-lg transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}`}
        >
          <li>
            <button className="w-full text-left px-6 py-3 text-lg hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button>
          </li>
          <li>
            <button className="w-full text-left px-6 py-3 text-lg hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200" onClick={() => { setIsMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>About</button>
          </li>
          <li>
            <button className="w-full text-left px-6 py-3 text-lg hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200" onClick={() => { setIsMenuOpen(false); document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' }); }}>Team</button>
          </li>
          <li>
            <button className="w-full text-left px-6 py-3 text-lg hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200" onClick={() => { setIsMenuOpen(false); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>Skills</button>
          </li>
          <li>
            <button className="w-full text-left px-6 py-3 text-lg hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200" onClick={() => { setIsMenuOpen(false); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>Projects</button>
          </li>
          <li>
            <button className="w-full text-left px-6 py-3 text-lg hover:text-purple-400 hover:bg-purple-900/20 transition-colors duration-200" onClick={() => { setIsMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contacts</button>
          </li>
        </ul>
      </nav>
      {/* Removed the h-20 spacer to prevent black background behind navbar */}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Aurora animated background */}
        <div className="absolute inset-0 z-0">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <BlurText
            text="4Ever"
            delay={100}
            animateBy="letters"
            direction="top"
            onAnimationComplete={() => console.log('Animation completed!')}
            className="text-6xl md:text-8xl font-bold mb-6 text-white justify-center"
          />
          {/* Subtitle with interactive VariableProximity animation */}
          <div
            ref={containerRef}
            style={{ position: 'relative' }}
            className="flex justify-center mb-8"
          >
            <VariableProximity
              label={"We are a dynamic team of four passionate developers and designers creating innovative digital solutions"}
              className={"text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />
          </div>
          <Button
            size="lg"
            className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-base md:text-lg"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discover Our Work
          </Button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-gray-900/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center mb-12 text-purple-400">About 4Ever</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              4Ever is a collective of four talented individuals who came together with a shared vision: to create
              exceptional digital experiences that last forever. Our diverse skill set spans full-stack development,
              UI/UX design, and cutting-edge technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-gray-800 border-purple-500/20 w-full max-w-xs mx-auto">
                <CardHeader>
                  <CardTitle className="text-purple-400">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We push boundaries and embrace new technologies to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-purple-500/20 w-full max-w-xs mx-auto">
                <CardHeader>
                  <CardTitle className="text-purple-400">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our strength lies in our teamwork and diverse perspectives working in harmony.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-purple-500/20 w-full max-w-xs mx-auto">
                <CardHeader>
                  <CardTitle className="text-purple-400">Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We strive for perfection in every project, ensuring quality that stands the test of time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} className="w-24 h-24 object-cover" />
                    <AvatarFallback className="bg-purple-600 text-white text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 bg-gray-900/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const color = skillColors[skill] || "#888";
                // SVG logo inline untuk warna asli
                const svgIcons: Record<string, React.ReactNode> = {
                  "React": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="2.5" fill="#61DAFB"/>
                      <g stroke="#61DAFB" strokeWidth="1.5" fill="none">
                        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)"/>
                        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)"/>
                        <ellipse rx="10" ry="4.5" cx="12" cy="12"/>
                      </g>
                    </svg>
                  ),
                  "Node.js": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L21 7.5V16.5L12 22L3 16.5V7.5L12 2Z" fill="#393"/>
                      <path d="M12 17V12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  "Python": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="20" height="7" rx="3.5" fill="#3776AB"/>
                      <rect x="2" y="11" width="20" height="7" rx="3.5" fill="#FFD43B"/>
                    </svg>
                  ),
                  "TypeScript": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="#3178C6" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="4" fill="#3178C6"/>
                      <text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">TS</text>
                    </svg>
                  ),
                  "JavaScript": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="#F7DF1E" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
                      <text x="50%" y="60%" textAnchor="middle" fill="#222" fontSize="10" fontWeight="bold" fontFamily="Arial">JS</text>
                    </svg>
                  ),
                  "PostgreSQL": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#336791"/>
                      <ellipse cx="12" cy="12" rx="6" ry="3.5" fill="#fff" fillOpacity=".2"/>
                    </svg>
                  ),
                  "MongoDB": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C12 2 7 9 12 22C17 9 12 2 12 2Z" fill="#47A248"/>
                    </svg>
                  ),
                  "AWS": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#FF9900"/>
                      <text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">AWS</text>
                    </svg>
                  ),
                  "Docker": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="#2496ED" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="4" fill="#2496ED"/>
                      <text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">DKR</text>
                    </svg>
                  ),
                  "Figma": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="4" fill="#F24E1E"/>
                      <circle cx="16" cy="8" r="4" fill="#A259FF"/>
                      <circle cx="8" cy="16" r="4" fill="#0ACF83"/>
                      <circle cx="16" cy="16" r="4" fill="#1ABCFE"/>
                    </svg>
                  ),
                  "Adobe XD": (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 mb-2" fill="#FF61F6" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="4" fill="#FF61F6"/>
                      <text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="Arial">XD</text>
                    </svg>
                  ),
                };
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-gray-800 border border-purple-500/10 rounded-lg shadow-sm p-4 transition-all duration-200 hover:shadow-lg hover:border-purple-400 hover:bg-gray-800/80 cursor-pointer min-h-[110px] min-w-0"
                    style={{ minWidth: 0 }}
                  >
                    {svgIcons[skill] ? (
                      <span>{svgIcons[skill]}</span>
                    ) : (
                      <span className="w-8 h-8 mb-2 flex items-center justify-center bg-purple-600/20 text-purple-300 rounded-full text-lg font-bold">
                        {skill[0]}
                      </span>
                    )}
                    <span className="text-sm md:text-base text-purple-200 font-medium text-center truncate w-full">
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    {project.title}
                    <Button size="sm" variant="ghost" className="text-purple-400 hover:text-purple-300">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-600/20 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-gray-900/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing together.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-gray-300">hello@4ever.dev</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-gray-300">San Francisco, CA</p>
              </div>
            </div>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 4Ever. All rights reserved. Built with passion and dedication.</p>
        </div>
      </footer>
    </div>
  )
}

// VariableProximity demo component
function VariableProximityDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={containerRef} style={{ position: "relative" }} className="flex justify-center mb-8">
      <VariableProximity
        label={"We are a dynamic team of four passionate developers and designers creating innovative digital solutions"}
        className={"variable-proximity-demo"}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={120}
        falloff="linear"
      />
    </div>
  );
}
