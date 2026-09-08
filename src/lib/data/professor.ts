import type { Professor } from "@/lib/types";

export const professor: Professor = {
  id: "abhishek-gupta",
  name: "Dr. Abhishek Gupta",
  title: "Academician, Technical Consultant & Placement Head",
  roles: [
    "Placement Head",
    "Academician",
    "Research Scholar",
    "Academic Counsellor (IGNOU)",
    "Technical Consultant",
    "Advisor",
    "HOD Edu Dept.",
    "Coordinator",
  ],
  institution: "New Delhi Institute of Management",
  orcid: "0009-0000-9701-246X",
  orcidUrl: "https://orcid.org/0009-0000-9701-246X",
  bio: "Dr. Abhishek Kumar Gupta is an esteemed academician, researcher, and educational leader with extensive contributions to computer science education and applied engineering. Associated with premier institutions including New Delhi Institute of Management, KR Mangalam University (Research Scholar), and JIMS Vasant Kunj (former Assistant Professor of IT), he integrates core computational theory with real-time distributed systems, cyber security, and artificial intelligence. Serving as Placement Head, Head of Education Department, and IGNOU Academic Counsellor, Dr. Gupta empowers future technologists through rigorous pedagogy and impactful research indexed in IEEE Xplore and Scopus.",
  shortBio:
    "Dedicated educator, researcher (ORCID: 0009-0000-9701-246X), and technology consultant. Author of peer-reviewed research in Cloud-Fog architectures, AI in healthcare, and cyber security.",
  photo: "/professor.jpeg",
  education: [
    {
      degree: "M.Tech in Computer Science & Engineering (CSE)",
      institution: "Arni University",
      location: "Dharamsala, Himachal Pradesh, India",
    },
    {
      degree: "Master of Computer Applications (MCA - CS)",
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      location: "Lucknow, Uttar Pradesh, India",
    },
  ],
  expertise: [
    { id: "cs", name: "Computer Science", color: "#3b82f6", category: "cs" },
    { id: "python", name: "Python", color: "#10b981", category: "programming" },
    { id: "django", name: "Django", color: "#059669", category: "programming" },
    { id: "iot", name: "IoT & Smart Systems", color: "#8b5cf6", category: "iot" },
    { id: "cpp", name: "C++", color: "#ef4444", category: "programming" },
    { id: "powerbi", name: "Power BI", color: "#eab308", category: "analytics" },
    { id: "dbms", name: "DBMS & SQL", color: "#f59e0b", category: "database" },
  ],
  affiliations: [
    {
      institution: "New Delhi Institute of Management (NDIM - BBA & BCA)",
      role: "Assistant Professor & Placement Cell Head",
      type: "primary",
    },
    {
      institution: "KR Mangalam University (SOET)",
      role: "Research Scholar (School of Engineering & Technology)",
      type: "secondary",
      period: "2025 – Present",
    },
    {
      institution: "Jagannath International Management School (JIMS)",
      role: "Assistant Professor (IT)",
      type: "secondary",
      period: "2023 – 2025",
    },
    {
      institution: "IGNOU",
      role: "Academic Counsellor",
      type: "secondary",
    },
    {
      institution: "Amar Ekta News",
      role: "Technical Consultant",
      type: "secondary",
    },
    {
      institution: "DPIMS Medical College",
      role: "Advisor",
      type: "secondary",
    },
    {
      institution: "Sanjivni Samaj Kalyan Foundation",
      role: "HOD Education Department",
      type: "secondary",
    },
    {
      institution: "RNS Charitable Society",
      role: "Coordinator",
      type: "secondary",
    },
  ],
  editorialBoards: [
    {
      journal: "Results in Engineering",
      publisher: "Elsevier / ScienceDirect",
      role: "Member of the Editorial Board",
      indexedIn: ["Scopus", "Web of Science", "ScienceDirect"],
    },
  ],
  reviewerRoles: [
    "IEEE ICCSC-2026 (2nd International Conference on Computing, Sciences and Communications)",
    "2nd IEEE IC3ECSBHI-2026 (Cognitive Computing in Engineering, Communications & Health Informatics)",
    "ICICI-2026 (International Conference on Innovations in Computational Intelligence, IEEE CIS)",
    "Session Chair: PTEMS-2026 (International Conference on Progressive Trends in Engineering, Management & Science)",
  ],
  certifications: [
    "Innovation Ambassador (IA) 'Upskilling' Certified (MoE's Innovation Cell & AICTE, 2025–26)",
    "Event Coordinator: IIT Guwahati – Alcheringa 2026 (Delhi Highway to Alcher Initiative)",
    "Resource Person: IP Awareness and Patent Filing Workshop (IIC NDIM)",
    "Seminar Speaker: Business Model Fit, IIC & Centre for Green Initiative (CGI), NDIM – March 2026",
    "Certificate of Participation: IEEE 7th AI Symposium, University of South Dakota (June 2025)",
    "Faculty Development Programme (FDP): Research Methodology: Basics to Advanced (IIC NDIM)",
    "Certificate of Participation: World Meditation Day 2025 (Heartfulness – Global)",
    "AI for Atmanirbhar Bharat Speaker: India AI Impact Summit 2026",
  ],
};
