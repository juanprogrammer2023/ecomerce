import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductModule } from './products/product.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartModule } from './cart/cart.module';  
import { BillingModule } from './billing/billing-module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductModule,
    RouterLink,
    CommonModule,
    CartModule,
    BillingModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('myEcommerce');

  rutas=[
    {
      link:"/home",
      label:"Inicio"
    },
    {
      link:"/products",
      label:"Productos"
    },
    {
      link:"/carrito",
      label:"Carrito"
    }
  ]
}
