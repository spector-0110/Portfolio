"use client";
import Image from "next/image";
import { ContainerTextFlipMain } from "./components/ContainerTextFlipMain";
import { ExperienceComp } from "./components/ExperienceComp";
import {EducationComp} from "./components/EducationComp";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background p-8 md:p-12 lg:p-16"
    >
      {/* Main content container */}
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header section with wormhole background */}
        <motion.header 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl font-bold"
            >
              Hi, Vatsa here
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-12"
            >
              <ContainerTextFlipMain />
            </motion.div>
          </div>
        </motion.header>

        {/* About section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Solved a sustainability problem in first year → won college’s biggest hackathon → backed by TBI.
            <br />
            Built Tiqora to fix hospital queue mess — actually used in real clinics.
            <br />
            Worked with startups, built products, and learned how to ship fast.
            <br />
            Tried hands at digital marketing with NextGenScale, landed clients, learned how things grow.
            <br/ >
            I ship fast, care about real impact, and never stopped building.
          </p>
        </motion.section>

        {/* Work Experience section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Places I worked at</h2>

            {/* Work Experience Component */}
            <ExperienceComp/>
        </motion.section>

        {/* Education section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Education</h2>

            {/* Education Experience Component */}
            <EducationComp/>
        </motion.section>

        {/* Skills section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1.6 + (index * 0.1),
                  type: "spring",
                  stiffness: 100 
                }}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Skills/Interests section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="space-y-16"
        >
          <div className="pb-16"></div>
        </motion.section>
      </div>
    </motion.div>
  );
}



const skills = [
  "JavaScript",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "PostgreSQL",
  "Redis",
  "Rabiit MQ",
  "Docker",
];