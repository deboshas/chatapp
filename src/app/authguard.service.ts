import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('userloggedin')) {
      this.router.navigate(['/']);
      return true;
    }

    else {

      this.router.navigate(['/login']);
      return false;
    }

  }
}
