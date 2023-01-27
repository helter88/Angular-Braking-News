import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  currPage: number | undefined;

  constructor(private servicePage: CurrentPageService) {}

  handleNextPage() {
    this.servicePage.nextPage();
  }

  ngOnInit(): void {
    this.currPage = this.servicePage.getCurrPage();
  }
}
