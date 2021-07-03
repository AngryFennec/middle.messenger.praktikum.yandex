// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './input.tmpl';
import Block from '../../common/block';
import InputOptions from './input.options';

export default class Input extends Block {
  public template: string = tmpl;

  constructor(props: InputOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
