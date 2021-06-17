import Button from '../components/button';
import input from '../components/input';
import Auth from '../components/auth';

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

const tmpl: string = [
  new Auth({
    buttons: authButtons,
    inputs: authInputs,
  }).render(),
].join('');

document.querySelector('#root').innerHTML = tmpl;
