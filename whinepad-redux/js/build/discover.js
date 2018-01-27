'use strict';

var _DropdownMenu = require('./components/DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _Dialog = require('./components/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Actions = require('./components/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Form = require('./redux/containers/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormInput = require('./components/FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Rating = require('./components/Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _Suggest = require('./components/Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Logo = require('./components/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('./redux/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    'div',
    { style: { padding: '20px' } },
    _react2.default.createElement(
      'h1',
      null,
      '\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u4E00\u89A7'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Logo'
    ),
    _react2.default.createElement(
      'div',
      { style: { display: 'inline-block', background: 'purple' } },
      _react2.default.createElement(_Logo2.default, null)
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Button'
    ),
    _react2.default.createElement(
      'div',
      null,
      'onClick\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ',
      _react2.default.createElement(
        _Button2.default,
        { onClick: function onClick() {
            return alert('クリックされました');
          } },
        '\u30AF\u30EA\u30C3\u30AF'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      'href\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ',
      _react2.default.createElement(
        _Button2.default,
        { href: 'http://reactjs.com' },
        '\u30D5\u30A9\u30ED\u30FC\u3059\u308B'
      )
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u30AF\u30E9\u30B9\u540D\u304C\u6307\u5B9A\u3055\u308C\u305FButton: ',
      _react2.default.createElement(
        _Button2.default,
        { className: 'custom' },
        '\u4F55\u3082\u3057\u307E\u305B\u3093'
      )
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Suggest'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Suggest2.default, { options: ['eenie', 'meenie', 'miney', 'mo'] })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Rating'
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u521D\u671F\u5024\u306A\u3057: ',
      _react2.default.createElement(_Rating2.default, null)
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u521D\u671F\u50244: ',
      _react2.default.createElement(_Rating2.default, { defaultValue: 4 })
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u6700\u5927\u502411: ',
      _react2.default.createElement(_Rating2.default, { max: 11 })
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u8AAD\u307F\u53D6\u308A\u5C02\u7528: ',
      _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: 3 })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'DropdownMenu'
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u521D\u671F\u5024\u306A\u3057\uFF1A',
      _react2.default.createElement(_DropdownMenu2.default, {
        options: [{ id: '1', name: 'eenie' }, { id: '2', name: 'meenie' }, { id: '3', name: 'miney' }, { id: '4', name: 'mo' }] })
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u521D\u671F\u50244\uFF1A',
      _react2.default.createElement(_DropdownMenu2.default, {
        selected: '4',
        options: [{ id: '1', name: 'eenie' }, { id: '2', name: 'meenie' }, { id: '3', name: 'miney' }, { id: '4', name: 'mo' }] })
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u30D7\u30EC\u30FC\u30B9\u30DB\u30EB\u30C0\u30FC\u3042\u308A\uFF1A',
      _react2.default.createElement(_DropdownMenu2.default, {
        placeholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
        options: [{ id: '1', name: 'eenie' }, { id: '2', name: 'meenie' }, { id: '3', name: 'miney' }, { id: '4', name: 'mo' }] })
    ),
    _react2.default.createElement(
      'div',
      null,
      '\u30B0\u30EB\u30FC\u30D7\u5316\uFF1A',
      _react2.default.createElement(_DropdownMenu2.default, {
        selected: '3_4',
        groupBy: 'subcategories',
        options: [{
          id: '1',
          name: 'group1',
          subcategories: [{ id: '1_1', name: 'eenie1' }, { id: '1_2', name: 'meenie1' }, { id: '1_3', name: 'miney1' }, { id: '1_4', name: 'mo1' }]
        }, {
          id: '2',
          name: 'group2',
          subcategories: [{ id: '2_1', name: 'eenie2' }, { id: '2_2', name: 'meenie2' }, { id: '2_3', name: 'miney2' }, { id: '2_4', name: 'mo2' }]
        }, {
          id: '3',
          name: 'group3',
          subcategories: [{ id: '3_1', name: 'eenie3' }, { id: '3_2', name: 'meenie3' }, { id: '3_3', name: 'miney3' }, { id: '3_4', name: 'mo3' }]
        }] })
    ),
    _react2.default.createElement(
      'h2',
      null,
      'FormInput'
    ),
    _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            '\u5358\u7D14\u306A\u5165\u529B\u30D5\u30A3\u30FC\u30EB\u30C9'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_FormInput2.default, null)
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            '\u30C7\u30D5\u30A9\u30EB\u30C8\u5024'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_FormInput2.default, { defaultValue: '\u30C7\u30D5\u30A9\u30EB\u30C8\u3067\u3059' })
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            '\u5E74\u306E\u5165\u529B'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_FormInput2.default, { type: 'year' })
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            '\u8A55\u4FA1'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_FormInput2.default, { type: 'rating', defaultValue: 4 })
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            '\u5165\u529B\u5019\u88DC\u306E\u8868\u793A'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_FormInput2.default, {
              type: 'suggest',
              options: ['red', 'green', 'blue'],
              defaultValue: 'green' })
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            null,
            '\u5358\u7D14\u306A\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2'
          ),
          _react2.default.createElement(
            'td',
            null,
            _react2.default.createElement(_FormInput2.default, { type: 'text' })
          )
        )
      )
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Form'
    ),
    _react2.default.createElement(_Form2.default, { recordId: 0 }),
    _react2.default.createElement(
      'h2',
      null,
      '\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u306EForm'
    ),
    _react2.default.createElement(_Form2.default, {
      recordId: 0,
      readonly: true }),
    _react2.default.createElement(
      'h2',
      null,
      '\u64CD\u4F5C'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Actions2.default, { onAction: function onAction(type) {
          return alert(type);
        } })
    ),
    _react2.default.createElement(
      'h2',
      null,
      '\u30C0\u30A4\u30A2\u30ED\u30B0'
    ),
    _react2.default.createElement(
      _Dialog2.default,
      {
        header: '\u5358\u7D14\u306A\u4F8B',
        onAction: function onAction(type) {
          return alert(type);
        } },
      '\u3053\u3093\u306B\u3061\u306F\uFF01'
    ),
    _react2.default.createElement(
      _Dialog2.default,
      {
        header: '\u30AD\u30E3\u30F3\u30BB\u30EB\u30DC\u30BF\u30F3\u306A\u3057\u3001\u30AB\u30B9\u30BF\u30E0\u306E\u30DC\u30BF\u30F3',
        hasCancel: false,
        confirmLabel: '\u30E9\u30D9\u30EB',
        onAction: function onAction(type) {
          return alert(type);
        } },
      '\u4F55\u3067\u3082\u8868\u793A\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070\u3001',
      _react2.default.createElement(
        'button',
        null,
        '\u30DC\u30BF\u30F3'
      )
    )
  )
), document.getElementById('pad'));