import error from '../components/error';

const tmpl: string = [
  error.render({
    statusCode: '500',
  }),
].join('');

document.querySelector('#root').innerHTML = tmpl;
