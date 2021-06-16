import {setFormSubmitHandler} from "./setFormSubmitHandler";

function initRegistration(): void {
  const $regForm: HTMLFormElement = document.querySelector('#registration-form');
  setFormSubmitHandler($regForm, '/chat.html')
};


export default {
  initRegistration,
};
