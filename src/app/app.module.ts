import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { CardComponent } from './components/card/card.component';
import { FilterArticlesContainerComponent } from './components/filter-articles-container/filter-articles-container.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    CardComponent,
    FilterArticlesContainerComponent,
  ],
  imports: [BrowserModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
