import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {ProductInformationComponent} from "../product-information/product-information.component";
import {ProductSpecificationComponent} from "../product-information/product-specification/product-specification.component";
import {ProductGalleryComponent} from "../product-information/product-gallery/product-gallery.component";
import {ProductDiscriptionComponent} from "../product-information/product-discription/product-discription.component";
import {AllInformationComponent} from "../product-information/all-information/all-information.component";
const routes : Routes = [
  //http://localhost:4200/ -> HomeComponent home page
  {path:'', component: HomeComponent}
  //http://localhost:4200/productinformation/ -> product information page
  ,{path:'product-information' , component: ProductInformationComponent , children : [
      {path:'specification', component:ProductSpecificationComponent}
      ,{path:'gallery' , component:ProductGalleryComponent}
      ,{path:'description' , component:ProductDiscriptionComponent}
      ,{path:'all-information',component:AllInformationComponent}
    ]}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)]
  ,exports:[RouterModule]
})
export class AppRoutingModule{

}
