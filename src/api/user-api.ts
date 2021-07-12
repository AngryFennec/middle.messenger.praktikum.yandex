import HTTPTransport from '../common/http-transport';

export default class UserAPI {
  public changeUserProfile(data): Promise<void> {
    return new HTTPTransport().put('/user/profile', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public changeUserPassword(data): Promise<void> {
    return new HTTPTransport().put('/user/password', { data: JSON.stringify(data.password), headers: { 'content-type': 'application/json' } });
  }

  public changeUserAvatar(data): Promise<void> {
    return new HTTPTransport().put('/user/profile/avatar', { data: JSON.stringify(data.avatar), headers: { 'content-type': 'multipart/form-datastore.j' } });
  }

  public getUserById(data): Promise<void> {
    return new HTTPTransport().get(`/user/${data.id}`, { headers: { 'content-type': 'application/json' } });
  }

  public searchUser(data): Promise<void> {
    return new HTTPTransport().post('/user/search', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }
}
