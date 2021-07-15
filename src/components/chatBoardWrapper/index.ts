// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatBoardWrapper.tmpl';
import Block from '../../common/block';
import ChatBoardWrapperOptions from './chatBoardWrapper.options';
import ChatAPI from '../../api/chat-api';
import WebSocketApi from '../../common/web-socket-api';
import { setChatSendClick } from '../../scripts/setChatClick';
import AuthController from '../../controllers/auth-controller';

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
    chatApi.getChatUsersList(this.props.id).then((response:any) => {
      if (response.status === 200) {
        localStorage.setItem('token', response.token);
      }
    });
    localStorage.setItem('currentChatId', this.props.id);
    const authController = new AuthController();
    authController.collectUserData();
    this.socket = new WebSocketApi();
    this.socket.connect();
    if (this.element) {
      setChatSendClick(this.element, this.socket);
    }
  }
}
