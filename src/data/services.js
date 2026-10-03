/**
 * Services data.
 * Each service drives both the homepage cards and the individual service pages.
 */
export const services = [
  {
    id: "web-development",
    number: "01",
    title: "Web Application Development",
    shortDescription:
      "Modern, responsive and scalable web applications built around your business workflows.",
    icon: "Monitor",
    color: "blue",
    problem:
      "Many businesses rely on outdated tools, spreadsheets, or generic SaaS products that don't quite fit the way they actually work. The result is wasted time, manual workarounds and limited visibility into operations.",
    approach:
      "We start by understanding how your team works — what data you need, what decisions you make, and what slows you down. From there we design and build a web application that fits your actual workflows, not the other way around.",
    whatWeBuild: [
      "Internal business dashboards and admin panels",
      "Customer-facing portals and self-service platforms",
      "Multi-tenant SaaS applications",
      "Data management and reporting tools",
      "Progressive Web Apps (PWA)",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "TypeScript", "HTML5", "CSS3"],
    process: [
      { step: "Requirements", detail: "We map your workflows and define what the application needs to do." },
      { step: "Architecture", detail: "We choose the right frontend stack and plan the component structure." },
      { step: "Design", detail: "We create clean, usable interfaces — functional first, polished second." },
      { step: "Development", detail: "We build iteratively with regular reviews so you're never surprised." },
      { step: "Deployment", detail: "We deploy to production and set up monitoring and error tracking." },
    ],
    faqs: [
      {
        q: "How long does a web application take to build?",
        a: "Depends on complexity. A focused internal tool might take 4–6 weeks. A full customer-facing platform typically takes 8–16 weeks.",
      },
      {
        q: "Do you handle hosting and deployment?",
        a: "Yes. We deploy to cloud platforms (Vercel, AWS, Railway etc.) and can manage ongoing hosting if needed.",
      },
      {
        q: "Can you work with an existing design?",
        a: "Absolutely. If you have Figma files or a design system, we implement them. If not, we design as we build.",
      },
    ],
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software Development",
    shortDescription:
      "Business-specific software designed around your processes, not generic templates.",
    icon: "Code2",
    color: "navy",
    problem:
      "Off-the-shelf software forces your team to adapt to someone else's assumptions. Licensing costs grow. Features you need don't exist. Features you pay for get in the way.",
    approach:
      "We build software that does exactly what your business needs — nothing more, nothing less. We focus on maintainability so your software stays reliable as requirements change over time.",
    whatWeBuild: [
      "ERP and business management systems",
      "Inventory and order management tools",
      "CRM and lead management platforms",
      "Custom reporting and analytics tools",
      "Workflow automation software",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "React", "Docker", "REST APIs"],
    process: [
      { step: "Discovery", detail: "Map existing processes, pain points and data flows." },
      { step: "Specification", detail: "Document clear requirements before writing any code." },
      { step: "Build", detail: "Develop in short cycles with working software at each stage." },
      { step: "Test", detail: "Thorough testing against real business scenarios." },
      { step: "Handover", detail: "Documentation, training and knowledge transfer included." },
    ],
    faqs: [
      {
        q: "How is custom software better than buying a SaaS tool?",
        a: "For specific workflows, custom software is more efficient, cheaper over time, and gives you full control over your data and features.",
      },
      {
        q: "What if our requirements change mid-project?",
        a: "We work iteratively. We accommodate changes — we just document scope changes so timelines are managed honestly.",
      },
    ],
  },
  {
    id: "ai-ml",
    number: "03",
    title: "AI & Machine Learning",
    shortDescription:
      "Intelligent solutions for prediction, classification, analytics and process automation.",
    icon: "BrainCircuit",
    color: "blue",
    problem:
      "Most businesses are sitting on data they can't use. Manual processes that could be automated still rely on human judgment. Decisions are made on gut feeling when data could guide them.",
    approach:
      "We apply machine learning where it genuinely adds value — not because it's trendy. We focus on practical, deployable models that integrate with your existing systems and deliver measurable outcomes.",
    whatWeBuild: [
      "Predictive analytics and forecasting models",
      "Classification and pattern recognition systems",
      "Anomaly detection and alerting",
      "Recommendation engines",
      "Data pipelines and feature engineering",
      "Model deployment APIs",
    ],
    technologies: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "pandas", "FastAPI", "SQL"],
    process: [
      { step: "Data Audit", detail: "Understand what data exists, its quality and what it can tell us." },
      { step: "Problem Framing", detail: "Define the ML problem type and success metric precisely." },
      { step: "Modelling", detail: "Experiment, iterate and evaluate multiple approaches." },
      { step: "Integration", detail: "Wrap the model in an API and connect it to your systems." },
      { step: "Monitoring", detail: "Track model performance over time and retrain when needed." },
    ],
    faqs: [
      {
        q: "Do we need a lot of data to use ML?",
        a: "It depends on the problem. Some tasks need thousands of examples; others work with a few hundred. We assess your data before recommending an approach.",
      },
      {
        q: "Can you explain what the model is doing?",
        a: "Yes. For business-critical decisions, we prioritise explainable models over black-box accuracy.",
      },
    ],
  },
  {
    id: "generative-ai",
    number: "04",
    title: "Generative AI Solutions",
    shortDescription:
      "LLM-powered applications, AI assistants, document processing and intelligent workflows.",
    icon: "Sparkles",
    color: "blue",
    problem:
      "Large language models are genuinely useful — but most businesses don't know how to apply them to their specific context without exposing sensitive data or producing unreliable outputs.",
    approach:
      "We build Generative AI solutions that are grounded, controlled and useful. RAG pipelines, fine-tuned assistants, document intelligence and structured extraction — built with reliability and data privacy in mind.",
    whatWeBuild: [
      "RAG (Retrieval-Augmented Generation) systems",
      "Custom AI assistants and chatbots",
      "Document analysis and extraction pipelines",
      "AI-powered search and knowledge bases",
      "LLM integration into existing software",
      "Prompt engineering and evaluation frameworks",
    ],
    technologies: ["Python", "LangChain", "OpenAI API", "Ollama", "FAISS", "FastAPI", "PostgreSQL"],
    process: [
      { step: "Use Case", detail: "Define exactly what the AI should do and what success looks like." },
      { step: "Data Preparation", detail: "Clean, chunk and index your documents or knowledge base." },
      { step: "Prototype", detail: "Build a working prototype quickly to validate the approach." },
      { step: "Evaluation", detail: "Test outputs systematically before production deployment." },
      { step: "Deploy", detail: "Ship with safety guardrails, usage monitoring and human review hooks." },
    ],
    faqs: [
      {
        q: "Is my business data safe when using LLMs?",
        a: "We can deploy models locally (Ollama) or use privacy-compliant API providers. We design for data privacy first.",
      },
      {
        q: "Will the AI make things up?",
        a: "Hallucination is a real risk. We use RAG and structured outputs to constrain the model to your actual data.",
      },
    ],
  },
  {
    id: "backend-api",
    number: "05",
    title: "Backend & API Development",
    shortDescription:
      "Fast, secure and maintainable backend systems and REST APIs your frontend can rely on.",
    icon: "Server",
    color: "navy",
    problem:
      "A poorly designed API becomes a bottleneck. Undocumented endpoints become maintenance nightmares. Security vulnerabilities in the backend can expose your entire business.",
    approach:
      "We build backends that are clean, documented and performant. Every endpoint has a reason to exist. Authentication, validation and error handling are first-class concerns, not afterthoughts.",
    whatWeBuild: [
      "REST APIs for web and mobile applications",
      "Authentication and authorisation systems",
      "Third-party integrations and webhooks",
      "Background job processing",
      "Database schema design and optimisation",
      "API documentation with OpenAPI/Swagger",
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "JWT", "OAuth2"],
    process: [
      { step: "API Design", detail: "Design endpoints, data models and auth strategy before coding." },
      { step: "Development", detail: "Build with input validation, error handling and logging from day one." },
      { step: "Documentation", detail: "Auto-generate OpenAPI docs. Every endpoint is documented." },
      { step: "Testing", detail: "Unit tests and integration tests for critical paths." },
      { step: "Deploy", detail: "Containerised deployment with health checks and monitoring." },
    ],
    faqs: [
      {
        q: "What API standard do you use?",
        a: "REST for most projects. We follow OpenAPI 3.0 spec so documentation is always accurate.",
      },
      {
        q: "Can you improve an existing API?",
        a: "Yes. We can audit, refactor and document existing APIs without breaking live clients.",
      },
    ],
  },
  {
    id: "automation",
    number: "06",
    title: "Business Automation",
    shortDescription:
      "Automate repetitive processes and reduce manual operational work across your business.",
    icon: "Workflow",
    color: "blue",
    problem:
      "Manual, repetitive tasks consume time that your team should spend on higher-value work. They also introduce errors and create bottlenecks that slow your business down.",
    approach:
      "We identify the processes with the highest automation ROI and build reliable, maintainable automation that your team can understand and manage without depending on a developer for every change.",
    whatWeBuild: [
      "Data entry and report generation automation",
      "Email and notification workflows",
      "File processing and document pipelines",
      "API-to-API integrations",
      "Scheduled jobs and cron automation",
      "ETL pipelines for business data",
    ],
    technologies: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "REST APIs"],
    process: [
      { step: "Process Mapping", detail: "Document the current manual process step by step." },
      { step: "ROI Analysis", detail: "Estimate time saved and identify the highest-value automation targets." },
      { step: "Build", detail: "Automate in stages — working automation beats perfect automation." },
      { step: "Monitoring", detail: "Add logging and alerting so failures are caught before they matter." },
      { step: "Handover", detail: "Document how to maintain and extend each automation." },
    ],
    faqs: [
      {
        q: "What processes are good candidates for automation?",
        a: "Repetitive, rule-based processes with structured inputs and outputs are ideal. We help you identify them.",
      },
      {
        q: "What if the automation breaks?",
        a: "We build with failure handling and alerting built in. You'll know before it becomes a problem.",
      },
    ],
  },
  {
    id: "cloud-deployment",
    number: "07",
    title: "Cloud & Deployment",
    shortDescription:
      "Deploy, configure and maintain production applications reliably in the cloud.",
    icon: "Cloud",
    color: "navy",
    problem:
      "A great application that isn't deployed reliably is a liability. Slow deployments, missing environment configs, no monitoring, and manual scaling create operational risk.",
    approach:
      "We set up production environments properly — with CI/CD, environment management, monitoring and clear deployment processes. You should be able to ship updates confidently.",
    whatWeBuild: [
      "CI/CD pipelines (GitHub Actions)",
      "Docker containerisation",
      "Cloud hosting setup (AWS, Railway, Render, Vercel)",
      "Database provisioning and backups",
      "Environment variable management",
      "Basic monitoring and uptime alerting",
    ],
    technologies: ["Docker", "GitHub Actions", "AWS", "Railway", "Render", "Vercel", "Nginx"],
    process: [
      { step: "Infrastructure Plan", detail: "Choose the right cloud platform for the scale and budget." },
      { step: "Containerise", detail: "Package the application for consistent deployments." },
      { step: "CI/CD", detail: "Automate testing and deployment on every push to main." },
      { step: "Configure", detail: "Set up environment variables, secrets management and access controls." },
      { step: "Monitor", detail: "Add uptime monitoring, error tracking and alerting." },
    ],
    faqs: [
      {
        q: "Which cloud platform do you recommend?",
        a: "It depends on scale and budget. For early-stage, Railway or Render. For scale, AWS. We help you choose based on your situation.",
      },
      {
        q: "Can you migrate an existing application to the cloud?",
        a: "Yes. We assess the current setup and plan a migration that minimises downtime.",
      },
    ],
  },
  {
    id: "data-analytics",
    number: "09",
    title: "Data Analytics",
    shortDescription:
      "Turn raw business data into clear insights through dashboards, reports and analytical pipelines.",
    icon: "BarChart2",
    color: "blue",
    problem:
      "Most businesses collect more data than they can use. It sits in spreadsheets, databases and disconnected tools — and no one has a clear view of what it's actually saying. Decisions get made on gut feeling when the answers are already in the data.",
    approach:
      "We start by understanding what decisions you need to make, then work backwards to identify which data matters, how to clean and structure it, and how to surface it in a way your team will actually use.",
    whatWeBuild: [
      "Business intelligence dashboards (interactive, filterable)",
      "Automated reporting pipelines",
      "Data cleaning and transformation workflows",
      "KPI tracking and operational metrics",
      "Sales, revenue and customer analytics",
      "Custom data visualisations",
      "Database query optimisation for reporting",
    ],
    technologies: ["Python", "pandas", "SQL", "PostgreSQL", "Matplotlib", "Plotly", "FastAPI", "Excel / CSV pipelines"],
    process: [
      { step: "Data Audit", detail: "Understand what data exists, where it lives and what quality issues need addressing." },
      { step: "Requirements", detail: "Define the questions you need answered and the metrics that matter most." },
      { step: "Pipeline", detail: "Build clean, reliable data transformation and aggregation workflows." },
      { step: "Visualise", detail: "Design dashboards and reports that surface the right information clearly." },
      { step: "Automate", detail: "Schedule reports and refresh pipelines so data stays current without manual work." },
    ],
    faqs: [
      {
        q: "Our data is messy and inconsistent. Can you still help?",
        a: "Yes — cleaning messy data is usually the first step. We handle deduplication, normalisation and gap-filling as part of the process.",
      },
      {
        q: "What tools do you build dashboards in?",
        a: "We build custom dashboards using Python and React, or integrate with tools your team already uses. We recommend based on your situation.",
      },
      {
        q: "Can you connect multiple data sources?",
        a: "Yes. We build pipelines that pull from databases, spreadsheets, APIs and other sources into a single consistent view.",
      },
    ],
  },
  {
    id: "consulting",
    number: "10",
    title: "Technical Consulting",
    shortDescription:
      "Help businesses choose the right architecture, technology and implementation strategy.",
    icon: "MessageSquare",
    color: "blue",
    problem:
      "Technology decisions made early have long consequences. A wrong database choice, a poorly defined API contract or the wrong framework can cost months of refactoring.",
    approach:
      "We provide honest, practical technical advice based on your actual situation — not what's popular or what maximises our billable hours. Sometimes the best advice is to keep things simple.",
    whatWeBuild: [
      "Architecture reviews and recommendations",
      "Technology selection guidance",
      "Code and system audits",
      "Project rescue and turnaround plans",
      "Team onboarding and technical documentation",
      "Roadmap and prioritisation workshops",
    ],
    technologies: ["System Design", "Architecture", "Database Design", "API Design", "DevOps"],
    process: [
      { step: "Understand", detail: "Learn the current state — systems, team, constraints and goals." },
      { step: "Assess", detail: "Identify risks, gaps and opportunities." },
      { step: "Recommend", detail: "Provide clear, written recommendations with tradeoffs explained." },
      { step: "Support", detail: "Available to answer questions as you implement the recommendations." },
    ],
    faqs: [
      {
        q: "We already have a developer. Can you just review our architecture?",
        a: "Yes. Standalone architecture reviews are one of the most valuable things we offer.",
      },
      {
        q: "How long does a consulting engagement take?",
        a: "A focused audit can be done in 1–2 weeks. Ongoing advisory relationships are billed monthly.",
      },
    ],
  },
];
