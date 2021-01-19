import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AutocompleteService {
  public baseURL = 'http://192.168.1.138:3000/api/v1/chemicals';

  constructor(private http: HttpClient) {}


  public getDataForAutocomplete(params: string): Observable<any> {
   return this.http.get(`${this.baseURL}/${params}`);
  }




}