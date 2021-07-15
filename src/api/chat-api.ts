import HTTPTransport from '../common/http-transport';

export default class ChatAPI {
  public getChats(data?): Promise<void> {
    return new HTTPTransport().get('/chats', { data: JSON.stringify(data) });
  }

  public createChat(data): Promise<void> {
    return new HTTPTransport().post('/chat', { data: JSON.stringify(data) });
  }

  public deleteChat(data): Promise<void> {
    return new HTTPTransport().delete('/chat', { data: JSON.stringify(data) });
  }

  public getChatFiles(data): Promise<void> {
    return new HTTPTransport().get(`/chats/${data.id}/files`, { data: JSON.stringify(data) });
  }

  public getArchivedChats(data?): Promise<void> {
    return new HTTPTransport().get('/chats/archive', { data: JSON.stringify(data) });
  }

  public setChatArchived(data): Promise<void> {
    return new HTTPTransport().post('/chats/archive', { data: JSON.stringify(data) });
  }

  public setChatUnarchived(data): Promise<void> {
    return new HTTPTransport().post('/chats/unarchive', { data: JSON.stringify(data) });
  }

  public getCommonChat(data): Promise<void> {
    return new HTTPTransport().get(`/chats/${data.id}/common`, { data: JSON.stringify(data) });
  }

  public getChatUsers(data): Promise<void> {
    return new HTTPTransport().get(`/chats/${data.id}/users`, { data: JSON.stringify(data) });
  }

  public getNewMessagesCount(data): Promise<void> {
    return new HTTPTransport().get(`/chats/new/${data.id}`, { data: JSON.stringify(data) });
  }

  public setChatAvatar(data): Promise<void> {
    return new HTTPTransport().put('/chats/avatar', { data: JSON.stringify(data), headers: { 'content-type': 'multipart/form-data' } });
  }

  public addUsersToChat(data): Promise<void> {
    return new HTTPTransport().put('/chats/users', { data: JSON.stringify(data) });
  }

  public deleteUserFromChat(data): Promise<void> {
    return new HTTPTransport().delete('/chats/users', { data: JSON.stringify(data) });
  }

  public getChatUsersList(data): Promise<void> {
    return new HTTPTransport().post(`/chats/token/${data.id}`, { data: JSON.stringify(data) });
  }
}
