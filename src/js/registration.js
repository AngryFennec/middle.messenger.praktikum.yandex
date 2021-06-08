import {setFormSubmitHandler} from "./setFormSubmitHandler";

const initRegistration = () => {
  const $regForm = document.querySelector('#registration-form');
  setFormSubmitHandler($regForm, '/chat.html')
};


export default {
  initRegistration,
};
