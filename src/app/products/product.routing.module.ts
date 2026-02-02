import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductList } from "./components/product-list/product-list";
import { ProductPage } from "./pages/product-page/product-page";
import { ProductDetailPage } from "./pages/product-detail-page/product-detail-page";

const routes: Routes = [
    {
        path: '',
        component: ProductPage,
        children: [
            {
                path: '',
                component: ProductList
            },
            {
                path: ':id',
                component: ProductDetailPage
            },
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }