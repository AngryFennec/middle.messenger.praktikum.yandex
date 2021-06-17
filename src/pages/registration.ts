import registration from '../components/registration';
import input from '../components/input';
import registrationEvent from '../scripts/registration';
import Button from '../components/button';

function renderButtons(): string {
  return [new Button({
    buttonClass: 'button--solid registration__btn registration__btn--enter',
    buttonText: 'Зарегистрироваться',
    buttonType: 'submit',
  }).render(),
  new Button({
    buttonRoute: 'index.html',
    buttonClass: 'button--transparent registration__btn',
    buttonText: 'Уже есть аккаунт?',
    link: true,
  }).render(),
  ].join('');
}

function renderInputs(): string {
  return [
    input.render({
      inputClass: 'registration__input',
      labelText: 'Логин',
      inputType: 'text',
      inputPlaceholder: 'Логин',
      inputName: 'login',
      inputValue: '',
    }),
    input.render({
      inputClass: 'registration__input',
      labelText: 'Почта',
      inputType: 'email',
      inputPlaceholder: 'Почта',
      inputName: 'email',
      inputValue: '',
    }),
    input.render({
      inputClass: 'registration__input',
      labelText: 'Телефон',
      inputType: 'tel',
      inputPlaceholder: 'Телефон',
      inputName: 'phone',
      inputValue: '',
    }),
    input.render({
      inputClass: 'registration__input',
      labelText: 'Имя',
      inputType: 'text',
      inputPlaceholder: 'Имя',
      inputName: 'first_name',
      inputValue: '',
    }),
    input.render({
      inputClass: 'registration__input',
      labelText: 'Фамилия',
      inputType: 'text',
      inputPlaceholder: 'Фамилия',
      inputName: 'second_name',
      inputValue: '',
    }),
    input.render({
      inputClass: 'registration__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputName: 'password',
      inputPlaceholder: 'Пароль',
      inputValue: '',
    }),
    input.render({
      inputClass: 'registration__input',
      labelText: 'Пароль еще раз',
      inputType: 'password',
      inputName: 'password',
      inputPlaceholder: 'Пароль еще раз',
      inputValue: '',
    }),
  ].join('');
}

const registrationButtons = renderButtons();
const registrationInputs = renderInputs();

const tmpl: string = [
  registration.render({
    buttons: registrationButtons,
    inputs: registrationInputs,
  }),
].join('');

document.querySelector('#root').innerHTML = tmpl;
registrationEvent.initRegistration();
