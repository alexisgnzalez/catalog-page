import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCaller {
  private url = 'http://localhost:5000/';
  private http = inject(HttpClient);

  getPosts() {
    console.log('did something?')
    return this.http.get(this.url);
  }
}