// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatList.tmpl';
import Block from '../../common/block';
import ChatListOptions from './chatList.options';

export default class ChatList extends Block {
  public template: string = tmpl;

  constructor(props: ChatListOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
