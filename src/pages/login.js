import button from "../components/button";
import auth from "../components/auth";
import input from "../components/input";

const renderButtons = () => {
  return [button.render({
    buttonRoute: 'chat.html',
    buttonClass: 'button--solid auth__btn auth__btn--enter',
    buttonText: 'Войти',
  }),
    button.render({
      buttonRoute: 'registration.html',
      buttonClass: 'button--transparent auth__btn',
      buttonText: 'Зарегистрироваться',
  })
  ].join('');
};

const renderInputs = () => {
  return [
    input.render({
    inputClass: 'auth__input',
    labelText: 'Логин',
    inputType: 'text',
    inputPlaceholder: 'Логин',
    inputName: 'login',
    inputValue: '',
  }),
    input.render({
      inputClass: 'auth__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputPlaceholder: 'Пароль',
      inputName: 'password',
      inputValue: '',
    }),
  ].join('');
}

const authButtons = renderButtons();
const authInputs = renderInputs();

const tmpl = [
  auth.render({
    buttons: authButtons,
    inputs: authInputs,
  }),
].join('');

document.querySelector('#root').innerHTML = tmpl;

