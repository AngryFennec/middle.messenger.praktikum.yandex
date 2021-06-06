const initLogin = () => {
  const $loginForm = document.querySelector('.auth__form-form');
  const $loginSubmit = document.querySelector('.auth__btn--enter');


  $loginSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    const elems = Array.from($loginForm.elements);
    if (elems.filter((item) => item.value).length === elems.length) {
      window.location.href='/chat.html';
      console.log(elems);
    }
  });
}

export default {
  initLogin,
}
