import { eventsTable } from '@/controllers/events-table'
import { customers } from '@/controllers/events'

export const deleteCustomer = function (customerId, callback) {
  window[Symbol.for('vue.prototype')].$sendMessageToWorker({
    route: 'customers',
    action: 'delete',
    key: customerId
  })

  eventsTable[customers.delete] = callback
}
