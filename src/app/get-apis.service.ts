import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { influencer } from './models/influencer.model'

@Injectable({
  providedIn: 'root'
})
export class GetApisService {
  constructor(private http: HttpClient) { }

  public apiUrl = "https://jsonplaceholder.typicode.com/users"

  getInfluencers(): Observable<influencer[]> {
    return this.http.get<influencer[]>(this.apiUrl)
  }
}
