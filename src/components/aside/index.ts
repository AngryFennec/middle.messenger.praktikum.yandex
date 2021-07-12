// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './aside.tmpl';
import Block from '../../common/block';
import AsideOptions from './aside.options';
import { setLink } from '../../scripts/link';

export default class Aside extends Block<AsideOptions> {
  constructor(props: AsideOptions) {
    super({
      ...props,
      handlers: [(element) => setLink(element, '/', '.aside__list-btn')],
    });
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
