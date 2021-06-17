import aside from "../components/aside";
import chatList from "../components/chatList";
import pageMain from "../components/pageMain";
import chatItem from "../components/chatItem";
import chatListWrapper from "../components/chatListWrapper";
import chatBoardWrapper from "../components/chatBoardWrapper";
import chatMessage from "../components/chatMessage";

const chatListContent: string = [
  chatItem.render({
    chatTitle: 'Чат 1',
    chatText: 'Уже прочитано',
  }),
  chatItem.render({
    chatTitle: 'Чат 2',
    chatText: 'Не прочитано',
    newMessagesCount: 3,
  }),
  chatItem.render({
    chatTitle: 'Чат 3',
    chatText: 'Уже прочитано',
    isActive: true,
  }),
].join('');

const chatListRender: string = [
  chatList.render({
    content: chatListContent,
  })
].join('');

const chatMessageContent: string = [
  chatMessage.render({
    text: 'blablalba',
    time: '12:48',
  }),
  chatMessage.render({
    text: 'blablalba blablalba blablalba blablalba blablalba blablalba blablalba blablalba blablalba blablalba',
    time: '12:48',
  }),
  chatMessage.render({
    selfMessage: true,
    isReadMessage: true,
    text: 'blablalba',
    time: '12:48',
  }),

].join('');

const chatContent: string = [
  aside.render({
    isActiveProfile: false,
    isActiveChat: true,
  }),
  chatListWrapper.render({
    listContent: chatListRender,
  }),
  chatBoardWrapper.render({
    messagesContent: chatMessageContent,
    userName: 'Вадим',
  }),
].join('');

const tmpl: string = [
  pageMain.render({
    wrapperClass: 'page-main__wrapper--horizontal',
    content: chatContent,
  })
].join('');

document.querySelector('#root').innerHTML = tmpl;