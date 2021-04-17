const {
  cryptoController,
  customersController,
  servicesController,
  ticketsController,
  rspController
} = require('../controllers')

export const routes = {
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
    get: customersController.getCustomer,
    post: customersController.addNewCustomer,
    delete: customersController.deleteCustomer,
    put: customersController.updateCustomer
  },
  crypto: {
    init: cryptoController.init,
    encrypt: cryptoController.encrypt,
    decrypt: cryptoController.decrypt
  },
  services: {
    refresh: servicesController.refresh,
    get: servicesController.get
  },
  tickets: {
    refresh: ticketsController.refresh,
    categories: ticketsController.getCategories,
    list: ticketsController.list,
    get: ticketsController.get,
    post: ticketsController.post,
    put: ticketsController.put
  }
}