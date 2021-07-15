import HTTPTransport from '../common/http-transport';
import ChatAPI from '../api/chat-api';

export class ChatController {
  public deleteChatById(id: string) {
    new ChatAPI().deleteChat({ chatId: id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public createChatById(id: string) {
    new ChatAPI().createChat({ chatId: id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getAllChats(offset?: number, limit?: number, title?: string) {
    new ChatAPI().getChats({ offset, limit, title }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getChatFilesById(id: string) {
    new ChatAPI().getChatFiles({ id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getAllArchivedChats(offset?: number, limit?: number, title?: string) {
    new ChatAPI().getArchivedChats({ offset, limit, title }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public archivateChat(id: string) {
    new ChatAPI().setChatArchived({ chatId: id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public unarchivateChat(id: string) {
    new ChatAPI().setChatUnarchived({ chatId: id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getCommonUserChats(id: string) {
    new ChatAPI().getCommonChat({ id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getAllChatUsers(id: string, offset?: number, limit?: number, name?: string, email?: string) {
    new ChatAPI().getChatUsers({
      id, offset, limit, name, email,
    }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getNewMessagesChatCount(id: string) {
    new ChatAPI().getNewMessagesCount({ id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public addUsersToChatById(users: string[], chatId: string) {
    new ChatAPI().addUsersToChat({ users, chatId }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public deleteUsersFromChatById(users: string[], chatId: string) {
    new ChatAPI().deleteUserFromChat({ users, chatId }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }

  public getChatUsers(id: string) {
    new ChatAPI().getChatUsersList({ id }).then((result: any) => {
      if (result.status === 200) {
        console.log(result.response);
      }
    }).catch((err) => console.log(err));
  }
}
