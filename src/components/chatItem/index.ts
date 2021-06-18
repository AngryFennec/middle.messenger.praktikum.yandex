// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './chatItem.tmpl';
import Block from '../../common/block';
import ChatItemOptions from './chatItem.options';

export default class ChatItem extends Block {
  public template: string = tmpl;

  constructor(props: ChatItemOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
