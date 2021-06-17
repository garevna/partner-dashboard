class RSPController {
  async credentials (data) {
    self.postMessage(await self.controller.credentials(data))
  }

  async passwordChange (data) {
    self.postMessage(await self.controller.passwordChange(data))
  }

  async refresh () {
    self.postMessage(await self.controller.refreshClientDetails())
  }

  async get () {
    self.postMessage(await self.controller.getClientDetails())
  }

  async update (request) {
    // self.postMessage({ status: 300, route: 'rsp', action: 'put', key: request.key, result: request.data })
    self.postMessage(await self.controller.updateClientDetails(request.data))
  }
}

export const rspController = new RSPController()
