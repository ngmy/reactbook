'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CRUDStore = require('./CRUDStore');

var _CRUDStore2 = _interopRequireDefault(_CRUDStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CRUDActions = {
  create: function create(newRecord) {
    var data = _CRUDStore2.default.getData();
    data.unshift(newRecord);
    _CRUDStore2.default.setData(data);
  },
  delete: function _delete(recordId) {
    var data = _CRUDStore2.default.getData();
    data.splice(recordId, 1);
    _CRUDStore2.default.setData(data);
  },
  updateRecord: function updateRecord(recordId, newRecord) {
    var data = _CRUDStore2.default.getData();
    data[recordId] = newRecord;
    _CRUDStore2.default.setData(data);
  },
  updateField: function updateField(recordId, key, value) {
    var data = _CRUDStore2.default.getData();
    data[recordId][key] = value;
    _CRUDStore2.default.setData(data);
  }
};

exports.default = CRUDActions;