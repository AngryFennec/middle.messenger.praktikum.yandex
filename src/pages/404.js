import {render as errorRender} from "../components/error";
const tmpl = [
  errorRender({
    statusCode:'404',
  })
].join('');


document.querySelector('#root').innerHTML = tmpl;
