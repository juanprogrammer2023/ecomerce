import { NgModule } from "@angular/core"
import { CartComponentsModule } from "./components/cart-components.module";
import { CartRoutingModule } from "./cart-routing.module";

@NgModule ({
    declarations: [],
    imports: [CartComponentsModule,CartRoutingModule,],
    exports: [ CartComponentsModule]
})

export class CartModule { }