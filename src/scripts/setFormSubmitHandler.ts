import { ValidationType } from '../components/input/input.types';
import AuthController from '../controllers/auth-controller';
import UserController from '../controllers/user-controller';
import { UserProfileData } from '../controllers/controllers.types';

const EMAIL_REGEXP: RegExp = /^[^\s@]+@[^\s@]+$/;
const PHONE_REGEXP: RegExp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
const PASSWORD_REGEXP: RegExp = /^[A-Za-z0-9!_.-]{8,12}$/;

function checkValid(currentInput: HTMLInputElement): boolean {
  let isValid: boolean;
  switch (currentInput.dataset.validation) {
    case ValidationType.name:
      isValid = currentInput.value.length > 1;
      break;
    case ValidationType.password:
      isValid = currentInput.value.search(PASSWORD_REGEXP) !== -1;
      break;
    case ValidationType.email:
      isValid = currentInput.value.search(EMAIL_REGEXP) !== -1;
      break;
    case ValidationType.phone:
      isValid = currentInput.value.search(PHONE_REGEXP) !== -1;
      break;
    default:
      isValid = true;
  }

  if (!isValid) {
    currentInput.classList.add('input--invalid');
  }

  return isValid;
}

function validateInput(evt: Event): void {
  const currentInput = evt.target as HTMLInputElement;
  checkValid(currentInput);
}

function removeInvalid(evt: Event): void {
  const currentElement = evt.target as HTMLElement;
  if (currentElement.classList.contains('input--invalid')) {
    currentElement.classList.remove('input--invalid');
  }
}

export function setFormValidationHandler(form: HTMLFormElement): void {
  form.addEventListener('focusout', validateInput);
  const formTextInputs = Array.from(form.querySelectorAll('input[type=text], input[type=password], input[type=tel], input[type=email]'));
  formTextInputs.forEach((input) => input.addEventListener('blur', removeInvalid));
}

export function convertFormData(formData: FormData): JSON {
  const object:Record<string, any> = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  return JSON.parse(JSON.stringify(object));
}

export function setFormSubmitHandler(form: HTMLFormElement, link: string, type?: string): void {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData: FormData = new FormData(form);

    const formTextInputs = Array.from(form.querySelectorAll('input[type=text], input[type=password], input[type=tel], input[type=email]'));
    let isAnyInvalid = false;
    formTextInputs.forEach((input) => {
      if (!checkValid(input as HTMLInputElement)) {
        isAnyInvalid = true;
      }
    });

    if (link && !isAnyInvalid) {
      if (type === 'signin') {
        new AuthController().signUserIn(convertFormData(formData), link);
        return;
      }
      if (type === 'signup') {
        new AuthController().signUserUp(convertFormData(formData), link);
        return;
      }
    }

    if (!isAnyInvalid && type === 'profile') {
      const converted = convertFormData(formData);
      new UserController().changeUserProfileFields(converted as UserProfileData, formData, form.querySelector('#avatarField'));
    }
  });
}
