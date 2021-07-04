// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatListWrapper.tmpl';
import Block from '../../common/block';
import ChatListWrapperOptions from './chatListWrapper.options';

export default class ChatListWrapper extends Block<ChatListWrapperOptions> {
  constructor(props: ChatListWrapperOptions) {
    super(props);
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
