/**
 * =====================================================================
 * KARVENTHAN'S RESUME DATA
 * =====================================================================
 * You can edit any details below (experience, skills, contact info, etc.)
 * whenever you need to update your portfolio resume.
 * =====================================================================
 */

export const resumeData = {
    personalInfo: {
        name: "Karventhan K",
        title: "Senior MERN Stack & Full-Stack Developer",
        email: "karventhanalpm@gmail.com",
        phone: "+91 6369078990",
        location: "Coimbatore, Tamil Nadu, India",
        linkedin: "https://www.linkedin.com/in/karventhan-k",
        github: "https://github.com/karventhan-k",
        availability: "Immediately Available for Full-Time / Contract MERN Stack Roles",
        pdfUrl: "/karventhan.pdf",
        summary: "Results-driven Senior MERN Stack & Full-Stack Engineer with over 4+ years of experience architecting high-performance web applications, scalable REST/GraphQL APIs, real-time WebSocket platforms, and AI-powered systems. Proven track record leading end-to-end development for flagship platforms like Debitmydata.com and Cofetti.ai. Proficient in MongoDB, Express.js, React.js, Node.js, Next.js, and AWS cloud deployments."
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
                    name: "Debitmydata.com (Flagship Platform)",
                    role: "Full-Stack / MERN Architect",
                    points: [
                        "Architected and deployed end-to-end scalable web applications using React.js/Next.js frontend with robust Node.js/Express and FastAPI backend microservices.",
                        "Engineered secure authentication flows (JWT, OAuth 2.0, Google SSO) and role-based access control (RBAC).",
                        "Implemented advanced search, dynamic multi-filter pipelines, and AI-driven insights integrated with OpenAI Chat Completion APIs.",
                        "Designed and integrated Stripe recurring subscription billing flows with webhook handlers and automated data pipelines.",
                        "Managed AWS EC2 cloud infrastructure, utilizing PM2, Nginx reverse proxy, and S3 asset buckets, delivering 99.9% uptime under high traffic."
                    ]
                },
                {
                    name: "Cofetti.ai",
                    role: "Full-Stack AI Developer",
                    points: [
                        "Built AI-powered image and text generation application utilizing OpenAI DALL·E 3 and ChatCompletion models.",
                        "Implemented Stripe-driven credit purchase workflows, wallet balance updates, and transactional checkout systems.",
                        "Maintained high-availability services on AWS EC2 with automated monitoring and load distribution."
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
                    name: "Elevenflo.com",
                    role: "Frontend & Full-Stack Engineer",
                    points: [
                        "Engineered modular React / Next.js interfaces with Tailwind CSS for digital service platforms.",
                        "Implemented secure client-side authentication, search filtering, and SEO optimization."
                    ]
                },
                {
                    name: "Bandbooker.com",
                    role: "Full-Stack / Real-Time Developer",
                    points: [
                        "Built responsive booking frontend with Next.js, integrating Google SSO login and profile management.",
                        "Architected real-time WebSocket messaging and live chat system for immediate band-client communications."
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
                    name: "Whizco & Webopt.ai",
                    role: "Full-Stack Developer",
                    points: [
                        "Developed RESTful CRUD APIs, role-based access controls, and authentication mechanisms.",
                        "Built a feature-rich Google Chrome extension for automated DOM analysis, network tracking, and console error logging linked to WebOpt.ai APIs.",
                        "Integrated analytics telemetry dashboards using React.js, Tailwind CSS, and optimized SQL/PostgreSQL databases."
                    ]
                }
            ]
        }
    ],

    skills: {
        mern: [
            { name: "MongoDB", level: "Advanced", icon: "fas fa-database" },
            { name: "Express.js", level: "Expert", icon: "fas fa-server" },
            { name: "React.js", level: "Expert", icon: "fab fa-react" },
            { name: "Node.js", level: "Expert", icon: "fab fa-node-js" }
        ],
        frontend: [
            "Next.js (App Router)", "React.js", "Redux Toolkit", "Zustand", 
            "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", 
            "Responsive Design", "WebSockets"
        ],
        backend: [
            "Node.js", "Express.js", "RESTful APIs", "FastAPI", "Python", 
            "Django", "Microservices", "JWT Auth", "OAuth 2.0 / SSO", "Stripe API"
        ],
        database: [
            "MongoDB (Mongoose)", "PostgreSQL", "MySQL", "Redis Caching", "Database Indexing & Aggregations"
        ],
        devops: [
            "AWS (EC2, S3, CloudFront)", "Docker", "Git & GitHub", "Linux (Debian/Ubuntu)", 
            "Nginx", "PM2 Process Manager", "CI/CD Pipelines"
        ]
    },

    leadership: [
        "Mentored and trained junior developers in React.js, Next.js, Node.js, and API architecture.",
        "Conducted code reviews, established Git workflow standards, and promoted clean code principles.",
        "Collaborated with cross-functional teams in agile sprints to meet tight production deadlines."
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
