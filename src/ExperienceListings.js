const ExperienceListings = [
    {
        id: 0,
        title: "UMass Lowell",
        description: "Student. Achieved Bachelor of Science in Computer Science. Studied a wide variety of topics with extra focus on compilers, language design, operating systems, and distributed systems.",
        image: "uml.png",
        keywords: ["education", "school", "umass lowell", "uml", "university", "college", "university", "umass", "degree"],
    },
    {
        id: 1,
        title: "Arista Networks",
        description: "Software Engineer. Works as a compiler engineer to improve language usability. Optimized compiler parsing to reduce build times. Designed and implemented caching solutions powered by Redis increasing cache hit rate from 20% to 80%. Worked with c, c++, python, Redis, and boost.",
        image: "testimg.jpg",
        keywords: [ "compilers", "language", "redis", "anet", "c++", "c", "boost", "python", "work" ],
    },
    {
        id: 2,
        title: "Akamai Technologies",
        description: "Technical Intern. Implemented tooling to increase team efficiency. Created an automated resource requisitioning tool to help the capacity team respond to dynamic network demands. Developed skills in project management to achieve goals. Worked with and designed structures for large SQL databases. Worked with perl, python, PHP, JavaScript, SQL, BASH.",
        image: "akamai.png",
        keywords: [ "akamai", "intern", "perl", "python", "PHP", "js", "javascript", "tools", "cdn", "work", "software", "engineer" ],
    },
    {
        id: 3,
        title: "SPACE HAUC",
        description: "Lead Developer. Team awarded $200,000 grant under NASA's USIP program to develop a CubeSat to test phased array technology. Devised a multi-process communication model to allow for high data concurrency. Programmed publisher-subscriber system to enable hot-swappable plugin-based architecture. Designed schemas for storing collected flight metrics. Worked with c, c++, System V APIs, SQL.",
        image: "spacehauc.JPG",
        keywords: [ "space", "satellite", "cubesat", "operating", "system", "mpc", "multi", "process", "communication", "work", "c", "c++", "system", "v", "5", "SQL" ],
    },
    {
        id: 4,
        title: "91.5 WUML",
        description: "Webmaster, Disk Jockey. Maintained and supported legacy website. Increased traffic by 20% through search engine optimization. Addressed SQL injection security vulnerabilities in legacy code. Trained as DJ to fulfill FCC requirements. Decided programming for and ran a weekly show. Worked with PHP, HTML, JavaScript, SQL, music :)",
        image: "wuml.png",
        keywords: [ "dj", "leadership", "music", "hobbie", "seo", "php", "html", "javascript", "sql" ],
    },
    {
        id: 5,
        title: "UMass Lowell ACM",
        description: "Chairman. Planned and executed weekly events for chapter members to attend. Communicated with area companies to organize guest speakers. Implemented feedback mechanisms so leadership team could respond better to member ideas. Increased general meeting attendance by 25%. Secured new funding in an endowment fund for chapter activities.",
        image: "acm.jpg",
        keywords: [ "uml", "umass", "lowell", "ACM", "association", "for", "computing", "machinery" ],
    },
    {
        id: 6,
        title: "Home Networking",
        description: "Personal hobbie. Like to develop and experiment with the capabilities of home networking devices. This has led to experience configuring and maintaing authoritative DNS servers and caching, vLANs, RADIUS servers, wpa2 enterprise networks, OpenVPN servers and clients, ACLs, and custom firewall configuration.",
        image: "hl.jpg",
        keywords: [ "hobbie", "vlan", "dns", "access", "control", "list", "openvpn", "networking", "home" ],
    },
    {
        id: 6,
        title: "jhassler.dev",
        description: "This site. This site is a constant work in progress as I attempt to develop my full-stack web skills. In this iteration, it is a react based app with minimal backend so it can be hosted as a static site on Github pages. Some parts are taken from tutorials, some are purely created by myself. This is a playground for new ideas when I feel like experimenting or learning.",
        image: "meta.png",
        keywords: ["webdev", "website", "personal"],
    },
    {
        id: 8,
        title: "Demolay",
        description: "Past Master Councilor Cape Cod Order of the Demolay. Increased chapter membership. Organized monthly activities in addition to general meetings. fundraised over $7,000 for the chapter. Established funds to help buy clothing for children in need.",
        image: "demolay.png",
        keywords: [],
    },
];

export default ExperienceListings;
