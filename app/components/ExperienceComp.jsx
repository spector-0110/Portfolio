"use client";
import ExpandableCards from "./ui/ExpandableCardStandard";

export const ExperienceComp = () => {

    return (
        <ExpandableCards cards={ExpCards}/>
    );
}

const ExpCards = [
  {
    description: "Full Stack Developer",
    title: "NextGenScale",
    src: "NextGenScale.png",
    ctaText: "visit",
    ctaLink: "https://www.nextgenscale.in",
    duration:"March 2025 - Present",
    content:(
        <ul className="list-disc pl-5 space-y-2 text-left">
            <li><strong>SaaS Platform – Tempus:</strong></li>
            <li>Co-founded and led the development of Tempus, a production-ready, multi-tenant SaaS platform for hospitals and clinics.</li>
            <li><strong>Technologies:</strong> Node.js, Next.js, Supabase (PostgreSQL + Auth), Redis, RabbitMQ, JWT, RLS, RBAC.</li>
            <li>Designed appointment management, doctor availability, patient records, and subscription tracking modules.</li>
            <li>Implemented RLS and RBAC for secure multi-tenancy.</li>
            <li>Used Redis for caching frequently accessed data and improving response time.</li>
            <li>Utilized RabbitMQ for background jobs like notifications and emails.</li>
            <li>Integrated magic links, push notifications, and real-time queues with Redis Pub/Sub and WebSockets.</li>
            <li>Containerized the platform using Docker and automated deployments via GitHub Actions CI/CD.</li>
        </ul>
      )
  },
  {
    description: "Product Engineer Intern",
    title: "Rapipay Fintech Pvt. Ltd.",
    src: "/Rapi.jpeg",
    ctaText: "visit",
    ctaLink: "https://in.rapipay.com=",
    duration:"August 2024 - March 2025",
    content: (
    <ul className="list-disc pl-5 space-y-2 text-left">
        <li><strong>Loan Debit System:</strong></li>
        <li>Designed and implemented a Loan Debit System using Spring Boot...</li>
        <li>Utilized MySQL stored procedures...</li>
        <li>Developed RESTful APIs...</li>
        <li><strong>Fino Payment Bank API Integration:</strong></li>
        <li>Successfully integrated Fino Payment Bank APIs...</li>
        <li>Implemented MySQL stored procedures and used AES-256 encryption...</li>
        <li>Developed interface layer between RapiPay and Fino...</li>
        <p>
        <strong>Technologies:</strong> Java, Spring Boot, MySQL, RabbitMQ, Redis, Docker, GitHub Actions CI/CD.
        </p>
    </ul>
)
  },
];