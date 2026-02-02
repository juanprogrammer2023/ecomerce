import { Routes } from '@angular/router';
import { cartNotEmptyGuard } from './core/guards/cart-not-empty-guard';


export const routes: Routes = [
    {
        path: 'products',
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
    },
    {
        path: 'carrito',
        loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
    },
    {
        path: 'billing',
        loadChildren: () => import('./billing/billing-module').then(m => m.BillingModule),
        canMatch:[cartNotEmptyGuard]
    }
];
