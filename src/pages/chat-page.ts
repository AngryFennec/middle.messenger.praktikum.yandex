import Aside from '../components/aside';
import ChatBoardWrapper from '../components/chatBoardWrapper';
import ChatItem from '../components/chatItem';
import ChatList from '../components/chatList';
import ChatListWrapper from '../components/chatListWrapper';
import ChatMessage from '../components/chatMessage';
import PageMain from '../components/pageMain';
import Block from '../common/block';
import { PropsType } from '../common/props-type';
import { setChatItemClick, setChatSendClick } from '../scripts/setChatClick';
import { ChatController } from '../controllers/chat.-controller';

export default class ChatPage extends Block<PropsType> {
  constructor() {
    new ChatController().getAllChats();
    super({
      components: new PageMain(
        {
          wrapperClass: 'page-main__wrapper--horizontal',
          content: [
            new Aside({
              isActiveProfile: false,
              isActiveChat: true,
            }).render(),
            new ChatListWrapper({
              listContent: new ChatList({
                content: [
                  new ChatItem({
                    id: 'sd1',
                    chatTitle: 'Чат 1',
                    chatText: 'Уже прочитано',
                  }).render(),
                  new ChatItem({
                    id: 'sd2',
                    chatTitle: 'Чат 2',
                    chatText: 'Не прочитано',
                    newMessagesCount: 3,
                  }).render(),
                  new ChatItem({
                    id: 'sd3',
                    chatTitle: 'Чат 3',
                    chatText: 'Уже прочитано',
                  }).render(),
                ].join(''),
              }).render(),
            }).render(),
            new ChatBoardWrapper({
              id: localStorage.getItem('currentChatId') ?? '',
              messagesContent: [
                new ChatMessage({
                  text: 'blablalba',
                  time: '12:48',
                }).render(),
                new ChatMessage({
                  text: 'blablalba blablalba blablalba blablalba blablalba blablalba blablalba blablalba blablalba blablalba',
                  time: '12:48',
                }).render(),
                new ChatMessage({
                  selfMessage: true,
                  isReadMessage: true,
                  text: 'blablalba',
                  time: '12:48',
                }).render(),

              ].join(''),
              userName: 'Вадим',
            }).render(),
          ].join(''),
        },
      ),
      handlers: [setChatItemClick, setChatSendClick],
    });
  }

  public render() {
    const { components } = this.props;
    return components.render();
  }
}
