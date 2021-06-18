import Button from '../components/button';
import Auth from '../components/auth';
import Input from '../components/input';

function renderButtons(): string {
  return [
    new Button({
      buttonClass: 'button--solid auth__btn auth__btn--enter',
      buttonText: 'Войти',
      buttonType: 'submit',
    }).render(),
    new Button({
      buttonRoute: 'registration.html',
      buttonClass: 'button--transparent auth__btn',
      buttonText: 'Зарегистрироваться',
      link: true,
    }).render(),
  ].join('');
}

function renderInputs(): string {
  return [
    new Input({
      inputClass: 'auth__input',
      labelText: 'Логин',
      inputType: 'text',
      inputPlaceholder: 'Логин',
      inputName: 'login',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'auth__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputPlaceholder: 'Пароль',
      inputName: 'password',
      inputValue: '',
    }).render(),
  ].join('');
}

const authButtons = renderButtons();
const authInputs = renderInputs();

const tmpl: string = [
  new Auth({
    buttons: authButtons,
    inputs: authInputs,
  }).render(),
].join('');

document.querySelector('#root').innerHTML = tmpl;
