'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var whinepad = function whinepad(state, action) {
  switch (action.type) {
    case 'CREATE':
      return {
        record: action.newRecord
      };
    default:
      return state;
  }
};

exports.default = whinepad;