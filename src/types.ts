// Type definitions for the certificate automation landing page

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  institution: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
}