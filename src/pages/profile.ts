import pageMain from "../components/pageMain";
import input from "../components/input";
import button from "../components/button";
import profile from "../components/profile";
import aside from "../components/aside";
import profileEvent from "../scripts/profile";


function renderInputs(): string {
  return [
    input.render({
      inputClass: 'profile__input',
      labelText: 'Логин',
      inputType: 'text',
      inputPlaceholder: 'Логин',
      inputName: 'login',
      inputValue: 'IvanIvanov',
    }),
    input.render({
      inputClass: 'profile__input',
      labelText: 'Почта',
      inputType: 'email',
      inputPlaceholder: 'Почта',
      inputName: 'email',
      inputValue: 'ivan@iv.an',
    }),
    input.render({
      inputClass: 'profile__input',
      labelText: 'Телефон',
      inputType: 'tel',
      inputPlaceholder: 'Телефон',
      inputName: 'phone',
      inputValue: '+79033030303',
    }),
    input.render({
      inputClass: 'profile__input',
      labelText: 'Имя',
      inputType: 'text',
      inputPlaceholder: 'Имя',
      inputName: 'first_name',
      inputValue: 'Иван',
    }),
    input.render({
      inputClass: 'profile__input',
      labelText: 'Фамилия',
      inputType: 'text',
      inputPlaceholder: 'Фамилия',
      inputName: 'second_name',
      inputValue: 'Иванов',
    }),
    input.render({
      inputClass: 'profile__input',
      labelText: 'Имя в чате',
      inputType: 'text',
      inputPlaceholder: 'Имя',
      inputName: 'display_name',
      inputValue: 'Иван',
    }),
    input.render({
      inputClass: 'profile__input',
      labelText: 'Пароль',
      inputType: 'password',
      inputName: 'newPassword',
      inputPlaceholder: 'Пароль',
      inputValue: '*******',
    }),

  ].join('');
}

const inputsContent: string = renderInputs();
const buttonContent: string = button.render({
  buttonType: 'submit',
  buttonClass: 'button--solid profile__btn',
  buttonText: 'Сохранить',
});

const profileContent: string = [
  aside.render({
    isActiveProfile: true,
    isActiveChat: false,
  }),
  profile.render({
    button: buttonContent,
    inputs: inputsContent,
  })
  ].join('');

const tmpl: string = [
  pageMain.render({
    wrapperClass: 'page-main__wrapper--horizontal',
    content: profileContent,
  })
].join('');

document.querySelector('#root').innerHTML = tmpl;
profileEvent.initProfile();
