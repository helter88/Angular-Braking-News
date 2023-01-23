import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ArticlesContainerComponent } from './components/articles-container/articles-container.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [AppComponent, ArticlesContainerComponent, CardComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
