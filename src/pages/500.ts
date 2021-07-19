import ErrorElement from '../components/errorElement';
import Block from '../common/block';
import { PropsType } from '../common/props-type';
import '../style.scss';

export default class Page500 extends Block<PropsType> {
  constructor() {
    super({
      components: new ErrorElement({
        statusCode: '500',
      }).render(),
    },
    'div');
  }

  public render() {
    const { components } = this.props;
    return components;
  }
}
