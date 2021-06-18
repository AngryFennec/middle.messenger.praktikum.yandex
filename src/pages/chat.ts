import Aside from '../components/aside';
import ChatBoardWrapper from '../components/chatBoardWrapper';
import ChatItem from '../components/chatItem';
import ChatList from '../components/chatList';
import ChatListWrapper from '../components/chatListWrapper';
import ChatMessage from '../components/chatMessage';
import PageMain from '../components/pageMain';

const chatListContent: string = [
  new ChatItem({
    chatTitle: 'Чат 1',
    chatText: 'Уже прочитано',
  }).render(),
  new ChatItem({
    chatTitle: 'Чат 2',
    chatText: 'Не прочитано',
    newMessagesCount: 3,
  }).render(),
  new ChatItem({
    chatTitle: 'Чат 3',
    chatText: 'Уже прочитано',
    isActive: true,
  }).render(),
].join('');

const chatListRender: string = [
  new ChatList({
    content: chatListContent,
  }).render(),
].join('');

const chatMessageContent: string = [
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

].join('');

const chatContent: string = [
  new Aside({
    isActiveProfile: false,
    isActiveChat: true,
  }).render(),
  new ChatListWrapper({
    listContent: chatListRender,
  }).render(),
  new ChatBoardWrapper({
    messagesContent: chatMessageContent,
    userName: 'Вадим',
  }).render(),
].join('');

const tmpl: string = [
  new PageMain({
    wrapperClass: 'page-main__wrapper--horizontal',
    content: chatContent,
  }).render(),
].join('');

document.querySelector('#root').innerHTML = tmpl;
