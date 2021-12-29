const {
  settingsController,
  dashboardController,
  cryptoController,
  customersController,
  servicesController,
  ticketsController,
  rspController,
  statisticsController
} = require('../controllers')

export const routes = {
  dashboard: {
    info: dashboardController.getCustomersServicesInfo,
    'refresh-messages': dashboardController.refreshMessages,
    'get-messages': dashboardController.getMessages
  },

  rsp: {
    credentials: rspController.credentials,
    password: rspController.passwordChange,
    refresh: rspController.refresh,
    get: rspController.get,
    put: rspController.update
  },

  customers: {
    refresh: customersController.getFromRemote,
    list: customersController.getAllCustomers,
    table: customersController.getCustomersListForTable,
    short: customersController.getCustomersListForTicket,
    'awaiting-for-connection': customersController.getAwaitingForConnection,
    'filtered-short-list': customersController.getFilteredShortListOfCustomers,
    get: customersController.getCustomer,
    post: customersController.createCustomer,
    delete: customersController.deleteCustomer,
    put: customersController.updateCustomer,

    assign: customersController.assignNewService,
    activate: customersController.activateService,
    status: customersController.updateServiceStatus,
    services: customersController.updateCustomerServices,

    scheduling: customersController.scheduling
    // info: customersController.getActiveServicesInfo
  },

  crypto: {
    init: cryptoController.init,
    encrypt: cryptoController.encrypt,
    decrypt: cryptoController.decrypt
  },

  services: {
    refresh: servicesController.refresh,
    list: servicesController.list,
    get: servicesController.get,
    sla: servicesController.getSLAContent,
    active: servicesController.getActiveConnections,
    pending: servicesController.getPendingConnections
  },

  schedule: {
    get: servicesController.getFreeLotsForSchedule
  },

  tickets: {
    refresh: ticketsController.refresh,
    list: ticketsController.list,
    get: ticketsController.get,
    post: ticketsController.post,
    put: ticketsController.put,
    patch: ticketsController.patch,
    history: ticketsController.updateHistory,
    number: ticketsController.getNumber
  },

  categories: {
    get: ticketsController.getCategories
  },

  lots: {
    get: customersController.getScheduleLots
  },

  settings: {
    refresh: settingsController.refresh,
    get: settingsController.get,
    esdt: settingsController.getEstimatedServiceDeliveryTime,
    tc: settingsController.getTicketCategories
  },

  statistics: {
    get: statisticsController.getStatistics
  }
}
