import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(uname, pwd): Observable<boolean> {

    return this.http.post<any>('/users/login', { username: uname, password: pwd })
      .pipe(map(response => {
        if (response.status === 200)
          return true;
        else
          return false;
      }));

  }
  register(uname, fname, lname, pwd): Observable<boolean> {

    return this.http.post<any>('/users/register', { username: uname, password: pwd, firstName: fname, lastName: lname })
      .pipe(map(response => {
        if (response.status === 200)
          return true;
        else
          return false;

      }));

  }

}
