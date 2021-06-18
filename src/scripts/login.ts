import { setFormSubmitHandler, setFormValidationHandler } from './setFormSubmitHandler';

function initLogin(): void {
  const $loginForm: HTMLFormElement = document.querySelector('#auth-form');
  setFormSubmitHandler($loginForm, '/chat.html');
  setFormValidationHandler($loginForm);
}

export default {
  initLogin,
};
