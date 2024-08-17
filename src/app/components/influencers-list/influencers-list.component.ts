import { Component } from '@angular/core';
import { InfluencerService } from '../../influencer.service'
import { InfluencerCardComponent } from '../influencer-card/influencer-card.component';
import { CommonModule, NgFor } from '@angular/common'

@Component({
  selector: 'app-influencers-list',
  standalone: true,
  imports: [
    InfluencerCardComponent,
    CommonModule
    
  ],
  templateUrl: './influencers-list.component.html',
  styleUrl: './influencers-list.component.scss'
})
export class InfluencersListComponent {

  constructor(public inflService:InfluencerService){inflService.loadInfluencers()}

  public influencers$ = this.inflService.influencers$

}
