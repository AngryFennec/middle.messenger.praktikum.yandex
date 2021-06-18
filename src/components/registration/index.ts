// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './registration.tmpl';
import Block from '../../common/block';
import RegistrationOptions from './registration.options';

export default class Registration extends Block {
  public template: string = tmpl;

  constructor(props: RegistrationOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
