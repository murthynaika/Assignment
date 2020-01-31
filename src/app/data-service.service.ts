import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }


 // private url = 'http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=Bangalore';
 private url = '/maps/api/geocode/json?sensor=false&address=Bangalore';
  public getDetails() {
    return this.http.get(this.url);
    // Do stuff.
  }

}
