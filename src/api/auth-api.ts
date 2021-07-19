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
    return new HTTPTransport().get('/auth/user');
  }

  public logout(): Promise<void> {
    return new HTTPTransport().post('/auth/logout');
  }

  public signIn(data: JSON): Promise<void> {
    return new HTTPTransport().post('/auth/signin', { data: JSON.stringify(data) });
  }

  public signUp(data: JSON): Promise<void> {
    return new HTTPTransport().post('/auth/signup', { data: JSON.stringify(data) });
  }
}
