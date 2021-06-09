import Handlebars from 'handlebars'
import tmpl from './chatMessage.tmpl.js'

export default {
  render: Handlebars.compile(tmpl,{ noEscape: true }),
  template: tmpl,
}
