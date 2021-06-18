import { setFormSubmitHandler, setFormValidationHandler } from './setFormSubmitHandler';

function initProfile(): void {
  const $profileForm: HTMLFormElement = document.querySelector('#profile-form');
  setFormSubmitHandler($profileForm, '');
  setFormValidationHandler($profileForm);
}

export default {
  initProfile,
};
