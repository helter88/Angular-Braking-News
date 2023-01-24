import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  Article,
  Root,
  SelectedArticle,
  SelectedResponse,
} from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getArticles(): Observable<SelectedResponse> {
    const searchParams = new HttpParams()
      .set('apiKey', `${this.apiKey}`)
      .set('country', 'pl')
      .set('pageSize', 10)
      .set('page', 1);
    return this.http
      .get<Root>(this.apiUrl, { params: searchParams })
      .pipe(map((response: Root) => this.processResponse(response)));
  }

  private processResponse(response: Root): SelectedResponse {
    return {
      totalResults: response.totalResults,
      articles: response.articles.map(
        (article: Article) =>
          <SelectedArticle>{
            title: article.title,
            description: article.description,
            articleLink: article.url,
            articleImage: article.urlToImage,
            date: article.publishedAt,
          }
      ),
    };
  }
}
