import { expect } from 'chai';

import Router from './router';
import Login from '../pages/login';
import Page404 from '../pages/404';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(
  `<html>
         <body>
             <div id="root"></div>
         </body>
       </html>`,
  { url: 'http://localhost' },
  { runScripts: 'dangerously' },
);

global.document = dom.window.document;
global.window = dom.window;
global.DOMParser = window.DOMParser;

const router = new Router('#root');
router
  .use('/', Login)
  .use('/404', Page404)

  .start();

describe('Check router', () => {
  it('Switch page', () => {
    router.go('/404');
    expect(router.currentRoute.pathname).to.equal('/404');
  });
});
