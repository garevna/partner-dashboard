import Vue from 'vue'

import { createController } from './controllers/createController'

import {
  createMapWorker,
  createRspWorker
} from './controllers'

import configPlugin from '../config'
Vue.use(configPlugin)

if (window.performance) {
  console.info('window.performance OK')
}

const sourceOrigin = process.env.NODE_ENV === 'production' ? 'https://portal.dgtek.net' : 'http://192.168.0.102:8081/'

window.opener.postMessage('ready', sourceOrigin)

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  location.href = 'https://portal.dgtek.net'
}

window[Symbol.for('vue.prototype')] = Vue.prototype

window[Symbol.for('vue.prototype')].$refreshed = {
  rsp: false,
  customers: false,
  tickets: false,
  services: false
}

createMapWorker()
createRspWorker()

createController()

export default Vue
