'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _crud = require('./crud');

var _crud2 = _interopRequireDefault(_crud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var whinepadApp = (0, _redux.combineReducers)({
  crud: _crud2.default
});

exports.default = whinepadApp;