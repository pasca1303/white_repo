import { Component, Input } from '@angular/core'
import { influencer } from '../../models/influencer.model'

@Component({
  selector: 'app-influencer-card',
  standalone: true,
  imports: [],
  templateUrl: './influencer-card.component.html',
  styleUrl: './influencer-card.component.scss'
})
export class InfluencerCardComponent {

  @Input() influencer!: influencer

}
