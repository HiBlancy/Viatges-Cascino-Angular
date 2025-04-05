import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destinacion } from '../common/destinaciones';

@Injectable({
  providedIn: 'root'
})
export class DestinacionesMainService {

  constructor( private http: HttpClient) { }

  getDestinaciones(): Observable<Destinacion> {
    return this.http.get<Destinacion>('data/data.json');
  }
}