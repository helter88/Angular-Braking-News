import { Component, OnInit } from '@angular/core';
import { SelectedArticle } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  articles: SelectedArticle[] | undefined;
  constructor(private articleService: ArticlesService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((res) => {
      this.articles = res.articles;
    });
  }
}
