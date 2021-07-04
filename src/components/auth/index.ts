// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './auth.tmpl';
import Block from '../../common/block';
import AuthOptions from './auth.options';

export default class Auth extends Block<AuthOptions> {
  constructor(props: AuthOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    const buttons = this.props.buttons.join('');
    const inputs = this.props.inputs.join('');
    return Handlebars.compile(tmpl, { noEscape: true })({ buttons, inputs });
  }
}
