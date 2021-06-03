export const sendServiceActivationRequest = function (customerId, serviceId) {
  window[Symbol.for('vue.instance')].$root.$emit('progress-event', true)
  window[Symbol.for('vue.prototype')].sendMessageToWorker({
    route: 'customers',
    action: 'activate',
    customerId,
    serviceId
  })
}
