import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: '../app.component.css'
})
export class ProductAddComponent {
  product: Product = { id: 0, name: '', price: 0 };

  constructor(private productService: ProductService, private router: Router) {}

  private isValidName(name: string): boolean {
    return /^[a-zA-Z ]+$/.test(name);
  }

  private isValidPrice(price: number): boolean {
    return price > 0 && price < 50;
  }

  addProduct(): void {
    if (!this.isValidName(this.product.name)) {
      alert('Nombre no válido, solo se permiten letras y espacios.');
      return;
    }

    if (!this.isValidPrice(this.product.price)) {
      alert('Precio no válido, debe ser mayor a 0 y menor a 50.');
      return;
    }

    const randomId = Math.floor(Math.random() * 100);

    this.productService.getProducts().subscribe(
      products => {
        const existingProduct = products.find(p => p.name === this.product.name);
        if (existingProduct) {
          alert('Ya existe un producto con este nombre.');
        } else {
          
          this.product.id = randomId;
          this.productService.addProduct(this.product).subscribe(
            () => {
              this.router.navigate(['/product-list']);
            },
            error => {
              console.error('Error al agregar producto:', error);
            }
          );
        }
      },
      error => {
        console.error('Error al obtener productos:', error);
      }
    );
  }
  cancel(): void {
    this.router.navigate(['/']);
  }
}