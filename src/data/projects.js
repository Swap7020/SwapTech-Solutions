/**
 * Projects / Case Studies data.
 * Sourced from github.com/Swap7020 — only real, publicly verifiable projects.
 */
export const projects = [
  {
    id: "mydriver",
    title: "MyDriver",
    tagline: "Hire a verified driver for your personal vehicle",
    category: "Full Stack · On-Demand Services",
    description:
      "MyDriver is a full-stack platform connecting vehicle owners with verified professional drivers — for emergencies, late nights, or whenever they need one. Built as a final-year project, the platform includes a customer-facing booking experience, driver onboarding, and an admin operations dashboard.",
    problem:
      "Vehicle owners in situations where they cannot drive — emergencies, late nights, medical appointments — had no reliable way to find a verified professional driver for their own car. Existing ride-hailing apps send their own vehicles, not a driver for yours.",
    solution:
      "Built the complete product end to end: a customer-facing landing page and booking flow, a verified driver onboarding system, and a React + FastAPI backend handling bookings, driver profiles and ride tracking. Deployed on Vercel.",
    outcome:
      "A live, deployed full-stack application available at the Vercel production URL. Covers the complete booking lifecycle from customer request to driver assignment.",
    technologies: ["React", "FastAPI", "Python", "JavaScript", "REST APIs"],
    githubUrl: "https://github.com/Swap7020/AI-Powered-Emergency-Driver-Booking-App",
    liveUrl: "https://ai-powered-emergency-driver-booking.vercel.app",
    image: "/images/projects/mydriver.png",
    imageAlt: "MyDriver — Your Car. Our Driver. landing page",
    usePreview: true,
    previewComponent: "MyDriverPreview",
    featured: true,
    color: "navy",
    year: "2026",
  },
  {
    id: "advanced-text-analyzer",
    title: "Advanced Text Analyzer",
    tagline: "Text analysis and processing web application",
    category: "Web Application · NLP",
    description:
      "A web-based text analysis tool that processes and extracts insights from text input. Built with JavaScript and deployed on Vercel, the application provides text statistics, analysis and processing features through a clean browser interface.",
    problem:
      "Quick text analysis tasks — word count, character analysis, pattern detection — typically require switching between multiple tools or writing one-off scripts.",
    solution:
      "Built a focused single-page application that handles text analysis in the browser with a clean interface. Covers common analysis operations without requiring any backend or login.",
    outcome:
      "A deployed, publicly accessible tool available at advanced-text-analyzer.vercel.app.",
    technologies: ["JavaScript", "HTML", "CSS", "Vercel"],
    githubUrl: "https://github.com/Swap7020/Advanced-Text-Analyzer",
    liveUrl: "https://advanced-text-analyzer.vercel.app",
    image: "",
    imageAlt: "Advanced Text Analyzer application interface",
    usePreview: true,
    previewComponent: "TextAnalyzerPreview",
    featured: true,
    color: "blue",
    year: "2026",
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    tagline: "Analyze resumes against job descriptions using AI",
    category: "Generative AI · Python",
    description:
      "A Python-based tool that uses AI to analyze a candidate's resume against a specific job description. The system identifies skill matches, gaps and provides structured feedback — useful for recruiters screening candidates or candidates preparing applications.",
    problem:
      "Manually comparing a resume to a job description is time-consuming and inconsistent. Key skill gaps are easy to miss when reviewing many applications.",
    solution:
      "Built a Python application that takes a resume and job description as inputs, runs AI-powered analysis to extract and compare skills, and outputs a structured match report with gap identification.",
    outcome:
      "A working AI analysis pipeline that produces structured resume-to-JD comparison reports.",
    technologies: ["Python", "Generative AI", "NLP"],
    githubUrl: "https://github.com/Swap7020/AI-Resume-Analyzer",
    liveUrl: "",
    image: "",
    imageAlt: "AI Resume Analyzer output showing skill match analysis",
    usePreview: false,
    featured: false,
    color: "blue",
    year: "2026",
  },
  {
    id: "tradepilot",
    title: "Hospital Management System",
    tagline: "Python-based hospital operations management system",
    category: "Custom Software · Healthcare",
    description:
      "A Python application for managing core hospital operations — patient records, appointments, doctor assignments and administrative workflows. Built to demonstrate domain-specific software design for the healthcare sector.",
    problem:
      "Small healthcare facilities managing patients and appointments with spreadsheets or paper records face data disorganisation and scheduling errors.",
    solution:
      "Designed and built a structured Python application covering patient registration, appointment scheduling, doctor management and basic record keeping with a clean data model.",
    outcome:
      "A functional hospital management system demonstrating domain-specific software architecture in Python.",
    technologies: ["Python"],
    githubUrl: "https://github.com/Swap7020/Hospital-Management-System",
    liveUrl: "",
    image: "",
    imageAlt: "Hospital Management System interface",
    usePreview: false,
    featured: false,
    color: "navy",
    year: "2026",
  },
  {
    id: "tradepilot",
    title: "TradePilot",
    tagline: "AI/ML-powered financial market analysis platform",
    category: "AI/ML · Finance",
    description:
      "TradePilot is a financial market application that uses machine learning models to analyse market data, detect patterns and surface insights for traders. The platform combines data ingestion with ML-based signal generation and a clean analytical dashboard.",
    problem:
      "Traders spend significant time manually analysing charts and market data to form decisions. The process is time-consuming, inconsistent and prone to emotional bias.",
    solution:
      "Built an ML pipeline that ingests market data, extracts technical features and applies trained models to generate pattern-based signals. Results are presented through a focused dashboard designed for quick decision-making.",
    outcome:
      "A working AI-assisted analytical tool that surfaces data-driven signals for evaluation.",
    technologies: ["Python", "FastAPI", "React", "Machine Learning", "REST APIs", "PostgreSQL"],
    githubUrl: "https://github.com/Swap7020",
    liveUrl: "",
    image: "/images/projects/tradepilot.png",
    imageAlt: "TradePilot application dashboard showing market analytics",
    usePreview: false,
    featured: false,
    color: "blue",
    year: "2024",
  },
];
