export const site = {
  name: "Carlos",
  fullName: "Carlos Armijos",
  monogram: "CA",
  role: "AI Engineer | Sistemas Inteligentes & Full-Stack",
  tagline:
    "Ingeniero en Ciencias de la Computación con enfoque en Sistemas Inteligentes. Construyo soluciones reales con IA: desde agentes médicos con RAG hasta pipelines de detección en producción.",
  shortIntro:
    "Ing. Ciencias de la Computación especializado en Sistemas Inteligentes. Diseño y despliego sistemas de IA aplicada — LLMs, RAG, visión por computador y automatización — con una capa full-stack cuando el problema lo requiere.",
  location: "Loja, Ecuador",
  status: "Disponible para proyectos",
  email: "karlozarmijoz@gmail.com",
  phone: "+593 96 063 5764",
  whatsapp: "https://wa.me/593960635764",
  socials: {
    github: "https://github.com/CarlosArmijos1",
    linkedin: "https://www.linkedin.com/in/carlos-armijos-b676b71b2/",
  },
  resumeUrl: "/cv-carlos-armijos.pdf",
  stats: {
    experience: "3+ años",
    projects: "10+",
    stack: "AI · RAG · CV",
  },
};

export const skills = [
  {
    group: "IA & LLMs",
    items: ["LangChain", "RAG", "Groq API", "OpenAI API", "Prompt Engineering", "Fine-tuning"],
  },
  {
    group: "Computer Vision",
    items: ["OpenCV", "PyTorch", "TensorFlow", "YOLO", "MediaPipe", "Tesseract OCR"],
  },
  {
    group: "Lenguajes",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    group: "Full-Stack",
    items: ["React", "Next.js", "FastAPI", "Node.js", "Streamlit"],
  },
  {
    group: "Datos & Vectores",
    items: ["ChromaDB", "PostgreSQL", "MongoDB", "Redis", "SQLite"],
  },
  {
    group: "Herramientas",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "n8n", "Vercel"],
  },
];

export const experience = [
  {
    role: "AI Engineer & Full-Stack Developer",
    company: "Freelance",
    period: "2024 — Presente",
    summary:
      "Diseño y desarrollo de sistemas de IA aplicada para clientes en Latinoamérica: agentes conversacionales, pipelines de RAG, automatizaciones y aplicaciones full-stack.",
    bullets: [
      "Sistema de segunda opinión médica con Vision AI, RAG sobre PubMed y análisis clínico con LLMs (MedInsight AI).",
      "Pipeline de detección y clasificación de contenido NSFW con modelos de visión por computador en producción.",
      "Agentes conversacionales con memoria, herramientas y acceso a bases de datos para automatización de procesos.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Proyectos académicos y de investigación",
    period: "2022 — 2024",
    summary:
      "Investigación aplicada en visión por computador e inteligencia artificial dentro de la universidad, con proyectos interdisciplinares.",
    bullets: [
      "Pipelines de procesamiento de imagen para inspección y clasificación automatizada.",
      "Dashboards interactivos para visualización de datos y métricas en tiempo real.",
      "Integración de modelos de deep learning en aplicaciones web.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Primeros proyectos",
    period: "2021 — 2022",
    summary:
      "Sitios institucionales, landings y micro-aplicaciones para clientes locales en Loja.",
    bullets: [],
  },
];

export const projects = [
  {
    title: "MedInsight AI",
    year: "2025",
    description:
      "Sistema de segunda opinión médica con IA. Extrae valores de laboratorio con Vision AI (Llama 4), genera análisis clínico con LLM y busca evidencia científica en PubMed vía RAG con ChromaDB.",
    tags: ["Python", "Groq API", "RAG", "ChromaDB", "PubMed", "Streamlit"],
    href: "https://github.com/CarlosArmijos1/medinsight-ai",
    repo: "https://github.com/CarlosArmijos1/medinsight-ai",
    featured: true,
  },
  {
    title: "NSFW Detection Pipeline",
    year: "2025",
    description:
      "Pipeline de detección y clasificación de contenido NSFW en imágenes usando modelos de visión por computador. Diseñado para integración en plataformas con moderación automática de contenido.",
    tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
    href: "https://github.com/CarlosArmijos1/nsfw_image_detection_Pipeline",
    repo: "https://github.com/CarlosArmijos1/nsfw_image_detection_Pipeline",
    featured: true,
  },
  {
    title: "Agente Conversacional con Memoria",
    year: "2025",
    description:
      "Agente IA con memoria persistente, acceso a herramientas externas y capacidad de razonamiento multi-paso para automatización de tareas empresariales.",
    tags: ["Python", "LangChain", "OpenAI", "FastAPI"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    title: "Dashboard Energético",
    year: "2024",
    description:
      "Visualización de anomalías de consumo eléctrico con series de tiempo y alertas configurables.",
    tags: ["React", "D3.js", "Node.js"],
    href: "#",
    repo: "#",
    featured: false,
  },
  {
    title: "Sistema de Inspección Visual",
    year: "2024",
    description:
      "Detección y clasificación de defectos en piezas industriales con YOLO y dashboard de supervisión en tiempo real.",
    tags: ["Python", "YOLO", "OpenCV", "FastAPI"],
    href: "#",
    repo: "#",
    featured: false,
  },
  {
    title: "API de Microservicios",
    year: "2023",
    description:
      "API REST con autenticación JWT, rate limiting y observabilidad, dockerizada y desplegada en VPS.",
    tags: ["Node.js", "Express", "Docker"],
    href: "#",
    repo: "#",
    featured: false,
  },
];

export const achievements = [
  "Tesis de Ingeniería en Ciencias de la Computación con enfoque en Sistemas Inteligentes.",
  "Desarrollo de MedInsight AI: sistema RAG médico sobre PubMed con Vision AI y análisis clínico automatizado.",
  "Pipeline de detección NSFW en producción con modelos de visión por computador.",
  "Participación en proyectos interdisciplinares entre ingeniería civil, agroindustria y software.",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];
