import {Product} from '../../products/models/product.model';
import { Injectable } from '@angular/core';

export interface InvoiceItem {
  code_reference: string;
  name: string;
  quantity: number;
  discount_rate: number;
  price: number;
  tax_rate: string;
  unit_measure_id: number;
  standard_code_id: number;
  is_excluded: number;
  tribute_id: number;
  withholding_taxes: { code: string; withholding_tax_rate: number }[];
}

export class ProductAdapter {

    transformToInvoiceItem(product:Product):InvoiceItem{
        return {
            code_reference:String(product.id),
            name:product.title,
            quantity:1,
            discount_rate:0,
            price:product.price,
            tax_rate:'19.00',
            unit_measure_id:70,
            standard_code_id:1,
            is_excluded:0,
            tribute_id:1,
            withholding_taxes:[]
        }
    }
}
