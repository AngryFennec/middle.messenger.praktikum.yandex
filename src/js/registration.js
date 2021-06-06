const initRegistration = () => {
  const $regForm = document.querySelector('.registration__form-form');
  const $regSubmit = document.querySelector('.registration__btn--enter');


  $regSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    const elems = Array.from($regForm.elements);
    if (elems.filter((item) => item.value).length === elems.length) {
      window.location.href = '/chat.html';
      console.log(elems);
    }
  });
};

export default {
  initRegistration,
};
