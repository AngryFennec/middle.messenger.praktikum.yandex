import WebSocketApi from '../common/web-socket-api';

export function setChatItemClick(element) {
  const chatItems = Array.from(element.querySelectorAll('.chat__item'));
  chatItems.forEach((item: HTMLElement) => {
    item.addEventListener('click', (evt: Event) => {
      localStorage.setItem('currentChatId', ((evt.target as HTMLElement).closest('.chat__item') as HTMLElement).dataset.chat);
      chatItems.forEach((chatItem: HTMLElement) => chatItem.classList.remove('chat__item--active'));
      item.classList.add('chat__item--active');
    });
  });
}

export function setChatSendClick(element, socket?) {
  const btn = element.querySelector('.chat__submit-button');
  const newSocket = !socket ? new WebSocketApi().connect() : socket;

  if (btn) {
    btn.addEventListener('click', () => {
      const val = element.querySelector('.chat__input-message').value;
      if (val && newSocket) {
        newSocket.message(val);
      }
      // eslint-disable-next-line no-param-reassign
      element.querySelector('.chat__input-message').value = '';
    });
  }
}
