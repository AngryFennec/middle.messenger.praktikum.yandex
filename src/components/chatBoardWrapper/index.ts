// @ts-ignore
import Handlebars from 'handlebars'
import tmpl from './chatBoardWrapper.tmpl'

export default {
  render: Handlebars.compile(tmpl,{ noEscape: true }),
  template: tmpl,
}
