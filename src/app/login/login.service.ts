export class LoginService {
  test() {
    console.log('Test method in login service');
  }
  login(login: string, password: string) {
    let promise = new Promise( function (resolve, reject) {
      if(login === 'q' && password == 'q') {
        resolve('Login completed');
      } else {
        reject('Login falsed');
      }
    });

    return promise;
  }
}
