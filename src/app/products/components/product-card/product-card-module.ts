import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from './product-card';
import { SafeImagePipe } from '../../pipes/safe-image-pipe';

@NgModule({
  declarations: [ProductCard,SafeImagePipe],
  imports: [
    CommonModule,

  ],
  exports: [ProductCard]
})
export class ProductCardModule { }
