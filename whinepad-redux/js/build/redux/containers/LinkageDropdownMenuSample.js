'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DropdownMenu = require('../../components/DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkageDropdownMenuSample = function (_Component) {
  _inherits(LinkageDropdownMenuSample, _Component);

  function LinkageDropdownMenuSample(props) {
    _classCallCheck(this, LinkageDropdownMenuSample);

    var _this = _possibleConstructorReturn(this, (LinkageDropdownMenuSample.__proto__ || Object.getPrototypeOf(LinkageDropdownMenuSample)).call(this, props));

    _this.state = {
      selectedOfDropdown1: null
    };
    _this.defineLinkage = [{
      selectedOfDropdown1: '1',
      options: [{ id: '1_1', name: 'eenie1' }, { id: '1_2', name: 'meenie1' }, { id: '1_3', name: 'miney1' }, { id: '1_4', name: 'mo1' }]
    }, {
      selectedOfDropdown1: '2',
      options: [{ id: '2_1', name: 'eenie2' }, { id: '2_2', name: 'meenie2' }, { id: '2_3', name: 'miney2' }, { id: '2_4', name: 'mo2' }]
    }, {
      selectedOfDropdown1: '3',
      options: [{ id: '3_1', name: 'eenie3' }, { id: '3_2', name: 'meenie3' }, { id: '3_3', name: 'miney3' }, { id: '3_4', name: 'mo3' }]
    }, {
      selectedOfDropdown1: '4',
      options: [{ id: '4_1', name: 'eenie4' }, { id: '4_2', name: 'meenie4' }, { id: '4_3', name: 'miney4' }, { id: '4_4', name: 'mo4' }]
    }];
    return _this;
  }

  _createClass(LinkageDropdownMenuSample, [{
    key: '_setSelectedOfDropdownMenu1',
    value: function _setSelectedOfDropdownMenu1(e) {
      var nextSelectedOfDropdownMenu1 = e.target.value;
      if (!e.target.value) {
        nextSelectedOfDropdownMenu1 = null;
      }
      this.setState({
        selectedOfDropdown1: nextSelectedOfDropdownMenu1
      });
    }
  }, {
    key: '_getOptionsOfDropdownMenu2',
    value: function _getOptionsOfDropdownMenu2() {
      var _this2 = this;

      if (!this.state.selectedOfDropdown1) {
        return [];
      }
      var defineLinkage = this.defineLinkage.filter(function (item) {
        return item.selectedOfDropdown1 === _this2.state.selectedOfDropdown1;
      });
      return defineLinkage[0].options;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_DropdownMenu2.default, {
          onChange: this._setSelectedOfDropdownMenu1.bind(this),
          type: 'select',
          options: [{ id: '1', name: 'eenie' }, { id: '2', name: 'meenie' }, { id: '3', name: 'miney' }, { id: '4', name: 'mo' }] }),
        _react2.default.createElement(_DropdownMenu2.default, {
          type: 'select',
          options: this._getOptionsOfDropdownMenu2() })
      );
    }
  }]);

  return LinkageDropdownMenuSample;
}(_react.Component);

function mapStateToProps(state) {
  return {
    data: state.crud.data,
    schema: state.crud.schema
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, null, { withRef: true })(LinkageDropdownMenuSample);