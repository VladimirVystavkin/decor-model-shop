import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCardComponent } from './pages/business-card/business-card.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { UsageRulesComponent } from './pages/usage-rules/usage-rules.component';
import { PurshaesReturnsComponent } from './pages/purshaes-returns/purshaes-returns.component';
import { ShippingPaymentsComponent } from './pages/shipping-payments/shipping-payments.component';
import { CopirationComponent } from './pages/copiration/copiration.component';
import {RouterModule} from "@angular/router";
import { LandingPagesLayoutComponent } from './landing-pages-layout/landing-pages-layout.component';



@NgModule({
  declarations: [
    BusinessCardComponent,
    ContactsComponent,
    UsageRulesComponent,
    PurshaesReturnsComponent,
    ShippingPaymentsComponent,
    CopirationComponent,
    LandingPagesLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LandingPagesModule { }
