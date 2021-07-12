// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatBoardWrapper.tmpl';
import Block from '../../common/block';
import ChatBoardWrapperOptions from './chatBoardWrapper.options';
import ChatAPI from '../../api/chat-api';
import AuthAPI from '../../api/auth-api';
import WebSocketApi from '../../common/web-socket-api';
import { setChatSendClick } from '../../scripts/setChatClick';

export default class ChatBoardWrapper extends Block<ChatBoardWrapperOptions> {
  public socket;

  constructor(props: ChatBoardWrapperOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }

  public componentDidMount() {
    const chatApi = new ChatAPI();
    chatApi.getChatUsersList(this.props).then((response:any) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.token);
      }
    });
    localStorage.setItem('currentChatId', this.props.id);
    const authApi = new AuthAPI();
    authApi.getUserData().then((response:any) => {
      if (response.status === 200) {
        localStorage.setItem('userId', response.id);
      }
    });
    this.socket = new WebSocketApi();
    this.socket.connect();
    console.log(this.props);
    if (this.element) {
      setChatSendClick(this.element, this.socket);
    }
  }
}
