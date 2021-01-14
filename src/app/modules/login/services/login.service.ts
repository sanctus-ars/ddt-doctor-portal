import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(username: string, password: string): Observable<void> {
    return new Observable<void>();
  }
}
