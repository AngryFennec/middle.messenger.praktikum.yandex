import Router from './common/router';
import Login from './pages/login';
import Page404 from './pages/404';
import Page500 from './pages/500';
import RegistrationPage from './pages/registration-page';
import ProfilePage from './pages/profile-page';
import ChatPage from './pages/chat-page';

const router = new Router('#root');

router
  .use('/', Login)
  .use('/404', Page404)
  .use('/500', Page500)
  .use('/registration', RegistrationPage)
  .use('/profile', ProfilePage)
  .use('/chat', ChatPage)
  .use('/index.html', Login)
  .start();
