// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatMessage.tmpl';
import Block from '../../common/block';
import ChatMessageOptions from './chatMessage.options';

export default class ChatMessage extends Block {
  public template: string = tmpl;

  constructor(props: ChatMessageOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
