import registrationEvent from '../scripts/registration';
import Button from '../components/button';
import Input from '../components/input';
import Registration from '../components/registration';

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
    new Input({
      inputClass: 'registration__input',
      labelText: 'Логин',
      inputType: 'text',
      inputPlaceholder: 'Логин',
      inputName: 'login',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'registration__input',
      labelText: 'Почта',
      inputType: 'email',
      inputPlaceholder: 'Почта',
      inputName: 'email',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'registration__input',
      labelText: 'Телефон',
      inputType: 'tel',
      inputPlaceholder: 'Телефон',
      inputName: 'phone',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'registration__input',
      labelText: 'Имя',
      inputType: 'text',
      inputPlaceholder: 'Имя',
      inputName: 'first_name',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'registration__input',
      labelText: 'Фамилия',
      inputType: 'text',
      inputPlaceholder: 'Фамилия',
      inputName: 'second_name',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'registration__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputName: 'password',
      inputPlaceholder: 'Пароль',
      inputValue: '',
    }).render(),
    new Input({
      inputClass: 'registration__input',
      labelText: 'Пароль еще раз',
      inputType: 'password',
      inputName: 'password',
      inputPlaceholder: 'Пароль еще раз',
      inputValue: '',
    }).render(),
  ].join('');
}

const registrationButtons = renderButtons();
const registrationInputs = renderInputs();

const tmpl: string = [
  new Registration({
    buttons: registrationButtons,
    inputs: registrationInputs,
  }).render(),
].join('');

document.querySelector('#root').innerHTML = tmpl;
registrationEvent.initRegistration();
