// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './errorElement.tmpl';
import Block from '../../common/block';
import ErrorElementOptions from './errorElement.options';
import { setLink } from '../../scripts/link';

export default class ErrorElement extends Block<ErrorElementOptions> {
  constructor(props: ErrorElementOptions) {
    super({
      ...props,
      handlers: [(element) => setLink(element, '/', '.link')],
    });
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
