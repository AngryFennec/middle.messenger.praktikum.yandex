import {setFormSubmitHandler} from "./setFormSubmitHandler";

function initLogin(): void {
  const $loginForm: HTMLFormElement = document.querySelector('#auth-form');
  setFormSubmitHandler($loginForm, '/chat.html')
};

export default {
  initLogin,
}
