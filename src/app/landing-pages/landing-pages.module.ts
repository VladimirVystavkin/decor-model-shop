import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusinessCardComponent} from './pages/business-card/business-card.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {UsageRulesComponent} from './pages/usage-rules/usage-rules.component';
import {ShippingPaymentsComponent} from './pages/shipping-payments/shipping-payments.component';
import {CopirationComponent} from './pages/copiration/copiration.component';
import {RouterModule} from "@angular/router";
import {LandingPagesLayoutComponent} from './landing-pages-layout/landing-pages-layout.component';
import {PurshasesReturnComponent} from './pages/purshases-return/purshases-return.component';
import { ShapeTriangleComponent } from './components/shape-triangle/shape-triangle.component';
import { HardSkillComponent } from './components/hard-skill/hard-skill.component';



@NgModule({
  declarations: [
    BusinessCardComponent,
    ContactsComponent,
    UsageRulesComponent,
    ShippingPaymentsComponent,
    CopirationComponent,
    LandingPagesLayoutComponent,
    PurshasesReturnComponent,
    ShapeTriangleComponent,
    HardSkillComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: LandingPagesLayoutComponent, children: [
          {path: '', redirectTo: '/company-inform/business-card',pathMatch: 'full'},
          {path: 'business-card', component: BusinessCardComponent},
          {path: 'contacts', component: ContactsComponent},
          {path: 'usage-rules', component: UsageRulesComponent},
          {path: 'purchases-returnsComponent', component: PurshasesReturnComponent},
          {path: 'contacts', component: ContactsComponent},
          {path: 'shipping-payment', component: ShippingPaymentsComponent}
        ]
      }])
  ],
  exports: [
    RouterModule
  ]
})
export class LandingPagesModule {
}
