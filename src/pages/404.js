import error from "../components/error";
const tmpl = [
  error.render({
    statusCode:'404',
  })
].join('');

document.querySelector('#root').innerHTML = tmpl;
