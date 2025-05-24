import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './components/theme-provider';
import { FloatingDockMain } from "./components/FloatingDockMain";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vatsa Aditya",
  description: "Portfolio of Vatsa Aditya, a developer specializing in web development, cloud computing, and open source.",
  keywords: [
    "Vatsa Aditya",
    "freelance product engineer",
    "MVP developer",
    "software engineer India",
    "build MVP",
    "startup MVP builder",
    "hire product engineer",
    "freelance backend developer",
    "Next.js developer",
    "Java Spring developer",
    "React developer",
    "portfolio of Vatsa",
    "vatsa freelance",
    "vatsa software engineer",
    "cloud developer",
    "startup product developer",
  ],
  authors: [{ name: "Vatsa Aditya" }],
  creator: "Vatsa Aditya",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vatsa Aditya",
    description: "Explore Vatsa Aditya's portfolio of cutting-edge web apps, tech blogs, and open-source projects.",
    images: ["/WormHole.jpg"],
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
