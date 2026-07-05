export const profile = {
  name: "Puneet Kumar",
  firstName: "Puneet",
  roles: [
    "Full Stack Developer",
    "React & Next.js Developer",
    "React Native Developer",
  ],
  phone: "+91 8700909877",
  email: "puneetsarohiya9877@gmail.com",
  resumeUrl: "https://puneetsarohiya.github.io/portfolio/resume/Puneet_Kumar_Resume.pdf",
  location: "Gurgaon, Haryana",
  heroPhoto: "https://puneetsarohiya.github.io/portfolio/images/avatar-bw.png",
  aboutPhoto: "https://puneetsarohiya.github.io/portfolio/images/about-photo.png",
  socials: {
    github: "https://github.com/PuneetSarohiya",
    linkedin: "https://www.linkedin.com/in/puneet-kumar-377178222",
    instagram: "https://www.instagram.com/puneet_s.98?igsh=MTJpZ2R6MHljdDJ2bQ=="
  },
};

export const about = {
  intro:
    "Full Stack Developer with 3 years of experience building web and mobile applications using React.js, Next.js, React Native, Node.js, MySQL, and MongoDB. I've worked across frontend, backend, and mobile — picking up whatever the product needs and seeing it through from start to finish.",
  points: [
    "Joined as a Frontend Developer and grew into a Full Stack role over time",
    "Built and shipped 20+ production landing & campaign pages",
    "Took over backend ownership — building and migrating Node.js APIs",
    "Built a reusable React Native component library used across projects",
  ],
  stats: [
    {
      icon: "fa-solid fa-award",
      title: "Experience",
      text: "3 Years Of Experience",
    },
    {
      icon: "fa-solid fa-building",
      title: "Industry",
      text: "Real-world production products",
    },
    {
      icon: "fa-solid fa-diagram-project",
      title: "Projects",
      text: "6+ Completed",
    },
  ],
};

export const skills = {
  languages: [
    { name: "JavaScript (ES6+)", icon: "fa-brands fa-js", color: "#F7DF1E" },
    { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178C6" },
    { name: "HTML5", icon: "fa-brands fa-html5", color: "#E34F26" },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572B6" },
  ],
  frontendMobile: [
    { name: "React JS", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Next.js", icon: "fa-solid fa-n", color: "#FFFFFF" },
    { name: "React Native", icon: "fa-brands fa-react", color: "#61DAFB" },
    { name: "Redux", icon: "fa-solid fa-diagram-project", color: "#764ABC" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#38BDF8" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952B3" },
  ],
  backend: [
    { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
    { name: "Express.js", icon: "fa-solid fa-server", color: "#B7B7B7" },
    { name: "REST APIs", icon: "fa-solid fa-plug", color: "#FF6C37" },
    { name: "MySQL", icon: "fa-solid fa-database", color: "#4479A1" },
    { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47A248" },
  ],
  cloudTools: [
    { name: "AWS", icon: "fa-brands fa-aws", color: "#FF9900" },
    { name: "Docker", icon: "fa-brands fa-docker", color: "#2496ED" },
    { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", color: "#326CE5" },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "#F05032" },
    { name: "GitLab", icon: "fa-brands fa-gitlab", color: "#FC6D26" },
    { name: "Postman", icon: "fa-solid fa-paper-plane", color: "#FF6C37" },
    { name: "JIRA", icon: "fa-brands fa-jira", color: "#0052CC" },
  ],
};

export const experience = [
  {
    year: "March 2023 — Present",
    title: "Software Developer",
    place: "Venuemonk Technologies, Gurgaon",
    points: [
      "Worked across frontend, backend, and mobile applications using React.js, Next.js, React Native, Node.js, Redux, and TypeScript, taking ownership of features from requirement gathering to deployment and post-release support.",
      "Collaborated with product managers, designers, QA engineers, and backend developers to plan, develop, test, and deliver features within sprint timelines, ensuring smooth releases and high-quality user experiences.",
      "Built and maintained 20+ landing pages, dashboards, and business-critical tools, while improving website performance, SEO, and mobile user experience, contributing to increased user engagement and platform growth.",
      "Developed and maintained scalable Node.js APIs across multiple projects, migrated 400+ legacy APIs to ES6+, and optimized application performance through code refactoring and improved state management practices.",
      "Created reusable React and React Native components, including booking calendars, date pickers, and workflow modules, reducing development effort by approximately 30% and enabling faster feature delivery across teams.",
      "Built a custom React Native component library (Booking Calendar, Date Picker) reused across projects, saving ~30% dev time per feature",
      "Resolved daily issues, bugs, or any additional features provided in Jira by Testing Unit, making the application bug-free and updated to the current requirement by 100 percent.",
    ],
  },
  {
    year: "July 2022 — September 2022",
    title: "Web Developer Intern",
    place: "Digi-Vertex Private Limited Solutions, Gurgaon",
    points: [
      "Worked on the frontend development of the company’s official website using React.js, building responsive user interfaces, enhancing existing pages, and contributing to a smoother user experience across desktop and mobile devices.",
      "Contributed to the development and maintenance of the company’s internal accounting platform by creating UI modules, implementing new features, and improving usability, helping streamline day-to-day operations for internal teams.",
      "Collaborated with senior developers to develop, test, and deploy frontend features, resolve bugs, and deliver project requirements within deadlines, while gaining hands-on experience with React.js, component-based architecture, and modern web development practices."
    ],
  },
];

export const education = [
  {
    year: "2018 — 2022",
    title: "B.Tech, Computer Science Engineering",
    place: "KIIT College of Engineering, Gurgaon",
  },
  {
    year: "Senior Secondary",
    title: "12th (Non-Medical)",
    place: "Govt. Senior Secondary School, Gurgaon",
  },
];

export const projects = [
  {
    title: "Venuemonk Website",
    description:
      "Venuemonk is one of India's leading wedding venue discovery platforms that helps couples find and book venues for their special events. I worked on building and maintaining landing pages, campaign pages, and new website features while improving performance, SEO, and the overall user experience across devices.",
    tags: ["Next.js", "JavaScript", "Redux"],
    icon: "fa-solid fa-globe",
    link: "https://www.venuemonk.com/",
    linkLabel: "Visit Website",
  },
  {
    title: "Venuemonk CRM",
    description:
      "A mobile application used by the Venuemonk sales team to manage venue inquiries, track leads, and convert them into bookings. I worked on developing features, integrating APIs, and improving the overall experience to help the team manage leads more efficiently.",
    tags: ["React Native", "Redux", "Node.js", "TypeScript"],
    icon: "fa-solid fa-briefcase",
    link: "https://play.google.com/store/apps/details?id=com.venuemonkcrm",
    linkLabel: "View on Play Store",
  },
  {
    title: "Venuemonk Biz App",
    description:
      "A partner-facing mobile app that allows venue owners to manage leads, bookings, and business activities from anywhere. I worked on key features including lead management, notifications, and a custom booking calendar to make day-to-day operations easier for venue partners.",
    tags: ["React Native", "Redux", "Node.js"],
    icon: "fa-solid fa-mobile-screen-button",
    link: "https://play.google.com/store/apps/details?id=com.venuemonk",
    linkLabel: "View on Play Store",
  },
  {
    title: "Partner Portal",
    description:
      "A web platform built for venue partners to manage leads, bookings, and business performance. I worked on improving dashboards, adding new features, and enhancing the user experience to help partners track and grow their business more effectively.",
    tags: ["React.js", "Redux", "Node.js"],
    icon: "fa-solid fa-handshake",
    link: "https://partner.venuemonk.com/",
    linkLabel: "Visit Portal",
  },
  {
    title: "Slide — Dating App",
    description:
      "A social dating application designed around swipe-based interactions and media sharing. I contributed to both frontend and backend development, including API integration, user flows, and photo/video upload functionality to create a smooth and engaging experience.",
    tags: ["React Native (Expo)", "Node.js", "MySQL", "TypeScript"],
    icon: "fa-solid fa-heart",
    link: "https://play.google.com/store/apps/details?id=com.goslidesocial.app",
    linkLabel: "View on Play Store",
  },
  {
    title: "WeddingPe",
    description:
      "A platform that helps couples explore wedding loans and insurance options. I built the frontend application from scratch, creating responsive pages and user-friendly flows for loan products, insurance plans.",
    tags: ["React.js", "Redux", "TypeScript"],
    icon: "fa-solid fa-ring",
    link: "https://weddingpe.com/",
    linkLabel: "Visit Website",
  },
];

export const contact = {
  heading: "Let's build something",
  body: "Open to full stack, frontend, or React Native opportunities. Feel free to reach out.",
};