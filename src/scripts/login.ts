import { setFormSubmitHandler, setFormValidationHandler } from './setFormSubmitHandler';

export function initLogin(element): void {
  const $loginForm: HTMLFormElement = element.querySelector('#auth-form');
  setFormSubmitHandler($loginForm, '/chat');
  setFormValidationHandler($loginForm);
}

export default {
  initLogin,
};
