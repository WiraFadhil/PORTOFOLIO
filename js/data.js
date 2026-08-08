/* ============================================================
   DATA — Edit this file to update all website content.
   All links below are PLACEHOLDERS. Replace them with your real data.
   ============================================================ */

const PORTFOLIO = {
  profile: {
    name: "Hi Wira Fadhil is here",
    tagline: "Data, Automation & AI Solutions",
    bio:
      "I'm a passionate tech enthusiast who really loves Web & AI, now currently focusing on data processing, process automation, and smart digital solutions. My work is focused on workflow optimization, data entry, and technical problem-solving for various projects. And this is a website to write my journey",
    location: "🇮🇩 Indonesia",
    metaDescription:
      "Wira Fadhil – Data Specialist & AI Enthusiast. Specializing in data processing, workflow automation, and smart tech solutions for remote operations",
    email: "wirafadhil20@gmail.com",

    /* ==== PROFILE PHOTO — place the file in the assets/images/profile/ folder ==== */
    photo: "assets/images/profile/wira.webp",

    /* Replace 'cv-wira.pdf' with the name of your CV PDF file in the root folder.
       Or use a full URL: "https://drive.google.com/.../cv.pdf" */
    resume: "cv-wira.pdf",

    /* ==== PLACEHOLDER LINKS — Replace with your real links ==== */
    socials: {
      github: "https://github.com/WiraFadhil",
      linkedin: "https://www.linkedin.com/in/wirafadhil",
      email: "mailto:wirafadhil20@gmail.com",
      /* Replace the Google Drive folder ID below with your own folder */
      gdrive: "https://drive.google.com/drive/folders/1ACgEV26kbkow-hgQQMV3GZVyzsTAq9xe?usp=sharing"
    }
  },

  /* ============================================================
     PROJECTS — List of projects (Featured Projects)
     - image: place the file in the assets/images/projects/ folder, or
       use an image URL. Leave null for a gradient placeholder.
     - emoji : used as a visual placeholder if image = null.
     - year/role : additional info shown on the project detail page.
     - description : array of full explanation paragraphs (detail page).
     - highlights : array of key features/advantages (detail page).
     - links : list of project links/files. Can be more than one.
       Available types:
         "github" | "video" | "gdrive" | "sheet" | "doc" | "image" | "live" | "pdf"
       Suitable for NON-web projects (graphic design, spreadsheets,
       documents, photo galleries on Google Drive, etc.). Example:
         links: [
           { label: "Photos & Design", type: "image", url: "https://drive.google.com/..." },
           { label: "Spreadsheet",     type: "sheet", url: "https://docs.google.com/spreadsheets/..." },
           { label: "PDF Report",      type: "doc",   url: "https://drive.google.com/..." }
         ]
     - PDF for AI / Data Specialist projects: put the file inside the
       assets/pdf/ai/ folder (e.g. assets/pdf/ai/portfolio_food_classification.pdf)
       and reference it with a local relative path, like:
         { label: "PDF Report", type: "pdf", url: "assets/pdf/ai/nama_file.pdf" }
     - If a project has no links at all, use links: [] —
       then the button area will not appear at all.
     ============================================================ */
  projects: [
    {
      id: 1,
      title: "RT/RW Village Reporting System",
      summary:
        "Problem: residents and neighborhood (RT/RW) officials struggle to manage and monitor complaints/reports manually. Solution: a digital web platform to submit, record, and track village reporting status in real time and in an organized way.",
      tags: ["Python", "Flask", "MongoDB", "JavaScript"],
      image: "assets/images/project/pelaporanDesa.webp",
      emoji: "🏘️",
      year: "2025",
      role: "Fullstack Developer",
      description: [
        "A web-based application that makes it easier for residents and RT/RW officials to submit, record, and monitor complaints or citizen reports. The entire process — from report submission and assignment to status changes — is recorded automatically so no report is ever missed or lost.",
        "RT/RW officials can monitor all reports in a single dashboard: viewing the latest status, adding follow-up notes, and summarizing the resolution history in real time and in an organized way."
      ],
      highlights: [
        "Digital report submission with real-time status tracking (new → in progress → done).",
        "Monitoring dashboard for RT/RW officials to follow up on every complaint.",
        "Automatic logging with a complete history, eliminating easily-lost manual record keeping."
      ],
      links: [
        { label: "GitHub Code", type: "github", url: "https://github.com/WiraFadhil/PelaporanDesa" }
      ]
    },
    {
      id: 2,
      title: "Cafe POS System",
      summary: "Problem: cashier transactions and cafe ingredient stock were recorded manually and prone to discrepancies. Solution: a web-based POS system to record orders, manage the menu, and summarize daily sales reports efficiently.",
      tags: ["HTML", "CSS", "Javascript", "Supabase"],
      image: "assets/images/project/cafeShop.webp",
      emoji: "☕",
      year: "2025",
      role: "Fullstack Developer",
      description: [
        "A web-based Point of Sale (POS) system that replaces manual cashier transaction and stock recording. Cashiers can record orders, manage the menu, and complete transactions quickly without worrying about miscalculations.",
        "All transactions are automatically recorded in the database, and daily sales reports can be summarized with one click — making it easy for the owner to monitor revenue and ingredient stock."
      ],
      highlights: [
        "Digital cashier for recording orders and completing transactions faster.",
        "Manage menu and ingredient stock in one system, reducing stock discrepancies.",
        "Automatic daily sales report summary for business monitoring."
      ],
      links: [
        { label: "GitHub Code", type: "github", url: "https://github.com/WiraFadhil/Cafeshop-POS" }
      ]
    },
    {
      id: 3,
      title: "Government Profile Website",
      summary:
        "An interactive sub-district profile website and information portal for public transparency, news management, public complaints, and real-time presentation of regional statistics.",
      tags: ["Laravel", "Blade", "MySQL", "Tailwind CSS"],
      image: "assets/images/project/kelurahanProfile.webp",
      emoji: "🏛️",
      year: "2025",
      role: "Fullstack Developer",
      description: [
        "A sub-district government profile information system designed to make public information easier to access, manage local news, and submit community complaints digitally.",
        "Equipped with staff and regional official management modules, a photo/activity album gallery, and MySQL database integration for structured and efficient data management."
      ],
      highlights: [
        "Centralized management of the news portal, complaints, and activity gallery.",
        "Presentation of employee data, regional statistics, and the sub-district organizational structure.",
        "Responsive and modern design based on Blade Templating & Tailwind CSS.",
        "Backend server performance optimized with Laravel and MySQL database."
      ],
      links: [
        { label: "GitHub Code", type: "github", url: "https://github.com/WiraFadhil/Website-Kel-Pemerintah" }
        // { label: "Watch Demo", type: "video", url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID" }
      ]
    },
    {
      id: 4,
      title: "BDPKN Internship Registration",
      summary:
        "A Google Workspace-based internship registration portal that integrates forms, automation of applicant data collection, and centralized coordination of activity schedules.",
      tags: ["Google Sites", "Google Sheets", "Google Calendar"],
      image: "assets/images/project/pendaftaranMagang.webp",
      emoji: "📝",
      year: "2025",
      role: "Web Developer",
      description: [
        "A digital internship registration system designed to streamline the applicant intake process at BDPKN. The portal is built with Google Sites for a structured and responsive user interface.",
        "Applicant data is stored and managed centrally in Google Sheets and integrated with Google Calendar to automate the scheduling of selection and internship activities."
      ],
      highlights: [
        "User-friendly registration portal built with Google Sites.",
        "Automatic management and synchronization of applicant data via Google Sheets.",
        "Scheduling integration for the selection flow and internship agenda with Google Calendar.",
        "Improved administrative efficiency and coordination of intern registration."
      ],
      links: [
        // If there is no demo video link yet, this section can be left empty or adjusted
        { label: "Demo", type: "video", url: "https://sites.google.com/view/bdpkngowa/home" }
      ]
    },
    {
      id: 5,
      title: "Indonesian Food Image Classification",
      summary:
        "Problem: recognizing traditional Indonesian dishes from photos is hard for people unfamiliar with local food. Solution: a Deep Learning image classification system that recognizes 20 Indonesian food categories from a photo, built with CNN + transfer learning and deployed as an interactive web app.",
      tags: ["Python", "TensorFlow", "CNN", "Transfer Learning", "Hugging Face"],
      image: "assets/images/project/klasifikasiMakanan.png",
      emoji: "🍛",
      year: "2026",
      role: "Data Specialist / AI",
      description: [
        "An image classification system for traditional Indonesian food, built on a Convolutional Neural Network (CNN) using a transfer learning approach. The model was trained to recognize 20 categories of Indonesian dishes, ranging from staple meals such as Nasi Goreng, Rendang, and Soto, to street-food snacks such as Cilok, Batagor, Karedok, Ketoprak, and Siomay.",
        "The main motivation was to build an image recognition system relevant to a local context (Indonesian cuisine) while practicing the full end-to-end machine learning workflow: dataset preparation, model training, performance evaluation, and deployment into a publicly accessible application.",
        "The model was trained for 20 epochs. The accuracy curve shows consistent improvement on both the training set (reaching around 91–92%) and the validation set (stabilizing around 82–85%), indicating the model successfully learned the visual patterns of each food category without severe overfitting. In line with this, the loss curve shows a sharp decline during the first few epochs before gradually leveling off, confirming the model generalizes reasonably well to unseen data."
      ],
      highlights: [
        "Built an image classification model for 20 Indonesian food classes using CNN with transfer learning (EfficientNetB0/MobileNetV2), achieving an average validation accuracy above 80%.",
        "Conducted a thorough model evaluation using a confusion matrix and per-class accuracy to understand the model's strengths and limitations.",
        "Successfully deployed the model as a functional, publicly accessible, real-time web application hosted on Hugging Face Spaces.",
        "Identified concrete challenges in classifying visually similar foods (e.g. Gado-Gado vs Karedok, Ketoprak vs Kupat Tahu), providing a clear direction for further improvement."
      ],
      links: [
        { label: "PDF Report", type: "pdf", url: "assets/pdf/ai/portfolio_food_classification.pdf" },
        { label: "Live Demo", type: "live", url: "https://wirafadhil-klasifikasi-makanan.hf.space/" }
      ]
    }
    // {
    //   id: 5,
    //   title: "Graphic Design & Documentation (Example)",
    //   summary:
    //     "Example of a NON-web project: a collection of graphic designs, analysis spreadsheets, and documentation stored on Google Drive. Replace the links below with yours.",
    //   tags: ["Figma", "Canva", "Spreadsheet"],
    //   image: null,
    //   emoji: "🎨",
    //   links: [
    //     { label: "View Designs", type: "image", url: "https://drive.google.com/drive/folders/PASTE_YOUR_FOLDER_ID" },
    //     { label: "Spreadsheet", type: "sheet", url: "https://docs.google.com/spreadsheets/d/PASTE_YOUR_SHEET_ID/edit" },
    //     { label: "Report Document", type: "doc", url: "https://drive.google.com/drive/folders/PASTE_YOUR_FOLDER_ID" }
    //   ]
    // }
  ],

  /* ============================================================
     EXPERIENCE & INTERNSHIP — chronological history (most recent first)
     photos: fill with files in the assets/images/internship/ folder,
     or image URLs. A short caption for each photo.
     ============================================================ */
  experience: [
    {
      id: 1,
      company: "Dinas Komunikasi dan Informatika",
      role: "Web Developer Intern",
      period: "July 2025 – August 2025",
      location: "Onsite · Jeneponto",
      points: [
        "Developed and optimized web-based public service applications using Laravel and MySQL for the local government environment.",
        "Integrated database structures, staff data management, and public complaint modules to improve system responsiveness.",
        "Collaborated with the Diskominfo team on database migrations, system maintenance, and ensuring web performance stability."
      ],
      photos: [
        {
          src: "assets/images/internship/fotoBersamaKadis.webp",
          caption: "Closing documentation with the Head of Diskominfo Jeneponto during the internship."
        },
        {
          src: "assets/images/internship/sertifikatKominfo.webp",
          caption: "Internship completion certificate from Dinas Komunikasi dan Informatika Jeneponto."
        }
      ]
    },
    {
      id: 2,
      company: "Balai Diklat PKN (BDPKN) · Gowa",
      role: "IT Generalist Intern",
      period: "January 2026 – February 2026",
      location: "Onsite · Gowa",
      points: [
        "Developed an internship registration website to streamline applicant management and scheduling.",
        "Managed, cleaned, and processed administrative and applicant data using Microsoft Excel to maintain accurate records.",
        "Designed digital graphic assets using Canva and produced/edited promotional & informational videos for agency activities.",
        "Provided technical and administrative IT support, assisting staff with daily operations, data entry, and media production."
      ],
      photos: [
        {
          src: "assets/images/internship/PresentationWebsite.webp",
          caption: "Presenting the web information system developed for the local government to the Diskominfo team."
        },
        {
          src: "assets/images/internship/fotoBersamaSubbag.webp",
          caption: "Photo session with the Head of Subdivision (Subbag) after completing the internship program."
        }
      ]
    },
    {
      id: 3,
      company: "BSI Scholarship",
      role: "Awardee BSI Scholarship",
      period: "November 2024 – Present",
      location: "Makassar, Indonesia",
      points: [
        "Selected as an awardee for the BSI Scholarship program, participating in comprehensive leadership and character building programs.",
        "Engaged in social empowerment initiatives, community service, and islamic economic literacy campaigns.",
        "Participated in executive mentoring sessions and soft-skills development workshops to enhance professional readiness."
      ],
      photos: [
        {
          src: "assets/images/internship/AwardeeBSI.webp",
          caption: "BSI Scholarship awardee documentation at a leadership program activity."
        },
        {
          src: "assets/images/internship/mirrorBSI.webp",
          caption: "Capturing moments during a BSI Scholarship event and activity."
        }
      ]
    },
    {
      id: 4,
      company: "GDGoC UIN Alauddin Makassar",
      role: "Core Team · Technical Web",
      period: "November 2025 – Present",
      location: "Makassar, Indonesia",
      points: [
        "Contributed to the web development team in building and maintaining digital assets for community events and programs.",
        "Assisted in organizing web development workshops, technical hands-on sessions, and mentoring community members in modern web technologies.",
        "Collaborated with cross-functional teams to foster a collaborative tech ecosystem and developer community on campus."
      ],
      photos: [
        {
          src: "assets/images/internship/Workshop.webp",
          caption: "Foto Bersama GDGoC UIN Alauddin Makassar team members"
        },
        {
          src: "assets/images/internship/Pengajar.webp",
          caption: "Pengajar dan mentor GDGoC UIN Alauddin Makassar memberikan workshop pengembangan web kepada peserta komunitas"
        }
      ]
    },
    {
      id: 5,
      company: "Inready Workgroup",
      role: "Vice Chairman II",
      period: "November 2024 – Present",
      location: "Gowa, Indonesia",
      points: [
        "Promoted to Vice Chairman II to assist in overseeing internal organization and coordinating work programs.",
        "Previously served in the Public Relations division, responsible for researching and curating the internal tech competition calendar for members.",
        "Actively involved in internal team meetings and supporting organizational operations."
      ],
      photos: [
        {
          src: "assets/images/internship/inready1.webp",
          caption: "Internal organization coordination and team discussion at Inready Workgroup."
        },
        {
          src: "assets/images/internship/inready2.webp",
          caption: "Work program evaluation session with Inready Workgroup members."
        }
      ]
    }
  ],

      /* ============================================================
       CERTIFICATES — key certificates
       ============================================================ */
      certificates: [
    {
      title: "Operator Komputer Madya - Vocational School Graduate Academy (Digital Talent Scholarship 2024)",
      issuer: "BBPSDMP Makassar",
      year: 2024,
      emoji: "💻",
      link: "https://drive.google.com/file/d/1CW_Ngcl52tCoio34Ts8tJrvkyXM_SumF/view?usp=sharing"
    },
    {
      title: "Junior Network Administrator - Vocational School Graduate Academy (Digital Talent Scholarship 2025)",
      issuer: "BBPSDMP Makassar",
      year: 2025,
      emoji: "🌐",
      link: "https://drive.google.com/file/d/1n9HhG7Rg4NBQ2OwPRGRUFgYePGC-ZEa7/view?usp=drive_link"
    },
    {
      title: "Junior Cyber Security - Vocational School Graduate Academy (Digital Talent Scholarship 2025)",
      issuer: "BBPSDMP Makassar",
      year: 2025,
      emoji: "🛡️",
      link: "https://drive.google.com/file/d/1GXCHkkaIaLn_NxvhVD4fLLEZcnqomVkE/view?usp=sharing"
    },
    {
      title: "Memahami Strategi Desain Visual untuk UI/UX Designer",
      issuer: "Karier.mu by Sekolah.mu",
      year: 2024,
      emoji: "🎨",
      link: "https://drive.google.com/file/d/1hZjBDQm6Zcd_4a18WHVnV0sWNQsbb6ty/view?usp=sharing"
    },
    {
      title: "Menguasai Ms. Excel untuk Admin Online Shop",
      issuer: "Karier.mu by Sekolah.mu",
      year: 2024,
      emoji: "📊",
      link: "https://drive.google.com/file/d/1JVHPIkH6ZBQRfb-Sb2Q3gUoOzqfjdLEt/view?usp=sharing"
    },
    {
      title: "Optimalisasi Pengelolaan Karyawan bagi Sumber Daya Manusia",
      issuer: "Karier.mu by Sekolah.mu",
      year: 2024,
      emoji: "👥",
      link: "https://drive.google.com/file/d/1I7ThfY5OtwcsAa1M5ck6dPClFF4ESTB5/view?usp=sharing"
    },
    {
      title: "CODETI-HACKEAST 2025",
      issuer: "Consortium of Digital and Engineering in Timur Indonesia (CODETI)",
      year: 2025,
      emoji: "🏆",
      link: "https://drive.google.com/file/d/17kKLJQW6ND1gOUDwCDZPmHpxSxQZllyM/view?usp=sharing"
    }
  ],

  /* ============================================================
     SKILLS — grouped into 3 categories
     icon : logo slug from Simple Icons (https://simpleicons.org),
            e.g. "github", "python", "docker".
            Can also be a full logo image URL for icons not
            available in Simple Icons (e.g. VS Code via devicon).
            Leave empty ("") to use a generic icon (SQL, REST API).
     ============================================================ */
  skills: {
    languages: [
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
      { name: "JavaScript", icon: "javascript" },
      { name: "SQL", icon: "mysql" } // Boleh pakai icon database/mysql agar muncul icon-nya
    ],
    frameworks: [
      { name: "Laravel", icon: "laravel" },
      { name: "Blade", icon: "laravel" }, // Opsional jika sering pakai Blade Templating
      { name: "Flask", icon: "flask" },
      { name: "Django", icon: "django" },
      { name: "Tailwind CSS", icon: "tailwindcss" }
    ],
    databases: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" }
    ],
    tools: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "Docker", icon: "docker" },
      { name: "Linux", icon: "linux" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Canva", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/Canva%20logo.svg" },
      { name: "Figma", icon: "figma" },
      { name: "Google Workspace", icon: "google" },
      { name: "Notion", icon: "notion" },
      { name: "CapCut", icon: "https://commons.wikimedia.org/wiki/Special:FilePath/CapCut%20logo.svg" },
      { name: "OpenCode", icon: "opencode" },
      { name: "Colab", icon: "googlecolab" },
      { name: "kaggle", icon: "kaggle" }
    ]
  }
};
