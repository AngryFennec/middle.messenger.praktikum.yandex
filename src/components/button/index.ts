// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './button.tmpl';
import Block from '../../common/block';
import ButtonOptions from './button.options';
import { setLink } from '../../scripts/link';

export default class Button extends Block<ButtonOptions> {
  constructor(props: ButtonOptions) {
    super({
      ...props,
      handlers: props.link ? [(element) => setLink(element, props.buttonRoute)] : [() => {}],
    });
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
