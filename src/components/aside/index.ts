// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './aside.tmpl';
import Block from '../../common/block';
import AsideOptions from './aside.options';

export default class Aside extends Block<AsideOptions> {
  public template: string = tmpl;

  constructor(props: AsideOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
