import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

const LOGIN_URL = 'http://localhost:3000/login';

@Injectable()
export class LoginService {
  constructor(
    private http: Http
  ) {}

  test() {
    console.log('Test method in login service');
  }
  login(login: string, password: string) {
    let url: string = `${LOGIN_URL}?login=${login}&password=${password}`;

    return this.http.get(url).toPromise();

    // let promise = new Promise( function (resolve, reject) {
    //
    //   if(login === 'q' && password == 'q') {
    //     resolve('Login completed');
    //   } else {
    //     reject('Login falsed');
    //   }
    // });
    //
    // return promise;
  }
}
