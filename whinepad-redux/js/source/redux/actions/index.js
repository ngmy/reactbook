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

//export const createRecord = (newRecord: Object) => ({
//  type: 'CREATE_RECORD',
//  newRecord,
//})

export const createRecord = (newRecord: Object) => {
  return (dispatch, getState) =>  {
    dispatch({
      type: 'CREATE_RECORD',
      newRecord,
    });
    const newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
}

export const deleteRecord = (recordId: number) => {
  return (dispatch, getState) =>  {
    dispatch({
      type: 'DELETE_RECORD',
      recordId,
    });
    const newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
}

export const updateRecord = (recordId: number, newRecord: Object) => {
  return (dispatch, getState) =>  {
    dispatch({
      type: 'UPDATE_RECORD',
      recordId,
      newRecord,
    });
    const newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
}

export const updateField = (recordId: number, key: string, value: string|number) => {
  return (dispatch, getState) =>  {
    dispatch({
      type: 'UPDATE_FIELD',
      key,
      value,
    });
    const newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
}

export const doneSaveData = (newData: Object) => ({
  type: 'DONE_SAVE_DATA',
  newData,
})

export const sort = (key: string, descending: boolean) => ({
  type: 'SORT',
  key,
  descending
})
