import { setFormSubmitHandler, setFormValidationHandler } from './setFormSubmitHandler';

export function initRegistration(element): void {
  const $regForm: HTMLFormElement = element.querySelector('#registration-form');
  setFormSubmitHandler($regForm, '/chat', 'signup');
  setFormValidationHandler($regForm);
}

export default {
  initRegistration,
};
