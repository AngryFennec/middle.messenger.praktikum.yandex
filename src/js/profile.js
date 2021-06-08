import {setFormSubmitHandler} from "./setFormSubmitHandler";

const initProfile = () => {
  const $profileForm = document.querySelector('#profile-form');
  console.log($profileForm);
  setFormSubmitHandler($profileForm, '');
};

export default {
  initProfile,
};
