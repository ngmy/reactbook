'use strict';

var _CRUDStore = require('./flux/CRUDStore');

var _CRUDStore2 = _interopRequireDefault(_CRUDStore);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Whinepad = require('./components/Whinepad');

var _Whinepad2 = _interopRequireDefault(_Whinepad);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_CRUDStore2.default.init(_schema2.default);

var pad = document.getElementById('pad');

if (pad === null) {
  throw Error('アプリケーションを配置するDOMが存在しません');
}

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'div',
    { className: 'app-header' },
    _react2.default.createElement(_Logo2.default, null),
    ' Whinepad\u306B\u3088\u3046\u3053\u305D\uFF01'
  ),
  _react2.default.createElement(_Whinepad2.default, null)
), pad);