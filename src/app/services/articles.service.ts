import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  Article,
  Root,
  SelectedArticle,
  SelectedResponse,
} from '../models/article';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(
    private http: HttpClient,
    private locStorage: LocalStorageService
  ) {}

  getArticles(): Observable<SelectedResponse> {
    // this.locStorage.getDataStream('country').subscribe((data) => {
    //   console.log('country', data);
    //   country = data;
    // });

    // this.locStorage.getDataStream('itemsOnPage').subscribe((data) => {
    //   console.log('itemsOnPage', data);
    //   pageSize = data;
    // });

    const country$ = this.locStorage.getDataStream('country');
    const pageSize$ = this.locStorage.getDataStream('itemsOnPage');

    return combineLatest([country$, pageSize$]).pipe(
      switchMap(([country, pageSize]) => {
        const searchParams = new HttpParams()
          .set('apiKey', `${this.apiKey}`)
          .set('country', country)
          .set('pageSize', pageSize)
          .set('page', 1);
        return this.http.get<Root>(this.apiUrl, { params: searchParams });
      }),
      map((response: Root) => this.processResponse(response))
    );
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
