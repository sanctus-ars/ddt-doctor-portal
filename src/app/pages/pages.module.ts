import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ModulesModule } from 'src/app/modules/modules.module';
import { PageRegistrationComponent } from './page-registration/page-registration.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { HeaderModule } from 'src/app/modules/header/header.module';

@NgModule({
  declarations: [
    PagesComponent,
    PageLoginComponent,
    PageNotFoundComponent,
    PageRegistrationComponent,
    PageForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    ModulesModule,
    PagesRoutingModule,
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
