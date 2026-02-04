import { Component, inject } from '@angular/core';
import { input } from '@angular/core';
import {Product} from '../../models/product.model';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../../../cart/services/card.service';


@Component({
  selector: 'app-product-card',
  standalone:false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

    product=input<Product>()
    router=inject(Router)
    route=inject(ActivatedRoute)
    cardService=inject(CardService)
  
constructor() {
}

openDetail(productId: number) {
    this.router.navigate(['/products', productId]);
}

addToCart(product: Product) {
    this.cardService.addToCart(product);
}

onImageError(event: Event) {
    console.log('Error al cargar la imagen');
  const img = event.target as HTMLImageElement;
  console.log('🔄 Cambiando a:', '/images/no-image.png');
  img.src = '/images/no-image.png'; // Reemplaza con imagen por defecto
}



}
