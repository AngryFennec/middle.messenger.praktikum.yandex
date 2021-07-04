// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatBoardWrapper.tmpl';
import Block from '../../common/block';
import ChatBoardWrapperOptions from './chatBoardWrapper.options';

export default class ChatBoardWrapper extends Block<ChatBoardWrapperOptions> {
  public template: string = tmpl;

  constructor(props: ChatBoardWrapperOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
