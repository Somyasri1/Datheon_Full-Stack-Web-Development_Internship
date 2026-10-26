export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  period: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  architectureDetails: {
    overview: string;
    highlights: string[];
    modelsOrCollections?: string[];
    security?: string[];
    liveDemoStatus: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  scoreLabel: string;
  score: string;
  description: string;
  coursework?: string[];
}

export interface InternshipItem {
  role: string;
  organization: string;
  collaboration: string;
  period: string;
  trainingDuration: string;
  location: string;
  descriptionBullets: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  topics: string;
  icon: string;
}

export interface ActivityItem {
  title: string;
  type: string;
  icon: string;
}
