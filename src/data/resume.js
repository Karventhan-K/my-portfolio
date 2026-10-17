/**
 * =====================================================================
 * KARVENTHAN'S RESUME DATA
 * =====================================================================
 * Updated from: public/Karventhan K.docx
 * Contains latest professional summary, contact info, client projects,
 * technical skills matrix, education, and leadership details.
 * =====================================================================
 */

export const resumeData = {
    personalInfo: {
        name: "Karventhan K",
        title: "Senior MERN Stack & Full-Stack Developer",
        email: "karventhan.work@gmail.com",
        phone: "+91 6369078990",
        location: "Coimbatore, Tamil Nadu, India",
        linkedin: "https://www.linkedin.com/in/karventhan-k",
        github: "https://github.com/Karventhan-K",
        availability: "Immediately Available for Urgent MERN Stack & Full-Stack Roles",
        pdfUrl: "/karventhan.pdf",
        docxUrl: "/Karventhan K.docx",
        summary: "Senior Software Engineer with 4+ years of experience developing scalable web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, Python (FastAPI, Django), PostgreSQL, and AWS. Experienced in designing and developing RESTful APIs, integrating AI features with OpenAI, developing responsive frontend applications, implementing secure authentication and payment systems, and deploying production applications using Docker, AWS EC2, S3, Nginx, and GitHub Actions. Passionate about solving real-world problems, writing clean and maintainable code, and delivering reliable, high-quality software."
    },
    
    highlights: [
        { label: "Experience", value: "4+ Years" },
        { label: "Core Stack", value: "MERN & Next.js" },
        { label: "Flagship Project", value: "Debitmydata.com" },
        { label: "Status", value: "Available Urgently" }
    ],

    experience: [
        {
            role: "Senior Software Engineer / Lead MERN Developer",
            company: "Episyche Technologies",
            location: "Coimbatore, India",
            period: "September 2025 – Present",
            type: "Full-Time",
            projects: [
                {
                    name: "Debitmydata.com (Flagship Full-Stack Platform)",
                    role: "Lead Full-Stack / MERN Architect",
                    points: [
                        "Designed and developed end-to-end modules across FastAPI, Django, and Next.js, delivering smooth authentication flows, SSO, advanced search/filtering, static content pipelines, and AI-driven features integrated with OpenAI Chat Completion.",
                        "Developed robust scalable Stripe subscription flows, optimized high-traffic backend APIs, and automated several data workflows to reduce operational overhead.",
                        "Deployed the platform on AWS EC2 with PM2 (frontend) and Gunicorn (backend), configured S3 for secure asset storage, and ensured high uptime through performance tuning and efficient resource management."
                    ]
                },
                {
                    name: "Cofetti.ai",
                    role: "Backend & AI Full-Stack Developer",
                    points: [
                        "Implemented secure authentication, Django SSO, and AI-powered image and text generation using OpenAI (DALL·E 3 & ChatCompletion), along with robust CRUD modules backed by PostgreSQL.",
                        "Built a reliable Stripe-driven credits and checkout system, enabling smooth transaction flows and precise credit consumption tracking.",
                        "Deployed backend services on AWS EC2 using Gunicorn and S3 storage while establishing monitoring practices that improved service stability and responsiveness."
                    ]
                }
            ]
        },
        {
            role: "Software Engineer",
            company: "Episyche Technologies",
            location: "Coimbatore, India",
            period: "January 2024 – September 2025",
            type: "Full-Time",
            projects: [
                {
                    name: "elevenflo.com",
                    role: "Frontend & Full-Stack Developer",
                    points: [
                        "Developed frontend features using Next.js and Tailwind, including authentication modules, advanced search functionality, and multiple static pages, ensuring a clean, responsive, and user-friendly interface."
                    ]
                },
                {
                    name: "bandbooker.com",
                    role: "Frontend & Real-Time Chat Developer",
                    points: [
                        "Built the full Next.js frontend with complete Google SSO authentication, implemented static pages, and developed a real-time WebSocket-based live chat messaging system for seamless user communication."
                    ]
                }
            ]
        },
        {
            role: "Associate Software Engineer",
            company: "Episyche Technologies",
            location: "Coimbatore, India",
            period: "January 2022 – December 2024",
            type: "Full-Time",
            projects: [
                {
                    name: "whizco",
                    role: "Backend & Auth Developer",
                    points: [
                        "Developed backend features using Django, implementing robust authentication, role-based access, CRUD APIs, and a full Google SSO integration to streamline login and account management."
                    ]
                },
                {
                    name: "webopt.ai (In-house Project)",
                    role: "Frontend & Chrome Extension Developer",
                    points: [
                        "Integrated analytics data into the UI, built fully responsive pages using Next.js and Tailwind CSS, and implemented database-driven filtering features to deliver fast, dynamic, and user-centric workflows.",
                        "Built a fully responsive Chrome extension with automated page analysis, real-time console and network performance tracking, and seamless integration with WebOpt.ai APIs to enable in-browser diagnostics, error detection, and streamlined debugging workflows."
                    ]
                }
            ]
        }
    ],

    skills: {
        mern: [
            { name: "MongoDB", level: "Aggregations & Mongoose", icon: "fas fa-database" },
            { name: "Express.js", level: "REST APIs & Middleware", icon: "fas fa-server" },
            { name: "React.js", level: "Hooks, Context & State", icon: "fab fa-react" },
            { name: "Node.js", level: "Event Loop & Async I/O", icon: "fab fa-node-js" }
        ],
        languages: [
            "JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Bash"
        ],
        frontend: [
            "React.js", "Next.js (App Router)", "Tailwind CSS", "Redux Toolkit", 
            "Zustand", "HTML5", "CSS3", "Responsive UI", "WebSockets"
        ],
        backend: [
            "Node.js", "Express.js", "FastAPI", "Django", "REST APIs", 
            "Authentication (OAuth, JWT, SSO)", "OpenAI APIs", "Stripe API"
        ],
        database: [
            "MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis Caching"
        ],
        devops: [
            "Docker", "Docker Compose", "AWS (EC2, S3)", "Nginx", "PM2", 
            "Gunicorn", "GitHub Actions", "Linux (Debian/Ubuntu)", "Git & GitHub", "Postman"
        ]
    },

    leadership: [
        "Mentored junior developers at Episyche Technologies by providing hands-on training in Python, Django, React.js, and Next.js.",
        "Conducted thorough code reviews and established repository best practices to improve code quality and maintainability.",
        "Supported real-world client project delivery and accelerated developer onboarding in cross-functional agile teams."
    ],

    education: [
        {
            degree: "Bachelor of Engineering (B.E.)",
            field: "Engineering",
            institution: "Pollachi Institute of Engineering and Technology",
            location: "Pollachi, Tamil Nadu, India",
            period: "2016 – 2020"
        }
    ]
};
