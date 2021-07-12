import { isEqual, render } from './utils';

export default class Route {
  private pathname: any;

  private blockClass: any;

  private block: any;

  private props: any;

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
      // eslint-disable-next-line new-cap
      this.block = new this.blockClass();
      console.log('route block', this.block);
      render(this.props.rootQuery, this.block);
      return;
    }

    this.block.show();
  }
}
