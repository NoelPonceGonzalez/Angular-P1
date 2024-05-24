import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://127.0.0.1:5502';
  productsSignal = signal<any[]>([]);

  constructor(private http: HttpClient) {}

  addProduct(name: string, descritpion: string, price: string, date: string): Observable<any> {
    const productData = { name, descritpion, price, date };
    return this.http.post(`${this.baseUrl}/products/add`, productData);
  }

  getProducts() {
    this.http.get<any>(`${this.baseUrl}/products/get`).subscribe((products) => {
      this.productsSignal.set(products)
    })
    };
  }
