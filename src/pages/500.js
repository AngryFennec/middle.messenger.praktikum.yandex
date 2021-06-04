import error from "../components/error";
const tmpl = [
  error.render({
    statusCode:'500',
  })
].join('');

document.querySelector('#root').innerHTML = tmpl;
