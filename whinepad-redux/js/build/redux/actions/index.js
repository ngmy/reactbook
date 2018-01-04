'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var search = exports.search = function search(event) {
  return {
    type: 'SEARCH',
    event: event
  };
};

var startSearching = exports.startSearching = function startSearching() {
  return {
    type: 'START_SEARCHING'
  };
};

var doneSearching = exports.doneSearching = function doneSearching() {
  return {
    type: 'DONE_SEARCHING'
  };
};

//export const createRecord = (newRecord: Object) => ({
//  type: 'CREATE_RECORD',
//  newRecord,
//})

var createRecord = exports.createRecord = function createRecord(newRecord) {
  return function (dispatch, getState) {
    dispatch({
      type: 'CREATE_RECORD',
      newRecord: newRecord
    });
    var newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
};

var deleteRecord = exports.deleteRecord = function deleteRecord(recordId) {
  return function (dispatch, getState) {
    dispatch({
      type: 'DELETE_RECORD',
      recordId: recordId
    });
    var newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
};

var updateRecord = exports.updateRecord = function updateRecord(recordId, newRecord) {
  return function (dispatch, getState) {
    dispatch({
      type: 'UPDATE_RECORD',
      recordId: recordId,
      newRecord: newRecord
    });
    var newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
};

var updateField = exports.updateField = function updateField(recordId, key, value) {
  return function (dispatch, getState) {
    dispatch({
      type: 'UPDATE_FIELD',
      key: key,
      value: value
    });
    var newData = getState().crud.data;
    // TODO server-side persistence
    if ('localStorage' in window) {
      localStorage.setItem('data', JSON.stringify(newData));
    }
    dispatch(doneSaveData(newData));
  };
};

var doneSaveData = exports.doneSaveData = function doneSaveData(newData) {
  return {
    type: 'DONE_SAVE_DATA',
    newData: newData
  };
};

var sort = exports.sort = function sort(key, descending) {
  return {
    type: 'SORT',
    key: key,
    descending: descending
  };
};