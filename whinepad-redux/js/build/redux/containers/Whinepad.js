'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _Button = require('../../components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Dialog = require('../../components/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Excel = require('./Excel');

var _Excel2 = _interopRequireDefault(_Excel);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Whinepad = function (_Component) {
  _inherits(Whinepad, _Component);

  function Whinepad(props) {
    _classCallCheck(this, Whinepad);

    var _this = _possibleConstructorReturn(this, (Whinepad.__proto__ || Object.getPrototypeOf(Whinepad)).call(this, props));

    _this.state = {
      addnew: false
    };
    return _this;
  }

  _createClass(Whinepad, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(newProps, newState) {
      return newState.addnew !== this.state.addnew || newProps.count !== this.props.count;
    }
  }, {
    key: '_addNewDialog',
    value: function _addNewDialog() {
      this.setState({ addnew: true });
    }
  }, {
    key: '_addNew',
    value: function _addNew(action) {
      this.setState({ addnew: false });
      if (action === 'confirm') {
        this.props.dispatch((0, _actions.createRecord)(this.refs.form.getWrappedInstance().getData()));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'Whinepad' },
        _react2.default.createElement(
          'div',
          { className: 'WhinepadToolbar' },
          _react2.default.createElement(
            'div',
            { className: 'WhinepadToolbarAdd' },
            _react2.default.createElement(
              _Button2.default,
              {
                onClick: this._addNewDialog.bind(this),
                className: 'WhinepadToolbarAddButton' },
              '+ \u8FFD\u52A0'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'WhinepadToolbarSearch' },
            _react2.default.createElement('input', {
              placeholder: this.props.count + '\u4EF6\u304B\u3089\u691C\u7D22...',
              onChange: function onChange(e) {
                return _this2.props.dispatch((0, _actions.search)(e));
              },
              onFocus: function onFocus() {
                return _this2.props.dispatch((0, _actions.startSearching)());
              },
              onBlur: function onBlur() {
                return _this2.props.dispatch((0, _actions.doneSearching)());
              } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'WhinepadDatagrid' },
          _react2.default.createElement(_Excel2.default, null)
        ),
        this.state.addnew ? _react2.default.createElement(
          _Dialog2.default,
          {
            modal: true,
            header: '\u9805\u76EE\u306E\u8FFD\u52A0',
            confirmLabel: '\u8FFD\u52A0',
            onAction: this._addNew.bind(this)
          },
          _react2.default.createElement(_Form2.default, { ref: 'form' })
        ) : null
      );
    }
  }]);

  return Whinepad;
}(_react.Component);

function mapStateToProps(state) {
  return {
    count: state.crud.data.count()
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(Whinepad);