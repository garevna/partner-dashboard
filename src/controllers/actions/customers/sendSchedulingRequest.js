export const sendSchedulingRequest = function (data) {
  console.log(data)
  window[Symbol.for('vue.instance')].$root.$emit('progress-event', true)
  window[Symbol.for('vue.prototype')].sendMessageToWorker({
    route: 'customers',
    action: 'scheduling',
    data
  })
}