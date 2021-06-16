export function setFormSubmitHandler(form: HTMLFormElement, link: string): void{
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData: FormData = new FormData(form)

    // так как formData выводится пустой, сделан вывод поэлементно
    for (let entry of Object(formData).entries()) {
      console.log(entry);
    }
    if (link) {
      window.location.href = link;
    }
  });
}
