import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { CartComponent } from "./components/cart-component/cart-component";
import { RouterModule } from "@angular/router";

const rutas:Routes=[
    {
        path: '',
        component: CartComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class CartRoutingModule {




 }