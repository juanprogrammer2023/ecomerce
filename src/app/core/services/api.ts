import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {

  apiFactus = 'https://api-sandbox.factus.com.co';
  apiFake='https://api.escuelajs.co/api/v1'

  private http = inject(HttpClient);

  constructor() {}

  get<t>(api:'fake'|'factus',endpoint:string):Observable<t>{
    return this.http.get<t>(`${api === 'fake' ? this.apiFake : this.apiFactus}/${endpoint}`);
  }

  post<t>(api:'fake'|'factus',endpoint:string,data:t):Observable<t>{
    return this.http.post<t>(`${api === 'fake' ? this.apiFake : this.apiFactus}/${endpoint}`,data);
  }
  
  getWithId<t>(api:'fake'|'factus',endpoint:string,id:number):Observable<t>{
    return this.http.get<t>(`${api === 'fake' ? this.apiFake : this.apiFactus}/${endpoint}/${id}`);
  }


}
