import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private _jsonURL = 'assets/data/countries.json';

  constructor(private http:HttpClient) { }

  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

}
