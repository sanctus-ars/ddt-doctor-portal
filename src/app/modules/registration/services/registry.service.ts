import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {
  constructor() { }

  public registry(user: UserModel): void {
      console.log(user);
  }
}
