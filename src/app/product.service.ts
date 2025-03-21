import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
    id: number;
    name: string;
    price: number;
}

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
    }

    getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
    }

    addProduct(product: Product): Observable<Product> {
      const productWithIdAsString = { ...product, id: String(product.id) };
      return this.http.post<Product>(this.apiUrl, productWithIdAsString);
    }
  

    updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}