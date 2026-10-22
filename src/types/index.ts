export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'microservices' | 'distributed' | 'all';
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
  architectureOverview: string;
  architectureFlow: {
    step: number;
    title: string;
    description: string;
    technology: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  systemDesignSpecs?: {
    pattern: string;
    throughputOrLatency: string;
    resilience: string;
    storage: string;
  };
  featured: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'hackathon' | 'education';
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}
