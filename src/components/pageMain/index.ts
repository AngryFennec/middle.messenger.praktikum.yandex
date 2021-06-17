// @ts-ignore
import Handlebars from 'handlebars'
import tmpl from './pageMain.tmpl'

export default {
  render: Handlebars.compile(tmpl,{ noEscape: true }),
  template: tmpl,
}