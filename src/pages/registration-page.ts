import { initRegistration } from '../scripts/registration';
import Button from '../components/button';
import Input from '../components/input';
import Registration from '../components/registration';
import { ValidationType } from '../components/input/input.types';
import Block from '../common/block';
import { PropsType } from '../common/props-type';

export default class RegistrationPage extends Block<PropsType> {
  constructor() {
    super({
      components: new Registration({
        buttons: [new Button({
          buttonClass: 'button--solid registration__btn registration__btn--enter',
          buttonText: 'Зарегистрироваться',
          buttonType: 'submit',
        }).render(),
        new Button({
          buttonRoute: '/',
          buttonClass: 'button--transparent registration__btn',
          buttonText: 'Уже есть аккаунт?',
          link: true,
        }).render(),

        ],
        inputs: [
          new Input({
            inputClass: 'registration__input',
            labelText: 'Логин',
            inputType: 'text',
            inputPlaceholder: 'Логин',
            inputName: 'login',
            inputValue: '',
            validation: ValidationType.name,
          }).render(),
          new Input({
            inputClass: 'registration__input',
            labelText: 'Почта',
            inputType: 'email',
            inputPlaceholder: 'Почта',
            inputName: 'email',
            inputValue: '',
            validation: ValidationType.email,
          }).render(),
          new Input({
            inputClass: 'registration__input',
            labelText: 'Телефон',
            inputType: 'tel',
            inputPlaceholder: 'Телефон',
            inputName: 'phone',
            inputValue: '',
            validation: ValidationType.phone,
          }).render(),
          new Input({
            inputClass: 'registration__input',
            labelText: 'Имя',
            inputType: 'text',
            inputPlaceholder: 'Имя',
            inputName: 'first_name',
            inputValue: '',
            validation: ValidationType.name,
          }).render(),
          new Input({
            inputClass: 'registration__input',
            labelText: 'Фамилия',
            inputType: 'text',
            inputPlaceholder: 'Фамилия',
            inputName: 'second_name',
            inputValue: '',
            validation: ValidationType.name,
          }).render(),
          new Input({
            inputClass: 'registration__input',
            labelText: 'Пароль',
            inputType: 'password',
            inputName: 'password',
            inputPlaceholder: 'Пароль',
            inputValue: '',
            validation: ValidationType.password,
          }).render(),
          new Input({
            inputClass: 'registration__input',
            labelText: 'Пароль еще раз',
            inputType: 'password',
            inputName: 'password',
            inputPlaceholder: 'Пароль еще раз',
            inputValue: '',
            validation: ValidationType.password,
          }).render(),
        ],
      }),
      handlers: [initRegistration],
    });
  }

  public render() {
    const { components } = this.props;
    return components.render();
  }
}
