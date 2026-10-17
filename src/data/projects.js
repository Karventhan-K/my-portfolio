/**
 * =====================================================================
 * KARVENTHAN'S PROJECT SHOWCASE DATA
 * =====================================================================
 * Spotlights Debitmydata.com and top MERN / Full-Stack projects.
 * Easily update or add new projects below.
 * =====================================================================
 */

export const projects = [
    {
        id: "debitmydata",
        title: "Debitmydata.com",
        category: "mern",
        featured: true,
        badge: "Flagship MERN Project",
        subtitle: "Full-Stack Data Monetization & AI Platform",
        description: "Architected end-to-end scalable MERN architecture enabling user data monetization, featuring secure authentication, SSO, advanced data pipelines, and OpenAI integration.",
        details: [
            "Engineered responsive, high-performance UI using React.js and Next.js.",
            "Built robust RESTful microservice APIs with Node.js, Express, and FastAPI.",
            "Integrated Stripe recurring subscriptions, webhook processing, and transaction tracking.",
            "Configured MongoDB database collections and optimized indexing for high query throughput.",
            "Deployed on AWS EC2 with PM2 process manager and Nginx reverse proxy with 99.9% uptime."
        ],
        stats: {
            stars: 28,
            forks: 9,
            users: "5k+",
            status: "Production"
        },
        language: "MERN Stack",
        languageColorClass: "mern-dot",
        techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Stripe", "OpenAI", "AWS EC2"],
        githubUrl: "https://github.com/karventhan-k",
        liveUrl: "https://debitmydata.com"
    },
    {
        id: "cofetti",
        title: "Cofetti.ai",
        category: "ai",
        featured: true,
        badge: "AI & Full-Stack SaaS",
        subtitle: "AI Generative Engine & Credit Management",
        description: "Full-stack generative AI platform integrating OpenAI DALL·E 3 and ChatCompletion with real-time credit-based checkout.",
        details: [
            "Developed dynamic React frontend with seamless user credit dashboards.",
            "Built secure backend authentication, API rate-limiting, and Stripe credit purchase workflows.",
            "Deployed on AWS EC2 with S3 cloud storage for high-resolution AI generated assets."
        ],
        stats: {
            stars: 34,
            forks: 11,
            users: "2k+",
            status: "Live SaaS"
        },
        language: "React / Node / Python",
        languageColorClass: "react-dot",
        techStack: ["React.js", "Node.js", "OpenAI DALL·E 3", "PostgreSQL", "Stripe", "AWS S3"],
        githubUrl: "https://github.com/karventhan-k",
        liveUrl: "https://cofetti.ai"
    },
    {
        id: "bandbooker",
        title: "BandBooker.com",
        category: "mern",
        featured: false,
        badge: "Real-Time Platform",
        subtitle: "Live Band & Artist Booking Network",
        description: "Real-time booking and discovery platform featuring instant WebSocket live messaging, Google SSO, and responsive interactive calendars.",
        details: [
            "Built the complete Next.js / React frontend with smooth mobile-first UX.",
            "Engineered bidirectional real-time chat with WebSockets and Node.js.",
            "Implemented Google SSO authentication and role-based booking flows."
        ],
        stats: {
            stars: 19,
            forks: 6,
            users: "1.2k+",
            status: "Active"
        },
        language: "React / Node.js",
        languageColorClass: "node-dot",
        techStack: ["React.js", "Node.js", "WebSockets", "Google SSO", "Next.js", "Tailwind CSS"],
        githubUrl: "https://github.com/karventhan-k",
        liveUrl: "https://bandbooker.com"
    },
    {
        id: "elevenflo",
        title: "ElevenFlo.com",
        category: "frontend",
        featured: false,
        badge: "Web Marketplace",
        subtitle: "High-Traffic Digital Services Portal",
        description: "Modern, SEO-optimized digital services portal engineered with Next.js and Tailwind CSS, featuring rapid server-side filtering and intuitive workflows.",
        details: [
            "Developed high-converting landing pages and animated interactive catalogs.",
            "Implemented multi-attribute search and client-side state caching.",
            "Achieved 95+ Google Lighthouse scores across performance and SEO."
        ],
        stats: {
            stars: 22,
            forks: 7,
            users: "3k+",
            status: "Production"
        },
        language: "Next.js / React",
        languageColorClass: "js-dot",
        techStack: ["Next.js", "React.js", "Tailwind CSS", "JavaScript (ES6+)", "REST APIs"],
        githubUrl: "https://github.com/karventhan-k",
        liveUrl: "https://elevenflo.com"
    },
    {
        id: "webopt",
        title: "WebOpt.ai & Chrome Extension",
        category: "ai",
        featured: false,
        badge: "Developer Tooling",
        subtitle: "In-Browser Diagnostics & Performance Suite",
        description: "Chrome extension and telemetry dashboard providing automated DOM auditing, real-time console tracking, and error diagnostics linked to cloud APIs.",
        details: [
            "Constructed manifest v3 Chrome extension with background script listeners.",
            "Engineered analytics dashboard in React with dynamic chart visualizers.",
            "Built backend data ingestion endpoints with role-based team access."
        ],
        stats: {
            stars: 41,
            forks: 14,
            users: "800+",
            status: "Tooling"
        },
        language: "JavaScript / React",
        languageColorClass: "js-dot",
        techStack: ["Chrome Extension API", "React.js", "Node.js", "Tailwind CSS", "REST APIs"],
        githubUrl: "https://github.com/karventhan-k",
        liveUrl: "https://webopt.ai"
    }
];
