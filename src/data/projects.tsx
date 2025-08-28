import { 
  Code, Database, Cloud, Server, Globe, Shield, Zap, Cpu, Network, 
  Database as DatabaseIcon, Brain, Monitor, Lock, Container, 
  GitBranch, BarChart3, Target, Settings, Wifi, Rocket, Code2
} from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  accentColor: string;
  link?: string;
}

export interface ProjectSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  projects: Project[];
}

export const projectSections: ProjectSection[] = [
  {
    id: 'system-design',
    label: 'System Design',
    icon: <Settings className="w-5 h-5" />,
    description: 'Designing scalable, reliable, and efficient system architectures',
    projects: [
      {
        id: 0,
        title: 'Distributed System Architecture',
        description: 'High-performance distributed system design with microservices, load balancing, and fault tolerance mechanisms.',
        features: ['Service mesh', 'Load balancing', 'Circuit breakers'],
        icon: <Network className="w-8 h-8" />,
        accentColor: 'text-purple-400',
        link: 'https://github.com/m0hamed541/distributed-system'
      },
      {
        id: 1,
        title: 'Database Design & Optimization',
        description: 'Advanced database architecture with sharding, replication, and query optimization strategies.',
        features: ['Database sharding', 'Replication', 'Query optimization'],
        icon: <DatabaseIcon className="w-8 h-8" />,
        accentColor: 'text-blue-400',
        link: 'https://github.com/m0hamed541/database-design'
      },
      {
        id: 2,
        title: 'API Gateway Implementation',
        description: 'Robust API gateway design with authentication, rate limiting, and caching strategies.',
        features: ['API gateway', 'Authentication', 'Rate limiting'],
        icon: <Server className="w-8 h-8" />,
        accentColor: 'text-green-400',
        link: 'https://github.com/m0hamed541/api-gateway'
      },
      {
        id: 3,
        title: 'Service Mesh Implementation',
        description: 'Advanced service mesh architecture for microservices with traffic management, security, and observability features.',
        features: ['Service mesh', 'Traffic management', 'Security policies'],
        icon: <Container className="w-8 h-8" />,
        accentColor: 'text-indigo-400',
        link: 'https://github.com/m0hamed541/service-mesh'
      }
    ]
  },
  {
    id: 'cloud-architecting',
    label: 'Cloud Architecting',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Building robust cloud-native solutions across multiple platforms',
    projects: [
      {
        id: 0,
        title: 'Multi-Cloud Infrastructure',
        description: 'Hybrid cloud solution spanning AWS, Azure, and GCP with unified management and monitoring.',
        features: ['Multi-cloud deployment', 'Unified monitoring', 'Cost optimization'],
        icon: <Cloud className="w-8 h-8" />,
        accentColor: 'text-blue-400',
        link: 'https://github.com/m0hamed541/multi-cloud'
      },
      {
        id: 1,
        title: 'Container Orchestration Platform',
        description: 'Enterprise-grade Kubernetes platform with advanced networking, security, and monitoring capabilities.',
        features: ['Kubernetes', 'Service mesh', 'Security policies'],
        icon: <Server className="w-8 h-8" />,
        accentColor: 'text-green-400',
        link: 'https://github.com/m0hamed541/k8s-platform'
      }
    ]
  },
  {
    id: 'problem-solving',
    label: 'Problem Solving',
    icon: <Target className="w-5 h-5" />,
    description: 'Solving complex technical challenges with innovative approaches',
    projects: [
      {
        id: 0,
        title: 'Algorithm Optimization Engine',
        description: 'High-performance algorithm library with optimization techniques for complex computational problems.',
        features: ['Algorithm optimization', 'Performance analysis', 'Benchmarking'],
        icon: <Brain className="w-8 h-8" />,
        accentColor: 'text-yellow-400',
        link: 'https://github.com/m0hamed541/algo-engine'
      },
      {
        id: 1,
        title: 'System Performance Analyzer',
        description: 'Comprehensive system analysis tool for identifying bottlenecks and optimizing resource utilization.',
        features: ['Performance profiling', 'Bottleneck detection', 'Resource optimization'],
        icon: <Monitor className="w-8 h-8" />,
        accentColor: 'text-red-400',
        link: 'https://github.com/m0hamed541/performance-analyzer'
      }
    ]
  },
  {
    id: 'dev',
    label: 'Dev',
    icon: <Code className="w-5 h-5" />,
    description: 'Developing full-stack applications with modern technologies',
    projects: [
      {
        id: 0,
        title: 'Full-Stack Web Application',
        description: 'Modern web application with React frontend, Node.js backend, and PostgreSQL database.',
        features: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        icon: <Code className="w-8 h-8" />,
        accentColor: 'text-green-400',
        link: 'https://github.com/m0hamed541/fullstack-app'
      },
      {
        id: 1,
        title: 'API Gateway & Services',
        description: 'Scalable API gateway with authentication, rate limiting, and service discovery capabilities.',
        features: ['API gateway', 'Authentication', 'Rate limiting'],
        icon: <Globe className="w-8 h-8" />,
        accentColor: 'text-purple-400',
        link: 'https://github.com/m0hamed541/api-gateway'
      }
    ]
  }
];

// Feature icon mapping
export const featureIcons: { [key: string]: React.ReactNode } = {
  'Service mesh': <Network className="w-5 h-5" />,
  'Load balancing': <BarChart3 className="w-5 h-5" />,
  'Circuit breakers': <Shield className="w-5 h-5" />,
  'Database sharding': <Database className="w-5 h-5" />,
  'Replication': <GitBranch className="w-5 h-5" />,
  'Query optimization': <Zap className="w-5 h-5" />,
  'Multi-cloud deployment': <Cloud className="w-5 h-5" />,
  'Unified monitoring': <Monitor className="w-5 h-5" />,
  'Cost optimization': <BarChart3 className="w-5 h-5" />,
  'Kubernetes': <Container className="w-5 h-5" />,
  'Security policies': <Lock className="w-5 h-5" />,
  'Algorithm optimization': <Brain className="w-5 h-5" />,
  'Performance analysis': <Target className="w-5 h-5" />,
  'Benchmarking': <BarChart3 className="w-5 h-5" />,
  'Performance profiling': <Monitor className="w-5 h-5" />,
  'Bottleneck detection': <Target className="w-5 h-5" />,
  'Resource optimization': <Settings className="w-5 h-5" />,
  'React': <Code2 className="w-5 h-5" />,
  'Node.js': <Server className="w-5 h-5" />,
  'PostgreSQL': <Database className="w-5 h-5" />,
  'Docker': <Container className="w-5 h-5" />,
  'API gateway': <Globe className="w-5 h-5" />,
  'Authentication': <Lock className="w-5 h-5" />,
  'Rate limiting': <Shield className="w-5 h-5" />
};
