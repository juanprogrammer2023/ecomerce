import { Injectable } from '@angular/core';
import {inject} from '@angular/core';
import { Api } from '../../core/services/api';
import {Product} from '../models/product.model';

@Injectable(
  
)
export class ProductService {
  private api = inject(Api);

  getProducts(){
    return this.api.get<Product[]>('fake','products');
  }
  
  getProductById(id: number){
    return this.api.getWithId<Product>('fake','products', id);
  }
}
