import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { professor } from "@/lib/data/professor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://abhishekgupta.ac.in"; // Update when deployed

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Abhishek Gupta | Academician & Technology Professional",
    template: "%s | Dr. Abhishek Gupta",
  },
  description:
    "Personal academic knowledge platform of Dr. Abhishek Gupta — Placement Head, Academician, and Technical Consultant at New Delhi Institute of Management. Access lecture notes, study materials, YouTube lectures, and research.",
  keywords: [
    "Dr. Abhishek Gupta",
    "NDIM",
    "New Delhi Institute of Management",
    "Python",
    "DBMS",
    "IoT",
    "C++",
    "Power BI",
    "Django",
    "Computer Science",
    "Placement Head",
    "Academic Counsellor",
    "IGNOU",
    "Study Materials",
  ],
  authors: [{ name: "Dr. Abhishek Gupta" }],
  creator: "Dr. Abhishek Gupta",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Dr. Abhishek Gupta — Academic Platform",
    title: "Dr. Abhishek Gupta | Academician & Technology Professional",
    description:
      "Personal academic knowledge platform — notes, lectures, and research by Dr. Abhishek Gupta.",
    images: [{ url: "/abhishek-gupta-neww.jpeg", width: 1200, height: 630, alt: "Dr. Abhishek Gupta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Abhishek Gupta | Academician & Technology Professional",
    description:
      "Personal academic knowledge platform — notes, lectures, and research by Dr. Abhishek Gupta.",
    images: ["/professor.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Abhishek Gupta",
  jobTitle: "Placement Head, Academician & Technical Consultant",
  worksFor: {
    "@type": "EducationalOrganization",
    name: "New Delhi Institute of Management",
  },
  knowsAbout: [
    "Python Programming",
    "Django Web Framework",
    "Internet of Things",
    "C++ Programming",
    "Power BI",
    "Database Management Systems",
    "Computer Science",
  ],
  url: siteUrl,
  image: `${siteUrl}/professor.jpeg`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#fbfbfd] font-[family-name:var(--font-geist-sans)] relative min-h-screen">
        <AmbientBackground />
        <Navbar professor={professor} />
        <main id="main-content" className="relative z-10">{children}</main>
        <Footer professor={professor} />
      </body>
    </html>
  );
}
