import button from "../components/button";
import auth from "../components/auth";
import input from "../components/input";

const renderButtons = () => {
  return [button.render({
    buttonRoute: 'chatBoard.html',
    buttonClass: 'auth__btn button--solid',
    buttonText: 'Войти',
  }),
    button.render({
      buttonRoute: 'registration.html',
      buttonClass: 'auth__btn button--transparent',
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
    inputValue: '',
  }),
    input.render({
      inputClass: 'auth__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputPlaceholder: 'Пароль',
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
