import Image from "next/image";
import { ContainerTextFlipMain } from "./components/ContainerTextFlipMain";
import { ExperienceComp } from "./components/ExperienceComp";
import {EducationComp} from "./components/EducationComp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-12 lg:p-16">
      {/* Main content container */}
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header section with wormhole background */}
        <header className="relative">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] opacity-50 -z-10">
            <Image
              src="/WormHole.jpg"
              alt="Wormhole"
              fill
              className="object-cover rounded-full blur-sm"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold">Hi, Vatsa here</h1>
            <div className="h-12">
              <ContainerTextFlipMain />
            </div>
          </div>
        </header>

        {/* About section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Full-stack developer passionate about building scalable APIs and systems.
            I like technology and deep science. They make a dent in the universe.
            Currently expanding my skills in artificial intelligence.
          </p>
        </section>

        {/* Work Experience section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Places I worked at</h2>

            {/* Work Experience Component */}
            <ExperienceComp/>
        </section>

        {/* Education section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Education</h2>

            {/* Education Experience Component */}
            <EducationComp/>
        </section>

        {/* Skills section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Skills/Interests section */}
        <section className="space-y-16">
          <div className="pb-16"></div>
        </section>
      </div>
    </div>
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