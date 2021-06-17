import error from '../components/error';

const tmpl: string = [
  error.render({
    statusCode: '404',
  }),
].join('');

document.querySelector('#root').innerHTML = tmpl;
