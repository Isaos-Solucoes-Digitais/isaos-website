

export interface Project {
  id: number;
  title: string;
  catKey: string;
  description: string;
  techs: string[];
  color: string;
  icon: any;
  result: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  initial: string;
  color: string;
  rating: number;
  text: string;
}

export interface ISocial {
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
}
