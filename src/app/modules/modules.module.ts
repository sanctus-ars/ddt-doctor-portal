import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginModule } from 'src/app/modules/login/login.module';
import { HeaderModule } from 'src/app/modules/header/header.module';
import { FooterModule } from 'src/app/modules/footer/footer.module';
import { RegistrationModule } from 'src/app/modules/registration/registration.module';

@NgModule({
  declarations: [],
  imports: [
    FooterModule,
    HeaderModule,
    LoginModule,
    SharedModule,
    CommonModule,
    RegistrationModule,
  ],
  exports: [
    FooterModule,
    HeaderModule,
    LoginModule,
    RegistrationModule,
  ]
})
export class ModulesModule { }
