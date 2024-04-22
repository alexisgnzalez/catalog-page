import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HttpCaller {
  private url = 'http://localhost:5000/';
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>(this.url);
  }
}