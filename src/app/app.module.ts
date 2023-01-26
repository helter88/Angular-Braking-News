import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { CardComponent } from './components/card/card.component';
import { FilterArticlesContainerComponent } from './components/filter-articles-container/filter-articles-container.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    CardComponent,
    FilterArticlesContainerComponent,
  ],
  imports: [BrowserModule, SharedModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
