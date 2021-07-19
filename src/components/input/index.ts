// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './input.tmpl';
import Block from '../../common/block';
import InputOptions from './input.options';

export default class Input extends Block<InputOptions> {
  constructor(props: InputOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
