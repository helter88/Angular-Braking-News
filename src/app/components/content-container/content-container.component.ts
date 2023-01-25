import { Component, OnInit } from '@angular/core';
import { SelectedArticle } from 'src/app/models/article';
import { CountryISOType } from 'src/app/models/country';
import { ArticlesService } from 'src/app/services/articles.service';
import { ExtractCountryNameService } from 'src/app/services/extract-country-name.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  articles: SelectedArticle[] | undefined;
  country: string | null = 'Poland';
  constructor(
    private articleService: ArticlesService,
    private localSorage: LocalStorageService,
    private extractCountryName: ExtractCountryNameService
  ) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((res) => {
      this.articles = res.articles;
    });

    this.country = this?.localSorage?.getStaticData('country');
    this?.localSorage.getDynamicChanges('country').subscribe((countryISO) => {
      console.log(
        this.extractCountryName.getLongCountryName(countryISO as CountryISOType)
      );
    });
  }
}
