import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './shared/components/social-media/social-media.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { ProductSpecificationComponent } from './product-information/product-specification/product-specification.component';
import { ProductGalleryComponent } from './product-information/product-gallery/product-gallery.component';
import { ProductDiscriptionComponent } from './product-information/product-discription/product-discription.component';
import { AllInformationComponent } from './product-information/all-information/all-information.component';
import { ShopingListComponent } from './shared/components/shoping-list/shoping-list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import {SharedModule} from "./shared/shared.module";
import { PrivacyPageComponent } from './src/app/landing-pages/components/privacy-page/privacy-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductInformationComponent,
    AllInformationComponent,
    ProductGalleryComponent,
    ProductSpecificationComponent,
    ProductDiscriptionComponent,
    HomePageComponent,
    MainLayoutComponent,
    PrivacyPageComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    ,SharedModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
