import { Component } from '@angular/core';
import { InfluencerService } from '../../influencer.service'
import { TokenCardComponent } from '../token-card/token-card.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-token-list',
  standalone: true,
  imports: [
    TokenCardComponent, 
    CommonModule
  ],
  templateUrl: './token-list.component.html',
  styleUrl: './token-list.component.scss'
})
export class TokenListComponent {
  constructor(public tokenService:InfluencerService){tokenService.loadInfluencers()}

  public tokens$ = this.tokenService.influencers$

}
