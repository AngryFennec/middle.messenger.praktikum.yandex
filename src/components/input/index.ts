// @ts-ignore
import Handlebars from 'handlebars'
import tmpl from './input.tmpl'

export default {
  render: Handlebars.compile(tmpl,{ noEscape: true }),
  template: tmpl,
}
