import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationMainComponent } from './components/registration-main/registration-main.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [RegistrationMainComponent],
  exports: [
    RegistrationMainComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class RegistrationModule { }
