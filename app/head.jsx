export default function Head() {
  return (
    <>
      <title>Vatsa Aditya | Freelance Product Engineer</title>
      <meta
        name="description"
        content="Portfolio of Vatsa Aditya, a full stack developer building MVPs, SaaS products, and scalable systems."
      />
      <meta
        name="keywords"
        content="Vatsa Aditya, freelance product engineer, MVP developer, SaaS builder, software engineer, Next.js, Java Spring, startup developer"
      />
      <meta name="author" content="Vatsa Aditya" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://vatsa.works" />
      <meta property="og:title" content="Vatsa Aditya | Developer Portfolio" />
      <meta
        property="og:description"
        content="Explore projects, blog posts, and open-source work by Vatsa Aditya."
      />
      <meta property="og:image" content="https://vatsa.works/logo.png" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vatsa.works" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vatsa Aditya | Developer Portfolio" />
      <meta name="twitter:description" content="Explore the work and writings of Vatsa Aditya." />
      <meta name="twitter:image" content="https://vatsa.works/twitter_profile_image.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vatsa Aditya",
            "jobTitle": "Freelance Product Engineer",
            "url": "https://vatsa.works",
            "sameAs": [
              "https://www.linkedin.com/in/vatsaaditya/",
              "https://github.com/spector-0110",
              "https://x.com/VatsaAditya1"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "NextGen Scale",
              "url": "https://nextgenscale.com"
            },
            "alumniOf": {
              "@type": "EducationalOrganization",
              "name": "KIET Group of Institutions, Delhi NCR"
            }
          })
        }}
      />
    </>
  );
}