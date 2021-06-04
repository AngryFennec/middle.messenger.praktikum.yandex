import Handlebars from 'handlebars'
import tmpl from './auth.tmpl.js'

export default {
  render: Handlebars.compile(tmpl,{ noEscape: true }),
  template: tmpl,
}
