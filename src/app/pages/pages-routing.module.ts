import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PagesComponent } from 'src/app/pages/pages.component';
import { PageLoginComponent } from 'src/app/pages/page-login/page-login.component';
import { PageRegistrationComponent } from 'src/app/pages/page-registration/page-registration.component';

const routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: PageLoginComponent,
      },
      {
        path: 'registration',
        component: PageRegistrationComponent
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
