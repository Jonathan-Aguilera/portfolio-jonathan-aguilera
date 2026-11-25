export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime?: number;
  coverImage?: string;
  imagenes?: string[];
  author?: string;
}