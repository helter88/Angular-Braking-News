import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { CurrentPageService } from 'src/app/services/current-page.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  currPage: number = 0;
  isMaxPage: boolean = false;
  isMinPage: boolean = true;
  totalNumArticles: number = 0;
  numArticlesOnPage: number = 0;

  constructor(
    private servicePage: CurrentPageService,
    private articlesServ: ArticlesService,
    private locStorage: LocalStorageService
  ) {}

  handleNextPage() {
    if ((this.currPage + 1) * this.numArticlesOnPage >= this.totalNumArticles) {
      this.isMaxPage = true;
    }
    if (this.currPage * this.numArticlesOnPage >= this.totalNumArticles) {
      return;
    } else {
      this.servicePage.nextPage();
      this.isMinPage = false;
    }
  }

  handlePrevPage() {
    if (this.currPage - 1 === 1) {
      this.isMinPage = true;
    }
    if (this.currPage === 1) {
      return;
    } else {
      this.servicePage.prevPage();
      this.isMaxPage = false;
    }
  }

  ngOnInit(): void {
    this.servicePage.getCurrPage().subscribe((val) => {
      this.currPage = val;
    });
    this.articlesServ.getArticles().subscribe((resp) => {
      this.totalNumArticles = resp.totalResults;
    });
    this.locStorage.getDataStream('itemsOnPage').subscribe((val) => {
      this.numArticlesOnPage = Number(val);
    });
  }
}
