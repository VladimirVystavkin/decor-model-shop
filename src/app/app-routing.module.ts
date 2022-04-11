import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ProductInformationComponent} from "./product-information/product-information.component";
import {ProductSpecificationComponent} from "./product-information/product-specification/product-specification.component";
import {ProductGalleryComponent} from "./product-information/product-gallery/product-gallery.component";
import {ProductDiscriptionComponent} from "./product-information/product-discription/product-discription.component";
import {AllInformationComponent} from "./product-information/all-information/all-information.component";
import {MainLayoutComponent} from "./pages/main-layout/main-layout.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {
        path: 'product-information', component: ProductInformationComponent, children: [
          {path: 'specification', component: ProductSpecificationComponent}
          , {path: 'gallery', component: ProductGalleryComponent}
          , {path: 'description', component: ProductDiscriptionComponent}
          , {path: 'all-information', component: AllInformationComponent}]
      }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  , exports: [RouterModule]
})
export class AppRoutingModule {

}
