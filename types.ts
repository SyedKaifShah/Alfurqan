export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  imageUrl: string;
  downloadUrl: string;
  language: string;
}

export interface Fatwa {
  id: string;
  question: string;
  answerShort: string;
  scholar: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}
