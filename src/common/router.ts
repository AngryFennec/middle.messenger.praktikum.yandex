import Route from './route';

export default class Router {
  private static instance: any;

  public routes: any[];

  public history: History;

  currentRoute: null;

  private rootQuery: string;

  constructor(rootQuery = '#root') {
    if (Router.instance) {
      return Router.instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;
    this.rootQuery = rootQuery;

    Router.instance = this;
  }

  public use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });

    this.routes.push(route);

    return this;
  }

  public start() {
    window.onpopstate = ((event) => {
      this.onRoute(event.currentTarget.location.pathname);
    });

    this.onRoute(window.location.pathname);
  }

  private onRoute(pathname) {
    const route = this.getRoute(pathname) ?? this.getRoute('/404');

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render(route, pathname);
  }

  public go(pathname) {
    this.history.pushState({}, '', pathname);
    this.onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  public getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }
}
