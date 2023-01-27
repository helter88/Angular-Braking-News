import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { SelectedArticle } from 'src/app/models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  noImagePath =
    'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';

  constructor(private el: ElementRef) {}

  @Input() article: SelectedArticle | undefined;

  @HostListener('error') onError() {
    this.el.nativeElement.src = this.noImagePath;
  }

  handleClick(link: string) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
