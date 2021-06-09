export const setFormSubmitHandler = (form, link) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(form)

    // так как formData выводится пустой, сделан вывод поэлементно
    for (let entry of formData.entries()) {
      console.log(entry);
    }
    if (link) {
      window.location.href = link;
    }
  });
}
