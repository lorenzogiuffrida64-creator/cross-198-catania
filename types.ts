export interface Testimonial {
  id: number;
  name: string;
  handle: string;
  text: string;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  benefits: string[];
  image: string;
}

export type PageType = 'home' | 'community' | 'servizi';