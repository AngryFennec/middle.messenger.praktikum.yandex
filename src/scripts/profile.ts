import {setFormSubmitHandler} from "./setFormSubmitHandler";

function initProfile(): void {
  const $profileForm: HTMLFormElement = document.querySelector('#profile-form');
  console.log($profileForm);
  setFormSubmitHandler($profileForm, '');
};

export default {
  initProfile,
};
