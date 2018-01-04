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

var createRecord = exports.createRecord = function createRecord(newRecord) {
  return {
    type: 'CREATE_RECORD',
    newRecord: newRecord
  };
};

var deleteRecord = exports.deleteRecord = function deleteRecord(recordId) {
  return {
    type: 'DELETE_RECORD',
    recordId: recordId
  };
};

var updateRecord = exports.updateRecord = function updateRecord(recordId, newRecord) {
  return {
    type: 'UPDATE_RECORD',
    recordId: recordId,
    newRecord: newRecord
  };
};

var updateField = exports.updateField = function updateField(recordId, key, value) {
  return {
    type: 'UPDATE_FIELD',
    key: key,
    value: value
  };
};

var sort = exports.sort = function sort(key, descending) {
  return {
    type: 'SORT',
    key: key,
    descending: descending
  };
};