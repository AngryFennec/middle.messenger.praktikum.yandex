// @ts-ignore
import Handlebars from 'handlebars';
import tmpl from './auth.tmpl';
import Block from '../../common/block';
import AuthOptions from './auth.options';

export default class Auth extends Block {
  public template: string = tmpl;

  constructor(props: AuthOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
