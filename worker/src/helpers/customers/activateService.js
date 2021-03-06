import { statisticsController } from '../../controllers'

const { invalidServiceDeliveryStatusRequest } = require('../error-handlers').default

const [route, action, serviceStatus] = ['customers', 'activate', 'Awaiting for connection']

export const activateService = async function (customerId, serviceId) {
  if (!customerId || !serviceId) return invalidServiceDeliveryStatusRequest(customerId, serviceId)

  const { status, result } = await self.controller.updateServiceStatus(customerId, serviceId, serviceStatus)

  statisticsController.patch(serviceId, customerId, serviceStatus, Date.now())

  return {
    status,
    route,
    action,
    result,
    message: true,
    messageType: 'Customer service delivery',
    messageText: 'Service activation request has been sent.'
  }
}
