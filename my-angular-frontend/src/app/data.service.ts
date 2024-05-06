import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'http://localhost:3000/data';
  // private http: HttpClient = inject(HttpClient);

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any[]>(this.dataUrl);
  }

}
