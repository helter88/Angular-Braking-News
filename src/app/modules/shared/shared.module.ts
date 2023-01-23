import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PaginatorComponent } from './paginator/paginator.component';

@NgModule({
  declarations: [HeaderComponent, PaginatorComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, PaginatorComponent],
})
export class SharedModule {}
