import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public responseCache = new Map();
  private URL = environment.endPint;

  constructor(private http: HttpClient) { }

  /** Below function will return the Api response
   *  For Cache: Saving the data by subscribing to the observable returned.
   *  And then whenever the getDetails() is called it returning the stored data as a new Observable.
   *  This uses ‘of’ operator from RxJS
   */
  public getDetails(searchInput) {
    const FullUrl = this.URL + searchInput;
    const dataFromCache = this.responseCache.get(FullUrl);
    if (dataFromCache) {
      return of(dataFromCache);
    }
    const response = this.http.get<any>(FullUrl);
    response.subscribe(data => this.responseCache.set(FullUrl, data));
    return response;
  }
}
