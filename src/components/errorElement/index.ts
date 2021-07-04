// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './errorElement.tmpl';
import Block from '../../common/block';
import ErrorElementOptions from './errorElement.options';

export default class ErrorElement extends Block<ErrorElementOptions> {
  public template: string = tmpl;

  constructor(props: ErrorElementOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
