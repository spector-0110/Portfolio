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
            Full-stack developer passionate about building impactful solutions.
            I like technology and deep science. They make a dent in the universe.
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
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Interests</h2>
          <p className="text-lg text-muted-foreground">
            I deeply study art, history, football and great books.
          </p>
        </section>
      </div>
    </div>
  );
}




const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "PyTorch",
  "PostgreSQL",
  "C++",
  "Shitposting"
];

const ExpCards = [
  {
    description: "Product Engineer Intern",
    title: "Rapipay",
    src: "/RapipayLogo.svg",
    ctaText: "visit",
    ctaLink: "https://in.rapipay.com=",
    duration:"2023 - Present",
    content: () => {
      return (
        <p>
            • Loan Debit System:
            • Designed and implemented a Loan Debit System using Spring Boot, automating loan deposit and dormant
            account, reducing manual effort.
            • Utilized MySQL stored procedures and MongoDB to efficiently store, retrieve, and map dormant entries with
            loan deposit records.
            • Developed RESTful APIs for CSV uploads, data processing, and mapping results, optimizing financial
            workflow automation.
            • Fino Payment Bank API Integration:
            • Successfully integrated Fino Payment Bank APIs into RapiPay’s backend system, enabling additional payment
            processing capabilities.
            • Implemented MySQL stored procedures and used AES-256 encryption to securely handle Fino Bank payment
            transaction data within RapiPay’s infrastructure.
            • Developed interface layer between RapiPay’s backend and Fino Bank’s payment services, ensuring seamless
            transaction processing and data synchronization.
          </p>
      );
    },
  },
  {
    description: "Full Stack Developer",
    title: "NextGenScale",
    src: "NextGenScale.png",
    ctaText: "visit",
    ctaLink: "https://www.nextgenscale.in",
    duration:"2023 - Present",
    content: () => {
      return (
          <p>
            •SaaS Platform – Tempus:
              • Co-founded and led the development of Tempus, a production-ready, multi-tenant SaaS platform for hospitals
              and clinics.
              • Tech stack: Node.js, Next.js, Supabase (PostgreSQL + Auth), Redis, RabbitMQ, JWT, RLS, RBAC.
              • Key Contributions:
              ∗ Designed appointment management, doctor availability, patient records, and subscription tracking modules.
              ∗ Implemented row-level security (RLS) and role-based access control (RBAC) for secure multi-tenancy.
              ∗ Used Redis for caching frequently accessed data and improving overall response time.
              ∗ Utilized RabbitMQ for queueing and asynchronously processing background jobs like notifications and
              emails.
              ∗ Integrated magic links, push notifications, and real-time queues using Redis Pub/Sub and WebSockets.
              ∗ Containerized the platform using Docker and set up a CI/CD pipeline with GitHub Actions for automated
            deployments.
          </p>
      );
    },
  },
];
