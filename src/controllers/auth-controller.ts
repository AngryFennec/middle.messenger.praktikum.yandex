import AuthAPI from '../api/auth-api';
import Router from '../common/router';

export default class AuthController {
  public collectUserData() {
    new AuthAPI().getUserData().then((result: any) => {
      console.log(result);
      if (result.status === 200) {
        localStorage.setItem('userData', JSON.stringify(JSON.parse(result.response)));
        localStorage.setItem('userId', JSON.stringify(JSON.parse(result.response).id));
      } else {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public signUserIn(data: JSON, link: string) {
    new AuthAPI().signIn(data).then(
      (result) => {
        console.log(result);
        new Router().go(link);
      },
    ).catch((err) => console.log(err));
  }

  public signUserUp(data: JSON, link: string) {
    new AuthAPI().signUp(data).then((result: any) => {
      if (result.status === 200) {
        localStorage.setItem('userId', JSON.parse(result.response).id);
        new Router().go(link);
      } else {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public logoutUser() {
    new AuthAPI().logout().then((result: any) => {
      if (result.status === 200) {
        localStorage.setItem('userData', '');
        localStorage.setItem('userId', '');
      }
    }).catch((err) => console.log(err));
  }
}
