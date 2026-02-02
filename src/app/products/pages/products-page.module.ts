import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPage } from './product-page/product-page';
import { ProductListModule } from '../components/product-list/product-list-module';
import { CartRoutingModule } from "../../cart/cart-routing.module";
import { ProductDetailPage } from './product-detail-page/product-detail-page';
import { CartComponentsModule } from "../../cart/components/cart-components.module";
import { ProductListPage } from './product-list-page/product-list-page';

@NgModule({
  declarations: [
    ProductPage,
    ProductDetailPage,
    ProductListPage
  ],
  imports: [
    CommonModule,
    ProductListModule,
    CartRoutingModule,
    CartComponentsModule
],
  exports: [
    ProductPage,
    ProductDetailPage,
    ProductListPage
  ]
})
export class ProductsPageModule { }
