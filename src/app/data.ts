export type Lang = "en" | "id";
export type Theme = "dark" | "light";

export const text = {
    en: {
        nav: { home: "Home", projects: "Projects", skills: "Skills", about: "About", contact: "Contact" },
        hero: {
            badge: "Open to Collaborations",
            title: "Turning Data Into Decisions",
            subtitle:
                "Data Analyst & ML Specialist from Manado, Indonesia — exploring how data and machine learning turn into meaningful insights.",
            cta1: "Explore My Work",
            cta2: "Let's Connect",
        },
        stats: [
            { label: "Projects Built", value: "11+" },
            { label: "Hackathons", value: "3+" },
            { label: "Focus", value: "Data & ML" },
            { label: "Status", value: "Open" },
        ],
        projectsTitle: "Featured Projects",
        projectsSubtitle: "A mix of hackathon builds, data analysis, ML pipelines, and freelance work.",
        filters: ["All", "Hackathon", "Data & ML", "Freelance / Internship"],
        viewCode: "View Code",
        viewLive: "Live Demo",
        aboutTitle: "About Me",
        aboutSubtitle: "A peek into who I am and what drives my work.",
        toolboxTitle: "Toolbox",
        beyondTitle: "Beyond the Code",
        hobbies: ["Journaling", "Jogging", "Reading", "Learning Something New"],
        readsTitle: "Currently Reading",
        reads: ["Filosofi Teras", "Cosmos", "Sophie's World"],
        funFactTitle: "Fun Fact",
        funFact:
            "I love nature, especially snorkeling at Bunaken Marine Park. Favorite food: Ayam Mentega. Favorite snacks: donuts & matcha.",
        contactTitle: "Let's Create Something Together",
        contactSubtitle: "Open for freelance work, collaborations, or just a chat about data.",
        downloadCV: "Download CV",
        email: "Email",
    },
    id: {
        nav: { home: "Beranda", projects: "Proyek", skills: "Keahlian", about: "Tentang", contact: "Kontak" },
        hero: {
            badge: "Terbuka untuk Kolaborasi",
            title: "Mengubah Data Jadi Keputusan",
            subtitle:
                "Data Analyst & ML Specialist dari Manado, Indonesia — mendalami bagaimana data dan machine learning bisa jadi insight yang bermakna.",
            cta1: "Lihat Karya Saya",
            cta2: "Mari Terhubung",
        },
        stats: [
            { label: "Proyek Dibuat", value: "11+" },
            { label: "Hackathon", value: "3+" },
            { label: "Fokus", value: "Data & ML" },
            { label: "Status", value: "Terbuka" },
        ],
        projectsTitle: "Proyek Unggulan",
        projectsSubtitle: "Kombinasi hackathon, analisis data, pipeline ML, dan pekerjaan freelance.",
        filters: ["Semua", "Hackathon", "Data & ML", "Freelance / Magang"],
        viewCode: "Lihat Kode",
        viewLive: "Live Demo",
        aboutTitle: "Tentang Saya",
        aboutSubtitle: "Sekilas tentang siapa saya dan apa yang mendorong kerja saya.",
        toolboxTitle: "Toolbox",
        beyondTitle: "Di Luar Kodingan",
        hobbies: ["Journaling", "Jogging", "Membaca", "Belajar Hal Baru"],
        readsTitle: "Sedang Dibaca",
        reads: ["Filosofi Teras", "Cosmos", "Dunia Sofie"],
        funFactTitle: "Fun Fact",
        funFact:
            "Saya suka alam, terutama snorkeling di Taman Laut Bunaken. Makanan favorit: Ayam Mentega. Jajanan favorit: donat & matcha.",
        contactTitle: "Mari Buat Sesuatu Bersama",
        contactSubtitle: "Terbuka untuk freelance, kolaborasi, atau sekadar ngobrol soal data.",
        downloadCV: "Unduh CV",
        email: "Email",
    },
};

export type Project = {
    title: string;
    category: string;
    status: "Done" | "In Progress";
    tag: "Hackathon" | "Data & ML" | "Freelance / Internship";
    tech: string[];
    bullets: { en: string[]; id: string[] };
    github: string;
    live?: string;
};

export const projects: Project[] = [
    {
        title: "PaperPal",
        category: "Hackathon • Collab • 2026",
        status: "Done",
        tag: "Hackathon",
        tech: ["Streamlit", "Qwen AI", "SQLite", "Python"],
        bullets: {
            en: [
                "AI-powered research assistant for searching, summarizing, and remembering academic papers",
                "Combines Semantic Scholar search with Qwen AI summaries and persistent SQLite memory",
            ],
            id: [
                "Asisten riset AI untuk mencari, meringkas, dan mengingat paper akademik",
                "Menggabungkan pencarian Semantic Scholar dengan ringkasan Qwen AI dan memori SQLite",
            ],
        },
        github: "https://github.com/ciputrii21/paperpal",
        live: "https://paperpal-research.streamlit.app",
    },
    {
        title: "LogWatcher ID",
        category: "Hackathon • Splunk Agentic Ops • 2025/2026",
        status: "Done",
        tag: "Hackathon",
        tech: ["Python", "Streamlit", "Groq LLaMA 3.3", "Splunk Cloud"],
        bullets: {
            en: [
                "Bilingual AI agent detecting Indonesian personal data breaches using real breach intelligence",
                "4-tool Splunk MCP pipeline logging every investigation via HEC",
            ],
            id: [
                "AI agent bilingual untuk mendeteksi kebocoran data pribadi warga Indonesia",
                "Pipeline Splunk MCP 4 tools yang mencatat setiap investigasi lewat HEC",
            ],
        },
        github: "https://github.com/ciputrii21/logwatcher-id",
    },
    {
        title: "Find Evil Agent",
        category: "Hackathon • Individual • 2025",
        status: "Done",
        tag: "Hackathon",
        tech: ["Python", "Groq", "Ubuntu/WSL2"],
        bullets: {
            en: [
                "Autonomous cybersecurity incident response agent analyzing system logs and detecting threats",
                "Self-correcting agent that validates findings and exports structured JSON reports",
            ],
            id: [
                "Agent respons insiden siber otonom yang menganalisis log sistem dan mendeteksi ancaman",
                "Agent self-correcting yang memvalidasi temuan dan mengekspor laporan JSON terstruktur",
            ],
        },
        github: "https://github.com/ciputrii21/find-evil-agent-dashboard",
    },
    {
        title: "Brazilian E-Commerce Sales Analysis",
        category: "Personal Project • 2025",
        status: "Done",
        tag: "Data & ML",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
        bullets: {
            en: [
                "Comprehensive analysis of 100,000+ real orders from Olist's Brazilian e-commerce dataset (2016–2018)",
                "Covers sales trends, customer behavior, payment preferences, and interactive dashboards",
            ],
            id: [
                "Analisis komprehensif 100.000+ pesanan nyata dari dataset e-commerce Brazil Olist (2016–2018)",
                "Mencakup tren penjualan, perilaku pelanggan, preferensi pembayaran, dan dashboard interaktif",
            ],
        },
        github: "https://github.com/ciputrii21/ecommerce-sales-analysis",
    },
    {
        title: "Livestream Shopping Analytics — SEA",
        category: "Personal Project • 2025",
        status: "Done",
        tag: "Data & ML",
        tech: ["Python", "Pandas", "EDA"],
        bullets: {
            en: [
                "End-to-end analysis of livestream shopping behavior across Southeast Asia using realistic simulated data",
                "Identifies impulsive-buying drivers, effective time slots/influencers, and campaign discount effectiveness",
            ],
            id: [
                "Analisis end-to-end perilaku belanja livestream shopping di Asia Tenggara menggunakan data simulasi realistis",
                "Mengidentifikasi faktor impulsive buying, slot waktu/influencer efektif, dan efektivitas campaign diskon",
            ],
        },
        github: "https://github.com/ciputrii21/TODO-livestream-shopping",
    },
    {
        title: "House Price Prediction — ML Pipeline",
        category: "Personal Project • 2025",
        status: "Done",
        tag: "Data & ML",
        tech: ["Python", "Scikit-learn"],
        bullets: {
            en: [
                "Production-grade modular ML pipeline predicting house prices from mixed numerical and categorical features",
                "Custom transformers and automated preprocessing in a single Pipeline to prevent data leakage",
            ],
            id: [
                "Pipeline ML modular tingkat produksi untuk memprediksi harga rumah dari fitur numerik dan kategorikal",
                "Transformer custom dan preprocessing otomatis dalam satu Pipeline agar terhindar dari data leakage",
            ],
        },
        github: "https://github.com/ciputrii21/house-price-ml",
    },
    {
        title: "Salary Prediction ML Project",
        category: "Personal Project • 2025",
        status: "Done",
        tag: "Data & ML",
        tech: ["Python", "Scikit-learn", "Linear Regression"],
        bullets: {
            en: [
                "Predicts salary based on work experience using a Linear Regression model",
                "Built as a hands-on exercise focused on core regression techniques",
            ],
            id: [
                "Memprediksi gaji berdasarkan pengalaman kerja menggunakan model Linear Regression",
                "Dibuat sebagai latihan yang berfokus pada teknik regresi dasar",
            ],
        },
        github: "https://github.com/ciputrii21/salary-prediction-streamlit",
    },
    {
        title: "AI Outfit Generator",
        category: "Personal Project • 2026",
        status: "Done",
        tag: "Data & ML",
        tech: ["React", "Node.js", "Groq Vision", "Cloudinary"],
        bullets: {
            en: [
                "AI-powered web app that analyzes clothing photos and suggests outfit combinations",
                "Uses Groq's Llama 4 Vision model with secure image storage via Cloudinary",
            ],
            id: [
                "Aplikasi web AI yang menganalisis foto pakaian dan menyarankan kombinasi outfit",
                "Menggunakan model Llama 4 Vision dari Groq dengan penyimpanan gambar aman via Cloudinary",
            ],
        },
        github: "https://github.com/ciputrii21/TODO-ai-outfit-generator",
        live: "https://ai-outfit-generator-murex.vercel.app/",
    },
    {
        title: "Sistem Kepegawaian Berbasis Website",
        category: "Freelance • Client Project • 2023",
        status: "Done",
        tag: "Freelance / Internship",
        tech: ["PHP", "MySQL", "HTML/CSS/JS"],
        bullets: {
            en: [
                "Web-based employee information system built for a client during college",
                "Clean, simple interface for managing digital employee profile data",
            ],
            id: [
                "Sistem informasi kepegawaian berbasis website untuk klien semasa kuliah",
                "Antarmuka bersih dan sederhana untuk mengelola data profil pegawai secara digital",
            ],
        },
        github: "https://github.com/ciputrii21/sistem_kepegawaian",
    },
    {
        title: "Sistem Informasi Pelayanan Surat",
        category: "Freelance • Client Project • 2023",
        status: "Done",
        tag: "Freelance / Internship",
        tech: ["PHP", "MySQL", "HTML/CSS/JS"],
        bullets: {
            en: [
                "Web-based letter service system digitizing manual submission and management processes",
                "User-friendly interface streamlining the letter service workflow for a client",
            ],
            id: [
                "Sistem pelayanan surat berbasis website yang mendigitalkan proses pengajuan dan pengelolaan manual",
                "Antarmuka ramah pengguna untuk memperlancar alur pelayanan surat bagi klien",
            ],
        },
        github: "https://github.com/ciputrii21/si-pp-paniki-dua",
    },
    {
        title: "Employee Document Archiving System",
        category: "Internship • Pengadilan Negeri Manado • 2023",
        status: "Done",
        tag: "Freelance / Internship",
        tech: ["PHP", "MySQL", "HTML/CSS/JS"],
        bullets: {
            en: [
                "Digital employee document archiving system built during internship at Pengadilan Negeri Manado",
                "Replaces manual filing with an organized, searchable digital archive",
            ],
            id: [
                "Sistem pengarsipan dokumen kepegawaian digital yang dibangun selama magang di Pengadilan Negeri Manado",
                "Menggantikan pengarsipan manual dengan arsip digital yang terorganisir dan mudah dicari",
            ],
        },
        github: "https://github.com/ciputrii21/arsip_pegawai",
    },
    {
        title: "WalmisCareID — Lung Disease Detection",
        category: "Research Project • 2024",
        status: "Done",
        tag: "Data & ML",
        tech: ["Python", "Flask", "MongoDB", "CNN", "Google Colaboratory"],
        bullets: {
            en: [
                "Computer vision web app classifying lung disease from X-ray images using a CNN model trained in Google Colab",
                "Part of a multi-repository system built for an Applied Bachelor's Thesis, later published in Jurnal TIMES",
            ],
            id: [
                "Aplikasi web computer vision untuk mengklasifikasikan penyakit paru dari citra rontgen menggunakan model CNN yang dilatih di Google Colab",
                "Bagian dari sistem multi-repository untuk Tugas Akhir D4, yang kemudian dipublikasikan di Jurnal TIMES",
            ],
        },
        github: "https://github.com/ciputrii21/WalmisCareID---DetectionAPP",
    },
];

export const skills = [
    { name: "Python", level: 80 },
    { name: "Streamlit", level: 75 },
    { name: "SQL / SQLite", level: 75 },
    { name: "Pandas / Data Analysis", level: 75 },
    { name: "Machine Learning", level: 60 },
    { name: "Laravel / PHP", level: 45 },
    { name: "Git / GitHub", level: 70 },
];

export const marqueeTags = [
    "Python",
    "Machine Learning",
    "Data Analysis",
    "Streamlit",
    "SQL",
    "Pandas",
    "Scikit-learn",
    "Clean Code",
    "Problem Solver",
    "Continuous Learner",
];

export const stars = [
    { top: "8%", left: "12%", size: 2 }, { top: "15%", left: "82%", size: 3 },
    { top: "22%", left: "45%", size: 2 }, { top: "30%", left: "6%", size: 2 },
    { top: "12%", left: "60%", size: 1.5 }, { top: "40%", left: "90%", size: 2 },
    { top: "48%", left: "20%", size: 1.5 }, { top: "6%", left: "35%", size: 2 },
    { top: "55%", left: "70%", size: 2.5 }, { top: "35%", left: "55%", size: 1.5 },
    { top: "62%", left: "10%", size: 2 }, { top: "18%", left: "95%", size: 1.5 },
    { top: "70%", left: "40%", size: 2 }, { top: "25%", left: "25%", size: 1.5 },
    { top: "45%", left: "5%", size: 2 }, { top: "10%", left: "70%", size: 2 },
    { top: "58%", left: "88%", size: 1.5 }, { top: "33%", left: "78%", size: 2 },
    { top: "68%", left: "60%", size: 1.5 }, { top: "5%", left: "50%", size: 2 },
];

export const sparkles = [
    { top: "10%", left: "22%", size: 14, delay: 0 },
    { top: "48%", left: "88%", size: 18, delay: 0.6 },
    { top: "72%", left: "18%", size: 12, delay: 1.2 },
    { top: "20%", left: "70%", size: 10, delay: 1.8 },
];
