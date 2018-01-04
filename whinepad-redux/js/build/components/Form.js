'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CRUDStore = require('../flux/CRUDStore');

var _CRUDStore2 = _interopRequireDefault(_CRUDStore);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.fields = _CRUDStore2.default.getSchema();
    if (typeof _this.props.recordId === 'number') {
      _this.initialData = _CRUDStore2.default.getRecord(_this.props.recordId);
    }
    return _this;
  }

  _createClass(Form, [{
    key: 'getData',
    value: function getData() {
      var _this2 = this;

      var data = {};
      this.fields.forEach(function (field) {
        return data[field.id] = _this2.refs[field.id].getValue();
      });
      return data;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'form',
        { className: 'Form' },
        this.fields.map(function (field) {
          var prefilled = _this3.initialData && _this3.initialData[field.id] || '';
          if (!_this3.props.readonly) {
            return _react2.default.createElement(
              'div',
              { className: 'FormRow', key: field.id },
              _react2.default.createElement(
                'label',
                { className: 'FormLabel', htmlFor: field.id },
                field.label,
                ':'
              ),
              _react2.default.createElement(_FormInput2.default, _extends({}, field, { ref: field.id, defaultValue: prefilled }))
            );
          }
          if (!prefilled) {
            return null;
          }
          return _react2.default.createElement(
            'div',
            { className: 'FormRow', key: field.id },
            _react2.default.createElement(
              'span',
              { className: 'FormLabel' },
              field.label,
              ':'
            ),
            field.type === 'rating' ? _react2.default.createElement(_Rating2.default, { readonly: true, defaultValue: parseInt(prefilled, 10) }) : _react2.default.createElement(
              'div',
              null,
              prefilled
            )
          );
        }, this)
      );
    }
  }]);

  return Form;
}(_react.Component);

exports.default = Form;