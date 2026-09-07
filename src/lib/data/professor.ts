import type { Professor } from "@/lib/types";

export const professor: Professor = {
  id: "abhishek-gupta",
  name: "Dr. Abhishek Gupta",
  title: "Academician, Technical Consultant & Placement Head",
  roles: [
    "Placement Head",
    "Academician",
    "Academic Counsellor (IGNOU)",
    "Technical Consultant",
    "Advisor",
    "HOD Edu Dept.",
    "Coordinator",
  ],
  institution: "New Delhi Institute of Management",
  bio: "Dr. Abhishek Gupta is an esteemed academician associated with the New Delhi Institute of Management. Throughout his academic career, he has seamlessly integrated core theoretical disciplines with applied modern software development. Serving as Placement Head, Head of the Education Department, and Academic Coordinator, Dr. Gupta actively prepares students for the technological demands of today's digital industries. As Academic Counsellor with IGNOU and Technical Consultant & Advisor, he guides learners through curriculum progression, foundational research, and career navigation.",
  shortBio:
    "Dedicated educator, academician, and technology consultant at the New Delhi Institute of Management. Empowering students with foundational depth, industry relevance, and modern computing skills.",
  photo: "/professor.jpeg",
  expertise: [
    { id: "cs", name: "Computer Science", color: "#3b82f6", category: "cs" },
    { id: "python", name: "Python", color: "#10b981", category: "programming" },
    { id: "django", name: "Django", color: "#059669", category: "programming" },
    { id: "iot", name: "IoT", color: "#8b5cf6", category: "iot" },
    { id: "cpp", name: "C++", color: "#ef4444", category: "programming" },
    { id: "powerbi", name: "Power BI", color: "#eab308", category: "analytics" },
    { id: "dbms", name: "DBMS", color: "#f59e0b", category: "database" },
  ],
  affiliations: [
    {
      institution: "New Delhi Institute of Management",
      role: "Placement Head, HOD Edu Dept. & Coordinator",
      type: "primary",
    },
    {
      institution: "IGNOU",
      role: "Academic Counsellor",
      type: "secondary",
    },
  ],
};
