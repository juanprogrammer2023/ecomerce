import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from './product-card';



@NgModule({
  declarations: [ProductCard],
  imports: [
    CommonModule
  ],
  exports: [ProductCard]
})
export class ProductCardModule { }
