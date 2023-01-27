import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  currPage: number | undefined;
  isMaxPage: boolean = false;
  isMinPage: boolean = true;

  constructor(private servicePage: CurrentPageService) {}

  handleNextPage() {
    this.servicePage.nextPage();
  }

  handlePrevPage() {
    this.servicePage.prevPage();
  }

  ngOnInit(): void {
    this.servicePage.getCurrPage().subscribe((val) => {
      this.currPage = val;
    });

    this.servicePage.getIsMaxPage().subscribe((val) => {
      console.log('isPageMax?', val);
    });
    this.servicePage.getIsMinPage().subscribe((val) => {
      console.log('isPageMin?', val);
    });
  }
}
