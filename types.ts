export enum ContentType {
  FILM = 'FILM',
  ARTICLE = 'ARTICLE'
}

export interface ContentItem {
  id: string;
  title: string;
  description: string;
  source: string;
  year?: number;
  duration?: string; // For films
  readTime?: string; // For articles
  type: ContentType;
  tags: string[];
}