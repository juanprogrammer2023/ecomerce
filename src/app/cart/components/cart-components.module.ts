import { NgModule } from "@angular/core";
import { CartComponent } from "./cart-component/cart-component";   
import { CartItemComponent } from "./cart-item-component/cart-item-component";

@NgModule({
    declarations: [ CartComponent, CartItemComponent],
    imports: [],
    exports: [CartComponent, CartItemComponent]
})
export class CartComponentsModule {

 }