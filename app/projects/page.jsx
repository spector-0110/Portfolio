"use client";

import { ProjectShowcase } from '../components/ui/ProjectShowcase';

const projectsData = [
  {
  title: "Tempus (under development)",
  description: "An advance queuing and appoitment solution with a scalable backend for real-time appointment and doctor management using Redis and RabbitMQ, paired with a responsive frontend dashboard featuring pagination, filtering, JWT authentication, and push notifications.",
  image: "/Tempus.png",
  technologies: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Supabase Auth",
    "Axios",
    "React Query",
    "Push Notifications",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Supabase"
  ],
  liveLink: "https://tempus.vatsa.works",
  githubLink: "https://github.com/spector-0110/TEMPUS-BACKEND"
  },
  {
    title: "Brand Landing Page",
    description: "A modern, responsive landing page for a brand built with Next.js and integrated with Next Gen Scale for scalable hosting and deployment.",
    image: "/NextGenScale.png",
    technologies: ["Next.js", "Tailwind CSS", "Vercel","Farmer Motion"],
    liveLink: "https://www.nextgenscale.in",
    githubLink: "https://github.com/spector-0110/NextGen-Scale"
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, featuring dark mode, smooth animations, and responsive design. Showcases my projects and professional experience.",
    image: "/WormHole.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://vatsa.works",
    githubLink: "https://github.com/username/portfolio"
  },
  {
    title: "Digital Dialogue (currently not live: credits of azure were used up)",
    description: "A Java-based blogging platform where users can write and publish blogs. Built with JSP, Servlets, and SQL database, featuring authentication and OTP verification for secure user login.",
    image: "/DigitalDialogue.png",
    technologies: ["Java", "JSP", "AJAX","Servlets", "SQL", "Authentication"],
    liveLink: "https://digitaldialogue.azurewebsites.net",
    githubLink: "https://github.com/spector-0110/Digital-Dialogue"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-16 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
          My Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my featured projects that showcase my skills and experience in web development and software engineering.
        </p>
        <ProjectShowcase projects={projectsData} />
      </div>
    </div>
  );
}