import Handlebars from 'handlebars'
import tmpl from './error.tmpl.js'

export const render = Handlebars.compile(tmpl,{ noEscape: true })
