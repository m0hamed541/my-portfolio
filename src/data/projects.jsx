import {
  Code,
  Database,
  Cloud,
  Server,
  Globe,
  Shield,
  Zap,
  Cpu,
  Network,
  Database as DatabaseIcon,
  Brain,
  Monitor,
  Lock,
  Container,
  GitBranch,
  BarChart3,
  Target,
  Settings,
  Wifi,
  Rocket,
  Code2,
} from "lucide-react";

export const projects = [
  {
    id: 2,
    section: "cloud-architecting",
    title: "Personal Portfolio & System Design Showcase",
    category: "Frontend Development",
    duration: "2 weeks",
    team: "Solo Project",
    technologies: [
      "AWS",
      "GitHub Actions",
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    overview:
      "Built a modern, AWS deployed interactive portfolio website showcasing system design expertise with advanced animations, and responsive design patterns.",
    features: [
      "Custom WebGL light rays animation with mouse interaction",
      "Smooth drag-and-drop project cards with physics",
      "Responsive design with mobile-optimized interactions",
      "Interactive tech stack carousel with hover effects",
      "Dynamic project filtering and categorization",
      "Contact form with AWS Lambda serverless backend",
    ],
    challenges:
      "Implementing performant animations while maintaining 60fps, creating intuitive mobile swipe interactions, and optimizing bundle size for fast loading across devices.",
    results:
      "Created a highly engaging portfolio that demonstrates both frontend development skills and system design thinking, with smooth animations and professional UX that showcases technical expertise effectively.",
    githubUrl: "https://github.com/m0hamed541/my-portfolio",
    imageUrl: "",
  },

  {
    id: 4,
    section: "dev",
    title: "Flashcards Mobile Learning App",
    category: "Mobile Development",
    duration: "1 month",
    team: "Solo Project",
    technologies: [
      "React Native",
      "Expo",
      "TinyBase",
      "NativeWind",
      "AsyncStorage",
    ],
    overview:
      "Built a modern flashcard application for IT students with category management, deck organization, and progress tracking using local-first architecture.",
    features: [
      "Category management with custom color coding",
      "Deck creation and organization within categories",
      "Interactive flashcard study sessions",
      "Progress tracking with statistics and achievements",
      "Offline-first with AsyncStorage persistence",
      "Clean, minimalist UI with smooth navigation",
    ],
    challenges:
      "Implementing efficient local data persistence with TinyBase while maintaining reactive UI updates and ensuring data consistency across app restarts.",
    results:
      "Created a comprehensive learning tool with intuitive UX, demonstrating proficiency in React Native state management and local-first mobile architecture patterns.",
    githubUrl: "https://github.com/m0hamed541/flashcards",
    imageUrl:
      "https://my-portfolio-bucket-30-08-25.s3.eu-north-1.amazonaws.com/images/screenshots.png",
  },
];

export const projectSections = [
  {
    id: "system-design",
    label: "System Design",
    icon: <Settings className="w-5 h-5" />,
    description:
      "Designing scalable, reliable, and efficient system architectures",
  },
  {
    id: "cloud-architecting",
    label: "Cloud Architecting",
    icon: <Cloud className="w-5 h-5" />,
    description:
      "Building robust cloud-native solutions across multiple platforms",
  },
  {
    id: "problem-solving",
    label: "Problem Solving",
    icon: <Target className="w-5 h-5" />,
    description:
      "Solving complex technical challenges with innovative approaches",
  },
  {
    id: "dev",
    label: "Dev",
    icon: <Code className="w-5 h-5" />,
    description: "Developing full-stack applications with modern technologies",
  },
];
