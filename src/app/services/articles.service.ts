import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  Article,
  Root,
  SelectedArticle,
  SelectedResponse,
} from '../models/article';
import { CurrentPageService } from './current-page.service';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private readonly apiUrl = environment.apiUrl;
  private readonly apiKey = environment.apiKey;

  constructor(
    private http: HttpClient,
    private locStorage: LocalStorageService,
    private currPage: CurrentPageService
  ) {}

  getArticles(): Observable<SelectedResponse> {
    const country$ = this.locStorage.getDataStream('country');
    const pageSize$ = this.locStorage.getDataStream('itemsOnPage');
    const currPage$ = this.currPage.getCurrPage();

    return combineLatest([country$, pageSize$, currPage$]).pipe(
      switchMap(([country, pageSize, currPage]) => {
        const searchParams = new HttpParams()
          .set('apiKey', `${this.apiKey}`)
          .set('country', country)
          .set('pageSize', pageSize)
          .set('page', currPage);
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
