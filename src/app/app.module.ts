import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './src/app-routing.module';

import { AppComponent } from './app.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { ProductSpecificationComponent } from './product-information/product-specification/product-specification.component';
import { ProductGalleryComponent } from './product-information/product-gallery/product-gallery.component';
import { ProductDiscriptionComponent } from './product-information/product-discription/product-discription.component';
import { AllInformationComponent } from './product-information/all-information/all-information.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    ProductComponent,
    HomeComponent,
    ProductInformationComponent,
    ProductSpecificationComponent,
    ProductGalleryComponent,
    ProductDiscriptionComponent,
    AllInformationComponent,
    ShopingListComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
