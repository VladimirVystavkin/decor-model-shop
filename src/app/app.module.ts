import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './src/app-routing.module';

import { AppComponent } from './app.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialMediaComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
