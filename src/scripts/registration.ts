import { setFormSubmitHandler, setFormValidationHandler } from './setFormSubmitHandler';

function initRegistration(): void {
  const $regForm: HTMLFormElement = document.querySelector('#registration-form');
  setFormSubmitHandler($regForm, '/chat.html');
  setFormValidationHandler($regForm);
}

export default {
  initRegistration,
};
