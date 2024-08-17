import { Component, Input } from '@angular/core';
import { influencer } from '../../models/influencer.model'

@Component({
  selector: 'app-token-card',
  standalone: true,
  imports: [],
  templateUrl: './token-card.component.html',
  styleUrl: './token-card.component.scss'
})
export class TokenCardComponent {
  @Input() token!: influencer
}
