import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../product-list/product-list';
import { ProductCardModule } from '../product-card/product-card-module';


@NgModule({
  declarations: [ProductList],
  providers: [],
  imports: [
    CommonModule,
    ProductCardModule
    
  ],
  exports: [ProductList]
})
export class ProductListModule { 



}
