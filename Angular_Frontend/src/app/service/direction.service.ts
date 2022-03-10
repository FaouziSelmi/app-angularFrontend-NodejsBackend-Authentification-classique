import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direction } from '../entity/direction';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  private baseURLget="http://localhost:3000/directions";
  private baseURLAdd="http://localhost:3000/addDirection";
  constructor(private httpClient: HttpClient) { }

  getDirectionList(): Observable<Direction[]>{
    return this.httpClient.get<Direction[]> (`${this.baseURLget}`);
  }
  createDirection(direction:Direction): Observable<object>{
    return this.httpClient.post(`${this.baseURLAdd}`,direction);
  }
}
