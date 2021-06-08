import {setFormSubmitHandler} from "./setFormSubmitHandler";

const initLogin = () => {
  const $loginForm = document.querySelector('#auth-form');
  setFormSubmitHandler($loginForm, '/chat.html')
};

export default {
  initLogin,
}
