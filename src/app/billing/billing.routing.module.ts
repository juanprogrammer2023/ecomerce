import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillingPage } from "./pages/billing-page/billing-page";        
import { cartNotEmptyGuard } from "../core/guards/cart-not-empty-guard";

const routes:Routes=[
    {
        path:'',
        component:BillingPage,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillingRoutingModule { }