'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _schema = require('../../schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _preSearchData = void 0;

var crud = function crud(state, action) {
  switch (action.type) {
    case 'SEARCH':
      {
        var target = action.event.target;
        var needle = target.value.toLowerCase();
        if (!needle) {
          return Object.assign({}, state, {
            data: _preSearchData
          });
        }
        var fields = state.schema.map(function (item) {
          return item.id;
        });
        if (!_preSearchData) {
          return state;
        }
        var searchdata = _preSearchData.filter(function (row) {
          for (var f = 0; f < fields.length; f++) {
            if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
              return true;
            }
          }
          return false;
        });
        return Object.assign({}, state, {
          data: searchdata
        });
      }
    case 'START_SEARCHING':
      _preSearchData = state.data;
      return state;
    case 'DONE_SEARCHING':
      {
        return Object.assign({}, state, {
          data: _preSearchData
        });
      }
    case 'SORT':
      {
        var _sortCallback = function _sortCallback(a, b, descending) {
          var res = 0;
          if (typeof a === 'number' && typeof b === 'number') {
            res = a - b;
          } else {
            res = String(a).localeCompare(String(b));
          }
          return descending ? -1 * res : res;
        };
        var newData = state.data.sort(function (a, b) {
          return _sortCallback(a[action.key], b[action.key], action.descending);
        });
        return Object.assign({}, state, {
          data: newData
        });
      }
    case 'CREATE_RECORD':
      {
        var _newData = state.data.unshift(action.newRecord);
        if ('localStorage' in window) {
          localStorage.setItem('data', JSON.stringify(_newData));
        }
        return Object.assign({}, state, {
          data: _newData
        });
      }
    case 'DELETE_RECORD':
      {
        var _newData2 = state.data.remove(action.recordId);
        if ('localStorage' in window) {
          localStorage.setItem('data', JSON.stringify(_newData2));
        }
        return Object.assign({}, state, {
          data: _newData2
        });
      }
    case 'UPDATE_RECORD':
      {
        var _newData3 = state.data.set(action.recordId, action.newRecord);
        if ('localStorage' in window) {
          localStorage.setItem('data', JSON.stringify(_newData3));
        }
        return Object.assign({}, state, {
          data: _newData3
        });
      }
    case 'UPDATE_FIELD':
      {
        var record = state.data.get(action.recordId);
        record[action.key] = action.value;
        var _newData4 = state.data.set(action.recordId, record);
        if ('localStorage' in window) {
          localStorage.setItem('data', JSON.stringify(_newData4));
        }
        return Object.assign({}, state, {
          data: _newData4
        });
      }
    default:
      {
        var data = void 0;
        var storage = 'localStorage' in window ? localStorage.getItem('data') : null;
        if (!storage) {
          var initialRecord = {};
          _schema2.default.forEach(function (item) {
            return initialRecord[item.id] = item.sample;
          });
          data = (0, _immutable.List)([initialRecord]);
        } else {
          data = (0, _immutable.List)(JSON.parse(storage));
        }
        var _state = {
          data: data,
          schema: _schema2.default
        };
        return _state;
      }
  }
};

exports.default = crud;