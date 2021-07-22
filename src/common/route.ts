import { isEqual, render } from './utils';
import Block from './block';
import { PropsType } from './props-type';

export default class Route {
  private pathname: string;

  private blockClass: string;

  private block: Block<PropsType>;

  private props: PropsType;

  constructor(pathname, view, props) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  public navigate(pathname) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  public match(pathname) {
    return isEqual(pathname, this.pathname);
  }

  public render() {
    if (!this.block) {
      // @ts-ignore
      this.block = new this.blockClass();
      render(this.props.rootQuery, this.block);
    }

    this.block.show();
  }
}
