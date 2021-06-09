import Handlebars from 'handlebars'
import tmpl from './aside.tmpl.js'

export default {
  render: Handlebars.compile(tmpl,{ noEscape: true }),
  template: tmpl,
}
