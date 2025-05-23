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
  title: "Vatsa Protfolio",
  description: "Vatsa's Portfolio contains all the projects and blogs",
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
