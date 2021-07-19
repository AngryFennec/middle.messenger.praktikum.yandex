import HTTPTransport from '../common/http-transport';

export default class UserAPI {
  public changeUserProfile(data): Promise<void> {
    return new HTTPTransport().put('/user/profile', { data: JSON.stringify(data) });
  }

  public changeUserPassword(data): Promise<void> {
    return new HTTPTransport().put('/user/password', { data: JSON.stringify(data) });
  }

  public changeUserAvatar(avatar): Promise<void> {
    const formData = new FormData();
    formData.append('avatar', avatar);
    return new HTTPTransport().put('/user/profile/avatar', { data: formData, headers: { 'content-type': 'multipart/form-data' } });
  }

  public getUserById(data): Promise<void> {
    return new HTTPTransport().get(`/user/${data.id}`);
  }

  public searchUser(data): Promise<void> {
    return new HTTPTransport().post('/user/search', { data: JSON.stringify(data) });
  }
}
