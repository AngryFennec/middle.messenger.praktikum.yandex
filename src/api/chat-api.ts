import HTTPTransport from '../common/http-transport';

export default class ChatAPI {
  public getChats(data?): Promise<void> {
    return new HTTPTransport().get('/chats', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public createChat(data): Promise<void> {
    return new HTTPTransport().post('/chat', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public deleteChat(data): Promise<void> {
    return new HTTPTransport().delete('/chat', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public getChatFiles(data): Promise<void> {
    return new HTTPTransport().get(`/chats/${data.id}/files`, { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public getArchivedChats(data?): Promise<void> {
    return new HTTPTransport().get('/chats/archive', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public setChatArchived(data): Promise<void> {
    return new HTTPTransport().post('/chats/archive', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public setChatUnarchived(data): Promise<void> {
    return new HTTPTransport().post('/chats/unarchive', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public getCommonChat(data): Promise<void> {
    return new HTTPTransport().get(`/chats/${data.id}/common`, { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public getChatUsers(data): Promise<void> {
    return new HTTPTransport().get(`/chats/${data.id}/users`, { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public getNewMessagesCount(data): Promise<void> {
    return new HTTPTransport().get(`/chats/new/${data.id}`, { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public setChatAvatar(data): Promise<void> {
    return new HTTPTransport().put('/chats/avatar', { data: JSON.stringify(data), headers: { 'content-type': 'multipart/form-datastore.j' } });
  }

  public addUsersToChat(data): Promise<void> {
    return new HTTPTransport().put('/chats/users', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public deleteUserFromChat(data): Promise<void> {
    return new HTTPTransport().delete('/chats/users', { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }

  public getChatUsersList(data): Promise<void> {
    return new HTTPTransport().post(`/chats/token/${data.id}`, { data: JSON.stringify(data), headers: { 'content-type': 'application/json' } });
  }
}
