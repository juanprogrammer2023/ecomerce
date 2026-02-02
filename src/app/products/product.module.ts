import { NgModule } from '@angular/core';
import { ProductListModule } from './components/product-list/product-list-module';
import { ProductService } from './services/product.service';
import { ProductRoutingModule } from './product.routing.module';
import { ProductsPageModule } from './pages/products-page.module';

@NgModule({
  declarations: [],
  imports: [ProductListModule, ProductRoutingModule, ProductsPageModule],
  providers: [ProductService],
  exports: [ProductListModule, ProductsPageModule],
})
export class ProductModule {}
