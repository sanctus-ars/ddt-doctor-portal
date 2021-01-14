import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public userAuth = false;
  public userData: any = {};

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public logoutAction(): void {

  }

  public loginAction(): void {
    this.router.navigate(['pages/login']);
  }

}
