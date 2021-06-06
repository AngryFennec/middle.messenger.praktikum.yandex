const initProfile = () => {
  const $profileForm = document.querySelector('.profile__form');
  const $profileSubmit = document.querySelector('.profile__btn');


  $profileSubmit.addEventListener('click', (evt) => {
    evt.preventDefault();
    const elems = Array.from($profileForm.elements);
    console.log(elems.map((item) => item.value));
  });
};

export default {
  initProfile,
};
