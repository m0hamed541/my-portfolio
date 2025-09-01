import { 
  Code, Database, Cloud, Server, Globe, Shield, Zap, Cpu, Network, 
  Database as DatabaseIcon, Brain, Monitor, Lock, Container, 
  GitBranch, BarChart3, Target, Settings, Wifi, Rocket, Code2
} from 'lucide-react';

export const projectSections= [
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
        techStack: ['Service mesh', 'Load balancing', 'Circuit breakers'],
        link: '/projects/distributed-system.json'
      },
      {
        id: 1,
        title: 'Database Design & Optimization',
        description: 'Advanced database architecture with sharding, replication, and query optimization strategies.',
        techStack: ['Database sharding', 'Replication', 'Query optimization'],
        link: 'https://github.com/m0hamed541/database-design'
      },
      {
        id: 2,
        title: 'API Gateway Implementation',
        description: 'Robust API gateway design with authentication, rate limiting, and caching strategies.',
        techStack: ['API gateway', 'Authentication', 'Rate limiting'],
        link: 'https://github.com/m0hamed541/api-gateway'
      },
      {
        id: 3,
        title: 'Service Mesh Implementation',
        description: 'Advanced service mesh architecture for microservices with traffic management, security, and observability features.',
        techStack: ['Service mesh', 'Traffic management', 'Security policies'],
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
        techStack: ['Multi-cloud deployment', 'Unified monitoring', 'Cost optimization'],
        link: 'https://github.com/m0hamed541/multi-cloud'
      },
      {
        id: 1,
        title: 'Container Orchestration Platform',
        description: 'Enterprise-grade Kubernetes platform with advanced networking, security, and monitoring capabilities.',
        techStack: ['Kubernetes', 'Service mesh', 'Security policies'],
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
        techStack: ['Algorithm optimization', 'Performance analysis', 'Benchmarking'],
        link: 'https://github.com/m0hamed541/algo-engine'
      },
      {
        id: 1,
        title: 'System Performance Analyzer',
        description: 'Comprehensive system analysis tool for identifying bottlenecks and optimizing resource utilization.',
        techStack: ['Performance profiling', 'Bottleneck detection', 'Resource optimization'],
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
        techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        link: 'https://github.com/m0hamed541/fullstack-app'
      },
      {
        id: 1,
        title: 'API Gateway & Services',
        description: 'Scalable API gateway with authentication, rate limiting, and service discovery capabilities.',
        techStack: ['API gateway', 'Authentication', 'Rate limiting'],
        link: 'https://github.com/m0hamed541/api-gateway'
      }
    ]
  }
];
