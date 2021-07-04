import { setFormSubmitHandler, setFormValidationHandler } from './setFormSubmitHandler';

export function initProfile(element): void {
  const $profileForm: HTMLFormElement = element.querySelector('#profile-form');
  setFormSubmitHandler($profileForm, '');
  setFormValidationHandler($profileForm);
}

export default {
  initProfile,
};
