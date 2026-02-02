import { Component, WritableSignal,signal } from '@angular/core';
import { inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  standalone:false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  loading = signal(false);

  products:WritableSignal<Product[]> = signal([]);
  private productService = inject(ProductService);

  

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.loading.set(true);
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products);
      this.loading.set(false);
    });
  }

}

  // imports: [],
  // providers: [ProductService],