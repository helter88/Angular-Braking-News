export interface SelectedResponse {
  totalResults: number;
  articles: SelectedArticle[];
}

export interface SelectedArticle {
  title: string;
  description: string;
  articleLink: string;
  articleImage: string;
  date: string;
}

export interface Root {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: any;
  name: string;
}
