import { Component, Input } from '@angular/core';
import { SelectedArticle } from 'src/app/models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() article: SelectedArticle | undefined;

  handleClick(link: string) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }
}
