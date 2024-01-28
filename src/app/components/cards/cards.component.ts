import { Component, Input } from '@angular/core';
import { ICardItem } from './card-item';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() items: ICardItem[] = [];
  @Input() backgroundImage: string = '';
  @Input() backgroundColor: string = ''; 
  @Input() bgCard: string = '';
}
