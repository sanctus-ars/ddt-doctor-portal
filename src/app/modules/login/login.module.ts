import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    SharedModule,
  ],
})
export class LoginModule { }
