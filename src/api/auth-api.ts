import HTTPTransport from '../common/http-transport';

export interface SignInRequest {
  login: string;
  password: string;
}

export interface SignUpRequest {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export default class AuthAPI {
  public getUserData(): Promise<void> {
    return new HTTPTransport().get('/auth/user', { headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }

  public logout(): Promise<void> {
    return new HTTPTransport().post('/auth/logout', { headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }

  public signIn(data: JSON): Promise<void> {
    return new HTTPTransport().post('/auth/signin', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }

  public signUp(data: JSON): Promise<void> {
    return new HTTPTransport().post('/auth/signup', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }
}
