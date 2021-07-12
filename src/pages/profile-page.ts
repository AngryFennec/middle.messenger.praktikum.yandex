import { initProfile } from '../scripts/profile';
import Button from '../components/button';
import Aside from '../components/aside';
import Input from '../components/input';
import PageMain from '../components/pageMain';
import Profile from '../components/profile';
import { ValidationType } from '../components/input/input.types';
import { PropsType } from '../common/props-type';
import Block from '../common/block';

export default class ProfilePage extends Block<PropsType> {
  constructor() {
    super({
      components: new PageMain({
        wrapperClass: 'page-main__wrapper--horizontal',
        content: [
          new Aside({
            isActiveProfile: true,
            isActiveChat: false,
          }).render(),
          new Profile({
            buttons: [
              new Button({
                buttonType: 'submit',
                buttonClass: 'button--solid profile__btn',
                buttonText: 'Сохранить',
              }).render(),
            ],
            inputs: [
              new Input({
                inputClass: 'profile__input',
                labelText: 'Логин',
                inputType: 'text',
                inputPlaceholder: 'Логин',
                inputName: 'login',
                inputValue: 'IvanIvanov',
                validation: ValidationType.name,
              }).render(),
              new Input({
                inputClass: 'profile__input',
                labelText: 'Почта',
                inputType: 'email',
                inputPlaceholder: 'Почта',
                inputName: 'email',
                inputValue: 'ivan@iv.an',
                validation: ValidationType.email,
              }).render(),
              new Input({
                inputClass: 'profile__input',
                labelText: 'Телефон',
                inputType: 'tel',
                inputPlaceholder: 'Телефон',
                inputName: 'phone',
                inputValue: '+79033030303',
                validation: ValidationType.phone,
              }).render(),
              new Input({
                inputClass: 'profile__input',
                labelText: 'Имя',
                inputType: 'text',
                inputPlaceholder: 'Имя',
                inputName: 'first_name',
                inputValue: 'Иван',
                validation: ValidationType.name,
              }).render(),
              new Input({
                inputClass: 'profile__input',
                labelText: 'Фамилия',
                inputType: 'text',
                inputPlaceholder: 'Фамилия',
                inputName: 'second_name',
                inputValue: 'Иванов',
                validation: ValidationType.name,
              }).render(),
              new Input({
                inputClass: 'profile__input',
                labelText: 'Имя в чате',
                inputType: 'text',
                inputPlaceholder: 'Имя',
                inputName: 'display_name',
                inputValue: 'Иван',
                validation: ValidationType.name,
              }).render(),
              new Input({
                inputClass: 'profile__input',
                labelText: 'Пароль',
                inputType: 'password',
                inputName: 'newPassword',
                inputPlaceholder: 'Пароль',
                inputValue: 'ssssss',
                validation: ValidationType.password,
              }).render(),
            ].join(''),
          }).render(),

        ].join(''),
      }),
      handlers: [initProfile],
    });
  }

  public render() {
    const { components } = this.props;
    return components.render();
  }
}
