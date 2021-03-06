import { openDB } from './openDB'

export const getRecordByKey = (storeName, recordKey) => new Promise((resolve) => {
  openDB(storeName)
    .then((response) => {
      const { status, result: db } = response
      if (status !== 200) {
        resolve({ status, result: null })
        return
      }

      const store = db.transaction([storeName]).objectStore(storeName)

      Object.assign(store.get(recordKey), {
        onsuccess: event => resolve({
          status: event.target.result ? 200 : 404,
          result: event.target.result ? event.target.result : { key: recordKey, message: `The data ${recordKey} not found in db store ${storeName}` }
        }),
        onerror: event => resolve({ status: 704, key: recordKey, result: event.target.error })
      })
    })
})
