import {
  hostHandler,
  apiKeyHandler,
  credentialsHandler
} from '../env'

export const patch = async (path, data) => {
  if (!navigator.onLine) return { status: 0, result: 'Offline mode: Data has not been saved. Try later' }

  self.postDebugMessage({ method: 'PATCH', path, data })

  const response = await fetch(`${hostHandler()}/${path}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: apiKeyHandler(),
      Credentials: credentialsHandler()
    },
    body: JSON.stringify(data)
  })

  return { status: response.status, result: await response.json() }
}