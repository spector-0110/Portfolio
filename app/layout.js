import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme-provider';
import { FloatingDockMain } from "./components/FloatingDockMain";
import Head from "next/head";

<Head>
  <link rel="icon" href="/favicon.ico" />
</Head>


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

{/* <meta property="og:image" content="https://yourdomain.com/logo.png" />
<meta property="og:title" content="Your Site Title" />
<meta property="og:description" content="Short site description." />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://yourdomain.com/logo.png" /> */}

export const metadata = {
  title: "Vatsa Aditya",
  description: "Portfolio of Vatsa Aditya, a developer specializing in web development, cloud computing, and open source.",
  keywords: [
    "Vatsa Aditya",
    "Vatsa PR",
    "Full Stack Developer",
    "Backend Developer",
    "Fintech Developer",
    "Spring Boot Developer",
    "Java Developer",
    "Cloud Computing",
    "AWS Developer",
    "Web Development",
    "Software Engineer",
    "Software Developer",
    "Portfolio",
    "React Developer",
    "Next.js Portfolio",
    "Tech Blogs",
    "Open Source Projects",
    "Frontend Engineer",
    "Web Developer India"
  ],
  authors: [{ name: "Vatsa Aditya" }],
  creator: "Vatsa Aditya",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vatsa Aditya",
    description: "Explore Vatsa Aditya's portfolio of cutting-edge web apps, tech blogs, and open-source projects.",
    images: ["/logo.png"],
    url: "https://vatsa.works",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsa Aditya | Developer Portfolio",
    description: "Explore web projects and blogs by Vatsa Aditya.",
    images: ["/twitter_profile_image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingDockMain/>
        </ThemeProvider>
      </body>
    </html>
  );
}
