import { Project, SkillCategory, EducationItem, InternshipItem, CertificationItem, ActivityItem } from '../types/portfolio';

export const personalInfo = {
  name: "UPPALAPATI SOMYA SRI",
  displayName: "Uppalapati Somya Sri",
  shortName: "Somya Sri",
  headline: "Aspiring Software Engineer",
  subHeadline: "B.Tech CSE (2023–2027)",
  bio: "Computer Science and Engineering undergraduate with hands-on experience in software development through an internship and academic projects. Worked with JavaScript, React.js, Node.js, Express.js, MongoDB, Firebase Firestore, REST APIs, and JWT authentication. Built web applications with database integration, role-based access control, and user authentication.",
  extendedBio: "I am a Computer Science and Engineering undergraduate at Vishnu Institute of Technology, Bhimavaram. My journey is shaped by a deep fascination with building responsive web interfaces, robust backend systems, and well-structured database schemas. Through my MERN Stack virtual internship and multifaceted academic projects, I have developed a strong practical foundation in end-to-end web engineering. My core strengths center around Frontend UI development with React.js, Backend REST APIs with Node.js & Express.js, Database integration with MongoDB & Firebase Firestore, and enforcing secure Role-Based Access Control (RBAC) via JWT authentication.",
  email: "uppalapatisomyasri@gmail.com",
  phone: "+91 9030721396",
  rawPhone: "9030721396",
  github: "https://github.com/Somyasri1",
  linkedin: "https://linkedin.com/in/uppalapati-somyasri-3b797831b",
  location: "Bhimavaram, Andhra Pradesh, India",
  resumePath: "/assets/resume.pdf",
  downloadFileName: "Uppalapati_Somya_Sri_Resume.pdf"
};

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages for algorithmic logic, problem solving, and script design.",
    iconName: "code",
    skills: ["Python", "JavaScript (ES6+)", "C"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Creating accessible, dynamic, and responsive interfaces for diverse viewports.",
    iconName: "layout",
    skills: ["HTML5", "CSS3", "React.js", "Responsive Web Design"]
  },
  {
    id: "backend",
    title: "Backend & Security",
    description: "Architecting modular services, route controllers, and encrypted sessions.",
    iconName: "server",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
  },
  {
    id: "databases",
    title: "Databases & ORM",
    description: "Document indexing, relationship queries, and cloud real-time collections.",
    iconName: "database",
    skills: ["MongoDB", "Mongoose", "Firebase Firestore"]
  },
  {
    id: "tools",
    title: "Developer Tools & Ecosystem",
    description: "Daily workflows for version management, API prototyping, debugging, and cloud services.",
    iconName: "wrench",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Firebase"]
  }
];

export const internshipData: InternshipItem = {
  role: "Full Stack Developer (MERN Stack) Intern",
  organization: "SmartBridge Educational Services Pvt. Ltd.",
  collaboration: "Andhra Pradesh State Council of Higher Education (APSCHE)",
  period: "May 2026 – July 2026",
  trainingDuration: "120 Hours",
  location: "Virtual • India",
  descriptionBullets: [
    "Completed an intensive 120-hour MERN Stack virtual internship with practical, project-based engineering across MongoDB, Express.js, React.js, and Node.js.",
    "Contributed to the development of a healthcare appointment management application supporting three distinct user roles: Admin, Doctor, and Patient, by implementing backend functionality, REST APIs, and MongoDB schema integration.",
    "Engineered robust authentication flow, role-based route guards, and relational data representations using Mongoose."
  ],
  technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "JWT"]
};

export const projectsData: Project[] = [
  {
    id: "book-a-doctor",
    title: "Book A Doctor",
    category: "Healthcare • Full-Stack MERN",
    tagline: "Healthcare Appointment Management Platform with Three-Tier Role Access",
    period: "June 2026 – July 2026",
    description: "A healthcare appointment management platform developed collaboratively in a team to streamline patient consultations, scheduling, and administrative oversight.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    features: [
      "User authentication using JWT and bcrypt password hashing.",
      "Appointment management with status tracking (booked, approved, completed, cancelled).",
      "Backend REST APIs and MongoDB integration with Mongoose ODM.",
      "Role-specific application functionality for Patient, Doctor, and Admin."
    ],
    githubUrl: "https://github.com/Somyasri1/Book-A-Doctor",
    architectureDetails: {
      overview: "Book A Doctor replaces traditional telephone and physical consultation queues with an end-to-end automated clinical scheduling platform. The architecture separates business logic into a modular MVC structure on Express.js with client-side routing on React.js.",
      highlights: [
        "Stateless JWT Authentication with salted bcrypt hashing for passwords.",
        "Role-Based Access Control (RBAC): Patient (booking & history), Doctor (schedule & availability slots), Admin (system oversight & verification).",
        "4 Mongoose Schema Models: User, DoctorProfile, Appointment, and Department.",
        "Input sanitation, parameterized MongoDB queries, and structured error responses."
      ],
      modelsOrCollections: [
        "User (credentials, role enum, profile data)",
        "DoctorProfile (specialization, consultation hours, rating)",
        "Appointment (patientId, doctorId, slotTimestamp, status)",
        "Department (departmentName, activeSpecialists)"
      ],
      security: [
        "JWT token validation in authorization headers",
        "HTTP-only cookie compatibility option",
        "Middleware role validation before doctor/admin routes"
      ],
      liveDemoStatus: "The deployment environment is currently undergoing internal staging and cloud verification. Live testing is active in the development workspace."
    }
  },
  {
    id: "sports-scheduler",
    title: "Sports Scheduler",
    category: "Sports Tech • Cloud Integration",
    tagline: "Event, Tournament & Match Planning Platform with Real-Time Persistence",
    period: "March 2025 – April 2025",
    description: "A sports management application for organizing sports sessions, scheduling matches, and managing events across sports clubs and athletic leagues.",
    technologies: ["Node.js", "Express.js", "Firebase", "JavaScript", "HTML", "CSS"],
    features: [
      "Firebase Firestore integration for low-latency cloud document storage and real-time updates.",
      "Separate Admin and Player dashboards tailored for tournament management and player view.",
      "Role-specific sports session, fixture scheduling, and event management.",
      "Match and tournament scheduling with dynamic event status indicators."
    ],
    githubUrl: "https://github.com/Somyasri1/sports-scheduler",
    architectureDetails: {
      overview: "Sports Scheduler provides sports team management, match scheduling, and event planning. Built with a Node.js/Express service layer integrating directly with Firebase Firestore cloud collections.",
      highlights: [
        "Cloud Document Store: Firebase Firestore collections for teams, fixtures, matches, and results.",
        "Multi-View Dashboards: Admin interface for setting match dates, scores, and event updates, alongside player/viewer fixture schedule feed.",
        "Event and match session organization for sports teams.",
        "Semantic, mobile-first design with accessible navigation and interactive event cards."
      ],
      modelsOrCollections: [
        "matches (teams, venue, date, status, score)",
        "sports (sportCategory, rules, activeTeams)",
        "users (admin vs player credentials and privileges)"
      ],
      security: [
        "Firebase Firestore security rules restricting write permissions to authenticated Admins",
        "Input validation on match schedule submissions"
      ],
      liveDemoStatus: "The project repository is public on GitHub and undergoing cloud integration staging."
    }
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Vishnu Institute of Technology",
    location: "Bhimavaram, Andhra Pradesh",
    period: "2023 – 2027",
    scoreLabel: "CGPA",
    score: "7.66",
    description: "Comprehensive coursework in Data Structures, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering"
    ]
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    location: "Bhimavaram, Andhra Pradesh",
    period: "2021 – 2023",
    scoreLabel: "Percentage",
    score: "79.7%",
    description: "Focused on Mathematics, Physics, and Chemistry (MPC), building analytical rigor and foundational problem-solving disciplines.",
    coursework: ["Mathematics", "Physics", "Chemistry"]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Full Stack Web Application Development with Node.js",
    issuer: "Vishnu Institute of Technology",
    topics: "Node.js • Express • REST APIs • Full Stack Lifecycle",
    icon: "code"
  },
  {
    title: "MongoDB Developer’s Toolkit",
    issuer: "GeeksforGeeks",
    topics: "Document Indexing • Aggregation Pipeline • NoSQL Architecture",
    icon: "database"
  },
  {
    title: "Cybersecurity Virtual Internship",
    issuer: "EduSkills and Palo Alto Networks",
    topics: "Network Security • Cloud Perimeter • Threat Models",
    icon: "shield"
  }
];

export const activitiesData: ActivityItem[] = [
  {
    title: "Flipkart Runway Season 5",
    type: "National Competitive Track",
    icon: "award"
  },
  {
    title: "GenAI & Agentic Intelligence Innovation Hackathon",
    type: "Innovation Hackathon",
    icon: "cpu"
  },
  {
    title: "Women Who Master Hackathon",
    type: "Collaborative Hackathon",
    icon: "star"
  },
  {
    title: "Nation Building Case Study",
    type: "Analytical Case Study",
    icon: "file-text"
  },
  {
    title: "Failthon",
    type: "Engineering Ideation Hackathon",
    icon: "zap"
  }
];
