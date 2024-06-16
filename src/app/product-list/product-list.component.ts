import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: '../app.component.css'
})

export class ProductListComponent {
  
  products: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  deleteProduct(id: number): void {
    this.router.navigate(['/product-delete', id]);
  }
    
    editProduct(id: number): void {
    this.router.navigate(['/product-edit', id]);
    }
    navigateToAddProduct(): void {
      this.router.navigate(['/product-add']);
    }
    
    filterProducts(): Product[] {
      if (!this.searchTerm.trim()) {
        return this.products; // Devuelve todos los productos si no hay término de búsqueda
      }
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
      );
    }
}