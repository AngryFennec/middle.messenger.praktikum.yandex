// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './registration.tmpl';
import Block from '../../common/block';
import RegistrationOptions from './registration.options';

export default class Registration extends Block<RegistrationOptions> {
  constructor(props: RegistrationOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    const buttons = this.props.buttons.join('');
    const inputs = this.props.inputs.join('');
    return Handlebars.compile(tmpl, { noEscape: true })({ buttons, inputs });
  }
}
