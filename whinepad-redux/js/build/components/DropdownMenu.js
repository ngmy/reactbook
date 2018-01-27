'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropdownMenu = function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, (DropdownMenu.__proto__ || Object.getPrototypeOf(DropdownMenu)).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: '_getOptions',
    value: function _getOptions() {
      var options = this.props.options;
      if (this.props.groupBy) {
        return this._getOptgroupTags(options);
      } else {
        return this._getOptionTags(options);
      }
    }
  }, {
    key: '_getOptgroupTags',
    value: function _getOptgroupTags(groups) {
      var _this2 = this;

      var optgroups = groups.map(function (group) {
        var children = _this2._getOptionTags(group[_this2.props.groupBy]);
        return _react2.default.createElement(
          'optgroup',
          { key: group.id, label: group.name },
          children
        );
      });
      return optgroups;
    }
  }, {
    key: '_getOptionTags',
    value: function _getOptionTags(options) {
      var _this3 = this;

      return options.map(function (option) {
        return _this3._getOptionTag(option);
      });
    }
  }, {
    key: '_getOptionTag',
    value: function _getOptionTag(option) {
      return _react2.default.createElement(
        'option',
        { value: option.id, key: option.id },
        option.name
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this._getOptions();
      return _react2.default.createElement(
        'select',
        {
          defaultValue: this.props.selected,
          selected: this.props.selected
        },
        _react2.default.createElement(
          'option',
          null,
          this.props.placeholder
        ),
        options
      );
    }
  }]);

  return DropdownMenu;
}(_react.Component);

DropdownMenu.defaultProps = {
  options: [],
  groupBy: null,
  selected: null
};
exports.default = DropdownMenu;