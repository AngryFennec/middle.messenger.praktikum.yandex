// @ts-ignore
import Handlebars from 'handlebars';
import { expect } from 'chai';
import Block from './block';
import { PropsType } from './props-type';

const tmpl = '<div>{{content}}</div>';

class BlockTest extends Block<PropsType> {
  constructor(props: PropsType) {
    super(props);
    this.props = props;
  }

  render() {
    return Handlebars.compile(tmpl, { noEscape: true })(this.props);
  }
}

describe('Check block', () => {
  const componentTestInst = new BlockTest({ content: 'testing block' });
  const content = componentTestInst.getContent();
  const child = content.querySelector('div');

  it('Render block', () => {
    expect(child?.textContent).to.equal('testing block');
  });
});
