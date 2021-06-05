import aside from "../components/aside";

const tmpl = [
  aside.render({}),
].join('');

document.querySelector('#root').innerHTML = tmpl;
