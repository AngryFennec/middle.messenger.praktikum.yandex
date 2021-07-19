import { WEB_SOCKET_PATH } from './constants';

export default class WebSocketApi {
  socket: WebSocket;

  static instance: WebSocketApi;

  private init(socket: WebSocket): void {
    socket.addEventListener('open', this.open.bind(this));
    socket.addEventListener('close', this.close.bind(this));
    socket.addEventListener('message', this.message.bind(this));
    socket.addEventListener('error', this.error.bind(this));
  }

  public connect(): void {
    if (this.socket) {
      this.closeConnect();
    }

    const chatId = localStorage.getItem('currentChatId');
    const chatToken = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    this.socket = new WebSocket(`${WEB_SOCKET_PATH}${userId}/${chatId}/${chatToken}`);

    this.init(this.socket);
  }

  public send(msg: string): void {
    this.socket.send(JSON.stringify({
      msg,
      type: 'message',
    }));
  }

  private open(): void {
    console.log('Connected');
    this.socket.send(JSON.stringify({
      content: '0',
      type: 'get old',
    }));
  }

  private close(event): void {
    if (event.wasClean) {
      console.log('Closed');
    } else {
      console.log('Closed with error');
    }

    console.log(`${event.code} | ${event.reason}`);
  }

  private message(event): void {
    console.log('Data received');
    return JSON.parse(event.data);
  }

  private error(event): void {
    console.log('Error', event.message);
  }

  private closeConnect(): void {
    this.socket.close();
  }
}
