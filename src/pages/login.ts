import Button from '../components/button';
import Auth from '../components/auth';
import Input from '../components/input';
import { ValidationType } from '../components/input/input.types';

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
      validation: ValidationType.name,
    }).render(),
    new Input({
      inputClass: 'auth__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputPlaceholder: 'Пароль',
      inputName: 'password',
      inputValue: '',
      validation: ValidationType.password,
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
