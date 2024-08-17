import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { GetApisService } from './get-apis.service'
import { influencer } from './models/influencer.model'

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  constructor(private getApis: GetApisService) { }

  private influencersSubject$ = new BehaviorSubject<influencer[]>([])
  public influencers$ = this.influencersSubject$.asObservable()

  loadInfluencers() {
    this.getApis.getInfluencers().subscribe(infl => {
      this.influencersSubject$.next(infl)
    })
  }




}
