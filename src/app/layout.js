import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Danendra - Full Stack Developer Portfolio",
  description: "Professional portfolio of Danendra, a passionate Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects and get in touch for collaboration opportunities.",
  keywords: "Full Stack Developer, React Developer, Next.js, Node.js, Web Development, Portfolio, JavaScript, TypeScript, MongoDB, PostgreSQL",
  authors: [{ name: "Danendra" }],
  creator: "Danendra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danendra-portfolio.vercel.app",
    title: "Danendra - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and skills",
    siteName: "Danendra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danendra - Full Stack Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and skills",
    creator: "@danendra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
