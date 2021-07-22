import Button from '../components/button';
import Auth from '../components/auth';
import Input from '../components/input';
import { ValidationType } from '../components/input/input.types';
import Block from '../common/block';
import { PropsType } from '../common/props-type';
import { initLogin } from '../scripts/login';
import { setLink } from '../scripts/link';

export default class Login extends Block<PropsType> {
  constructor() {
    // @ts-ignore
    super({
      components: new Auth({
        buttons: [
          new Button({
            buttonClass: 'button--solid auth__btn auth__btn--enter',
            buttonText: 'Войти',
            buttonType: 'submit',
          }).render(),
          new Button({
            buttonRoute: '/registration',
            buttonClass: 'button--transparent auth__btn auth__btn--register',
            buttonText: 'Зарегистрироваться',
            link: true,
          }).render(),
        ],
        inputs: [
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
        ],
      }),
      handlers: [initLogin, (element) => setLink(element, '/registration', '.auth__btn--register')],
    },
    'div');
  }

  public render() {
    const { components } = this.props;
    return components.render();
  }
}
