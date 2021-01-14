import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/modules/login/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup = new FormGroup({});
  public loginFormLoginControl: FormControl = new FormControl();
  public loginFormPasswordControl: FormControl = new FormControl();

  constructor(
    private snackBar: MatSnackBar,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginFormGroup = new FormGroup({
      login: this.loginFormLoginControl,
      password: this.loginFormPasswordControl
    });
  }

  public loginAction(): void {
    const formData = this.loginFormGroup.value;
    this.loginService.login(formData.login, formData.password)
      .subscribe((value) => {
        const message = 'You successful login';
        this.snackBar.open(message, 'close', {
          duration: 2000,
        });
      });
  }

}
