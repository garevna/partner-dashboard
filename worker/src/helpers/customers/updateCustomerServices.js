import { getRecordByKey, putRecordByKey } from '../db'

import { put } from '../AJAX'

import {
  getCustomerDataError,
  putCustomerDataError
} from '../error-handlers'

export const updateCustomerServices = async function (id, data) {
  const [route, action] = ['customers', 'services']

  self.postMessage({ status: 300, request: { key: id, data } })

  const { status: getStatus, result: getResult } = await getRecordByKey('customers', id)

  if (getStatus !== 200) return getCustomerDataError(getStatus)

  self.postMessage({ status: 300, getCustomerResult: getResult })

  const response = Object.assign({}, getResult, { services: data })

  self.postMessage({ status: 300, dataToBeSaved: response })

  const { status: putStatus } = await putRecordByKey('customers', id, response)

  if (putStatus !== 200) return putCustomerDataError(putStatus)

  const { status, result } = await put(`customer/${id}`, response)

  self.postMessage({ status: 300, putToRemoteServerResponse: result })

  if (status !== 200) return putCustomerDataError(status, result)

  const customer = result.data

  if (customer.services.length) {
    const { status: serviceStatus, result: service } = await getRecordByKey('services', customer.services[0].id)
    if (serviceStatus === 200) {
      Object.assign(customer, {
        serviceSpeed: `${service.upstreamSpeed}/${service.downstreamSpeed}`,
        serviceStatus: customer.services[0].status,
        servicePlan: service.subscriptionFee,
        serviceTerm: service.contractTerm
      })
    }
  }

  return {
    status,
    route,
    action,
    result: customer,
    message: true,
    messageType: 'Customer services',
    messageText: 'Customer services were successfully updated'
  }
}