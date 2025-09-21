// Data untuk semua project
export const projectsData = [
  {
    id: 1,
    slug: "aplikasi-perkantoran", // untuk URL
    title: "Aplikasi Perkantoran",
    shortDescription: "Analisis Data Lowongan Pekerjaan di Media Sosial.",
    fullDescription: `
    Media untuk menganalisis data lowongan pekerjaan yang diambil dari berbagai platform media sosial seperti LinkedIn, Indeed, dan lainnya. Aplikasi ini dirancang untuk membantu perusahaan dalam memahami tren pasar kerja, kebutuhan keterampilan, dan preferensi kandidat melalui visualisasi data yang interaktif dan mudah dipahami.
    `,
    
    // Gambar utama untuk thumbnail/card
    thumbnail: "/images/projects/Project1-AplikasiPerkantoran.png",
    
    // Gambar-gambar pendukung untuk gallery di halaman detail
    images: [
      "/images/projects/Project1-AplikasiPerkantoran.png",
    ],
    
    // Tech stack yang digunakan
    techStack: [
      { name: "SpreadSheet", category: "Data Visualization" },
    ],
    
    // Multiple GitHub repositories dengan identifikasi
    githubRepositories: [
      {
        name: "Data Analysis Spreadsheet",
        description: "Google Sheets dengan analisis data lengkap",
        url: "https://docs.google.com/spreadsheets/d/1EqOTRbniVXCjuviCtCd-Z6WP4oQAaJOk/edit?usp=share_link&ouid=101430490672901309957&rtpof=true&sd=true",
        type: "main" // main, frontend, backend, documentation, etc.
      }
    ],
    
    // Untuk backward compatibility (akan digunakan jika githubRepositories kosong)
    githubUrl: null,
    
    // Link demo (opsional)
    demoUrl: null, // atau "https://demo-perkantoran.vercel.app"
    
    // Fitur-fitur utama
    features: [
        "Data collection from multiple social media platforms",
        "Interactive dashboards for data visualization",
        "Customizable reports and analytics",
        "User-friendly interface for non-technical users",
        "Export options for data and reports"
    ],
    
    // Challenges yang dihadapi dan solusinya
    challenges: [
      {
        problem: "Handling large datasets efficiently",
        solution: "Optimized data queries and implemented lazy loading techniques"
      },

    ],
    
    // Status project
    status: "Completed", // "In Progress", "Completed", "Maintenance"
    
    // Timeline pengerjaan
    timeline: {
      duration: "3.5 bulan"
    },
    
    // Role dalam project
    role: "Data Analyst",
    
    // Team size (jika collaborative)
    teamSize: 6, // Solo project
    
    // Kategori project
    category: "Data Analysis",
    
    // Tags untuk filtering
    tags: ["Data Analysis", "Google Sheets", "Visualization"],
    
    // Apakah ditampilkan di landing page
    showOnLandingPage: false,
    
    // Metrics atau achievements
    metrics: {
    }
  },
  
  // Contoh project kedua (placeholder untuk expansion)
  {
    id: 2,
    slug: "self-and-peer-assessment",
    title: "Self and Peer Assessment Application",
    shortDescription: "Aplikasi untuk penilaian diri dan rekan kerja dengan menggunakan Simplified Lesk Algorithm.",
    fullDescription: "Aplikasi ini dirancang untuk memfasilitasi proses penilaian diri dan rekan kerja dalam lingkungan pendidikan pembelajaran berbasis proyek dalam implementasinya Aplikasi ini menggunakan NLP untuk membantu dalam menjaga realibitas dari jawaban assessment terhadap rubrik penilaian yang sangat dinamis.",
    thumbnail: "/images/projects/Project6-TugasAkhir.png", // placeholder
    images: [
        "/images/projects/Project6-TugasAkhir.png",
        "/images/projects/Project6-1.png",
        "/images/projects/Project6-2.png",
    ],
    techStack: [
    { name: "Laravel",  category: "Framework" },
    { name: "MySQL",  category: "Database" },
    { name: "PHP", category: "Backend" },
    { name: "Vue.js",  category: "Frontend" },
    { name: "Tailwind CSS",  category: "CSS Framework" },
    { name: "Python",  category: "NLP" },

    ],
    
    // Multiple GitHub repositories dengan identifikasi
    githubRepositories: [
      {
        name: "Fullstack Repositories (Laravel + Vue.js)",
        description: "Fullstack application dengan Laravel, MySQL, and Vue.js",
        url: "https://github.com/DanendraGafrila25/TA_KoTa201",
        type: "Fullstack Repository"
      },
      {
        name: "NLP Processing (Python)",
        description: "Natural Language Processing untuk analisis sentiment",
        url: "https://github.com/DanendraGafrila25/TA_201_Flask",
        type: "Simplified Lesk Algorithm Repository"
      }
    ],
    
    // Untuk backward compatibility
    githubUrl: null,
    demoUrl: null,
    features: ["User authentication",
      "Manage self and peer assessments",
      "Dynamic rubric creation",
      "NLP-powered answer analysis using Simplified Lesk Algorithm",
      "Real-time feedback and reporting",
      "Integration with existing AI platforms",
    ],
    challenges: [
      {
        problem: "a very long time to process and create reports for an assessment",
        solution: "developing a feature that is used to analyze and draw conclusions using assessment data, create data visualizations, and reduce cost time by over 30%" 
      },
      {
        problem: "the rubric used is very dynamic and can change at any time",
        solution: "implementing the Simplified Lesk Algorithm to maintain the reliability of assessment answers against dynamic rubrics"
      },
      {
        problem: "ensuring the reliability of the assessment answers against the evaluation rubric that has been created.",
        solution: "developing features using the simplified Lesk algorithm by utilizing assessment answer parameters and scoring rubrics and ultimately producing grade recommendations"
      },
    ],
    status: "Completed",
    timeline: { start: "2025-02", end: "2025-07", duration: "Completed" },
    role: "Full Stack Developer",
    teamSize: 3,
    category: "Web Development",
    tags: ["Laravel", "Vue.js", "NLP", "PHP", "MySQL", "Tailwind CSS", "Python"],
    
    // Apakah ditampilkan di landing page
    showOnLandingPage: true,
    
    metrics: {
        "Jumlah Pengguna": "100+/Project",
        "Umpan Balik Positif": "95%",
        "Peningkatan Efisiensi": "30%",
        "Waktu Pengembangan": "3 bulan"
    }
  },

    {
    id: 3,
    slug: "ArtConnect",
    title: "ArtConnect - Social Media for Art Enthusiasts",
    shortDescription: "A social media platform tailored for artists and art lovers to share, discover, and connect over art.",
    fullDescription: "ArtConnect is a dedicated social media platform that allows artists to showcase their work, connect with fellow artists, and engage with art enthusiasts. The platform features user profiles, art galleries, discussion forums, and event listings to foster a vibrant community centered around art.",
    thumbnail: "/images/projects/ArtConnect.png",
    images: [
        "/images/projects/ArtConnect.png",
        "/images/projects/ArtConnect-1.png",
        "/images/projects/ArtConnect-2.png",
    ],
    techStack: [
    { name: "MySQL",  category: "Database" },
    { name: "PHP", category: "Backend" },
    { name: "Flutter",  category: "Frontend" },
    { name: "Laravel",  category: "Framework" },
    ],
    
    // Multiple GitHub repositories dengan identifikasi
    githubRepositories: [
      {
        name: "Backend Repository (Laravel)",
        description: "Backend application dengan Laravel dan MySQL",
        url: "https://github.com/RizkiGunawan09/ArtConnect-Backend",
        type: "Backend Repository"
      },
      {
        name: "Frontend Repository (Flutter)",
        description: "Frontend application dengan Flutter",
        url: "https://github.com/RizkiGunawan09/ArtConnect-Frontend",
        type: "Frontend Repository"
      }
    ],
    
    // Untuk backward compatibility
    githubUrl: null,
    demoUrl: null,
    features: ["User authentication",
      "Create and manage art profiles",
      "Upload and showcase artwork",
      "Follow and connect with other artists",
      "Discussion forums and art events",
      "Like, comment, and share artworks",
    ],
    challenges: [
      {
        problem: "make connecting artists easier",
        solution: "implementing a user-friendly interface and robust search functionality"
      },
      { 
        problem: "ensuring smooth performance with media-rich content",
        solution: "optimizing image handling and implementing efficient data loading techniques"
      },
    ],
    status: "Completed",
    timeline: { start: "2023-02", end: "2023-07", duration: "Completed" },
    role: "Full Stack Developer",
    teamSize: 3,
    category: "Mobile Development",
    tags: ["Laravel", "Flutter", "NLP", "PHP", "MySQL"],

    // Apakah ditampilkan di landing page
    showOnLandingPage: true,
    
    metrics: {
        "Waktu Pengembangan": "3 bulan"
    }
  },
  
];

// Helper functions untuk mengakses data
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category) => {
  return projectsData.filter(project => project.category === category);
};

export const getProjectsByTech = (techName) => {
  return projectsData.filter(project => 
    project.techStack.some(tech => tech.name.toLowerCase() === techName.toLowerCase())
  );
};

// Helper function untuk mendapatkan GitHub repositories
export const getGithubRepositories = (project) => {
  if (project.githubRepositories && project.githubRepositories.length > 0) {
    return project.githubRepositories;
  }
  
  // Backward compatibility: jika masih menggunakan githubUrl single
  if (project.githubUrl) {
    return [
      {
        name: "Source Code",
        description: "Main repository",
        url: project.githubUrl,
        type: "main"
      }
    ];
  }
  
  return [];
};

// Helper function untuk mendapatkan primary GitHub URL (untuk button utama)
export const getPrimaryGithubUrl = (project) => {
  const repositories = getGithubRepositories(project);
  if (repositories.length === 0) return null;
  
  // Prioritaskan 'main' type, jika tidak ada ambil yang pertama
  const mainRepo = repositories.find(repo => repo.type === 'main');
  return mainRepo ? mainRepo.url : repositories[0].url;
};

export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

// Get all unique categories
export const getAllCategories = () => {
  return [...new Set(projectsData.map(project => project.category))];
};

// Get all unique tech stacks
export const getAllTechStacks = () => {
  const allTechs = projectsData.flatMap(project => project.techStack);
  return [...new Map(allTechs.map(tech => [tech.name, tech])).values()];
};

// Get featured projects untuk landing page (hanya yang showOnLandingPage: true)
export const getFeaturedProjects = (limit = 3) => {
  return projectsData
    .filter(project => project.showOnLandingPage === true)
    .sort((a, b) => {
      // Prioritaskan project Completed, lalu In Progress, lalu lainnya
      const statusOrder = { "Completed": 0, "In Progress": 1, "Maintenance": 2 };
      return (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3);
    })
    .slice(0, limit);
};

// Get all projects untuk halaman projects terpisah
export const getAllProjects = () => {
  return projectsData
    .sort((a, b) => {
      // Urutkan berdasarkan status dan id
      const statusOrder = { "Completed": 0, "In Progress": 1, "Maintenance": 2 };
      const statusDiff = (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3);
      return statusDiff !== 0 ? statusDiff : a.id - b.id;
    });
};

// Get projects yang tidak ditampilkan di landing page
export const getOtherProjects = () => {
  return projectsData
    .filter(project => project.showOnLandingPage === false)
    .sort((a, b) => {
      const statusOrder = { "Completed": 0, "In Progress": 1, "Maintenance": 2 };
      return (statusOrder[a.status] || 3) - (statusOrder[b.status] || 3);
    });
};
