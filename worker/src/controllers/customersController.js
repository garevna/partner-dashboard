import {
  getFromRemoteServer,
  getAllCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
} from '../helpers/customers'

class CustomersController {
  async getFromRemote () {
    self.postMessage(await getFromRemoteServer())
  }

  async getAllCustomers () {
    self.postMessage(await getAllCustomers())
  }

  async getCustomer (request) {
    self.postMessage(await getCustomer(request.key))
  }

  async deleteCustomer (request) {
    self.postMessage(await deleteCustomer(request.key))
  }

  async updateCustomer (request) {
    self.postMessage(await updateCustomer(request.key, request.data))
  }
}

export const customersController = new CustomersController()
