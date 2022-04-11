import {NgModule} from "@angular/core";
import {SocialMediaComponent} from "./components/social-media/social-media.component";
import {ProductComponent} from "./components/product/product.component";
import {ShopingListComponent} from "./components/shoping-list/shoping-list.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {CommonModule} from "@angular/common";
import {AppModule} from "../app.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SocialMediaComponent,
    ProductComponent,
    ShopingListComponent,
    ToolbarComponent,],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ToolbarComponent
    , SocialMediaComponent
    , ProductComponent
    , ShopingListComponent
  ]

})
export class SharedModule {

}
