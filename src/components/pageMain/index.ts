// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './pageMain.tmpl';
import Block from '../../common/block';
import PageMainOptions from './pageMain.options';

export default class PageMain extends Block {
  public template: string = tmpl;

  constructor(props: PageMainOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
