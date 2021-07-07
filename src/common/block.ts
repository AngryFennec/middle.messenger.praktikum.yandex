import EventBus from './event-bus';
import { PropsType } from './props-type';

export default class Block<T extends PropsType> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private blockElement = null;

  private meta = null;

  protected props: T;

  private eventBus: () => EventBus;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(props: T, tagName = 'div') {
    const eventBus = new EventBus();
    this.meta = {
      tagName,
      props,
    };

    this.props = this.makePropsProxy(props);

    this.eventBus = () => eventBus;

    this.registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this.blockComponentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this.blockComponentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this.blockRender.bind(this));
  }

  private createResources() {
    const { tagName } = this.meta;
    this.blockElement = this.createDocumentElement(tagName);
  }

  public init() {
    this.createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private blockComponentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.setHandlers();
  }

  componentDidMount() {}

  private blockComponentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.blockRender();
  }

  // @ts-ignore
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  public setProps(nextProps): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  public get element() {
    return this.blockElement;
  }

  private blockRender() {
    const block = this.render();
    this.blockElement.innerHTML = block;
  }

  private setHandlers() {
    const { handlers } = this.props;
    if (handlers) {
      handlers.forEach((item) => {
        console.log(item);

        item(this.blockElement);
      });
    }
  }

  public render() {}

  getContent() {
    return this.element;
  }

  private makePropsProxy(props) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;

        // Запускаем обновление компоненты
        // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создает сразу несколько блоков
    return document.createElement(tagName);
  }

  public show() {
    this.getContent().style.display = 'block';
  }

  public hide() {
    this.getContent().style.display = 'none';
  }
}
