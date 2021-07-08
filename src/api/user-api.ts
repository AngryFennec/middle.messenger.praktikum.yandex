import HTTPTransport from '../common/http-transport';

export default class UserAPI {
  public changeUserProfile(data: JSON): Promise<void> {
    return new HTTPTransport().put('/user/profile', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }

  public changeUserPassword(data: JSON): Promise<void> {
    return new HTTPTransport().put('/user/password', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }

  public changeUserAvatar(data: JSON): Promise<void> {
    return new HTTPTransport().put('/user/profile/avatar', { data: JSON.stringify(data), headers: { 'content-type': 'multipart/form-data' } }).then((res) => console.log(res));
  }

  public getUserById(id): Promise<void> {
    return new HTTPTransport().get(`/user/${id}`, { headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }

  public searchUser(data: JSON): Promise<void> {
    return new HTTPTransport().post('/user/search', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } }).then((res) => console.log(res));
  }
}
