// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import Handlebars from 'handlebars';
import tmpl from './profile.tmpl';
import Block from '../../common/block';
import ProfileOptions from './profile.options';

export default class Profile extends Block {
  public template: string = tmpl;

  constructor(props: ProfileOptions) {
    super();
    this.props = props;
  }

  public render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}
