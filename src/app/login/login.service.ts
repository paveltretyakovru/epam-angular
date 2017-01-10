export class LoginService {
  login(login: string, password: string) {
    return new Promise(function(resolve, reject) {
      if(login === 'q' && password == 'q') {
        return resolve();
      } else {
        return reject();
      }
    });
  }
}
