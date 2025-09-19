export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface Review {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Tool {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
  protected: boolean;
  title: string;
}