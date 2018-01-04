export const search = (event: Event) => ({
  type: 'SEARCH',
  event,
})

export const startSearching = () => ({
  type: 'START_SEARCHING',
})

export const doneSearching = () => ({
  type: 'DONE_SEARCHING',
})

export const createRecord = (newRecord: Object) => ({
  type: 'CREATE_RECORD',
  newRecord,
})

export const deleteRecord = (recordId: number) => ({
  type: 'DELETE_RECORD',
  recordId,
})

export const updateRecord = (recordId: number, newRecord: Object) => ({
  type: 'UPDATE_RECORD',
  recordId,
  newRecord,
})

export const updateField = (recordId: number, key: string, value: string|number) => ({
  type: 'UPDATE_FIELD',
  key,
  value,
})

export const sort = (key: string, descending: boolean) => ({
  type: 'SORT',
  key,
  descending
})
