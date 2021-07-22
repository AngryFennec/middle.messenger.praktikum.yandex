import Router from '../common/router';

export function setLink(element, path, className = '.button') {
  const link = element.querySelector(className);
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    new Router().go(path);
  });
}
