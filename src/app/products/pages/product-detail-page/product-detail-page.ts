import { Component, inject, OnInit, Signal, signal,WritableSignal } from '@angular/core';
import { ProductService } from '../../services/product.service';  
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';



@Component({
  selector: 'app-product-detail-page',
  standalone: false,
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.css',
})
export class ProductDetailPage  {

  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  
  productId: number = 0;
  // productData:Product|null=null
  productData:WritableSignal<Product|null> = signal(null);


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = Number(params.get('id'));
      // Llamada al servicio para traer el producto
      this.productService.getProductById(this.productId).subscribe(data => {
        this.productData.set(data);
        console.log(this.productData());
      });
    });
  }

  


}
