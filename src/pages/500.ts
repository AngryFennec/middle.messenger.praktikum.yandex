import ErrorElement from '../components/errorElement';

const tmpl: string = [
  new ErrorElement({
    statusCode: '500',
  }).render(),
].join('');

document.querySelector('#root').innerHTML = tmpl;
