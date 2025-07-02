"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import React, { useRef } from "react";
import VariableProximity from "@/components/VariableProximity";
import BlurText from "@/components/ui/BlurText";
import Aurora from "@/components/Aurora";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      image: "/placeholder.svg?height=200&width=200",
      skills: ["React", "Node.js", "TypeScript"],
      github: "#",
      linkedin: "#",
    },
    {
      name: "M. Dika Maulana",
      role: "Backend Developer",
      image: "/placeholder.svg?height=200&width=200",
      skills: ["PHP", "JavaScript", "CSS"],
      github: "#",
      linkedin: "#",
    },
    {
      name: "M. Hisyam Syafaat",
      role: "Editor & Content Creator",
      image: "/placeholder.svg?height=200&width=200",
      skills: ["Python", "Blender", "Unity"],
      github: "#",
      linkedin: "#",
    },
    {
      name: "Arlafelda Maeindra Widayat",
      role: "Full Stack Developer",
      image: "/placeholder.svg?height=200&width=200",
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 flex flex-row items-center justify-between h-20">
          <div className="flex items-center">
          </div>
          <ul className="flex gap-6 md:gap-10 text-lg font-medium justify-center mx-auto">
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg"
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
      <section id="about" className="py-20 bg-gray-900/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">About 4Ever</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              4Ever is a collective of four talented individuals who came together with a shared vision: to create
              exceptional digital experiences that last forever. Our diverse skill set spans full-stack development,
              UI/UX design, and cutting-edge technologies.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-gray-800 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-400">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    We push boundaries and embrace new technologies to deliver cutting-edge solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-purple-400">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Our strength lies in our teamwork and diverse perspectives working in harmony.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-purple-500/20">
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
      <section id="team" className="py-20" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
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
      <section id="skills" className="py-20 bg-gray-900/50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Our Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-lg px-4 py-2 border-purple-500 text-purple-300 hover:bg-purple-600/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20" data-aos="fade-up">
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
      <section id="contact" className="py-20 bg-gray-900/50" data-aos="fade-up">
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
