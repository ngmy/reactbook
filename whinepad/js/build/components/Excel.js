'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormInput = require('./FormInput');

var _FormInput2 = _interopRequireDefault(_FormInput);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Excel = function (_Component) {
  _inherits(Excel, _Component);

  function Excel(props) {
    _classCallCheck(this, Excel);

    var _this = _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).call(this, props));

    _this.state = {
      data: _this.props.initialData,
      sortby: null, // schema.id
      descending: false,
      edit: null, // {row: 行番号, cell: 列番号}
      dialog: null // {type: 種類, idx: 行番号}
    };
    return _this;
  }

  _createClass(Excel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ data: nextProps.initialData });
    }
  }, {
    key: '_fireDataChange',
    value: function _fireDataChange(data) {
      this.props.onDataChange(data);
    }
  }, {
    key: '_sort',
    value: function _sort(key) {
      var data = Array.from(this.state.data);
      var descending = this.state.sortby === key && !this.state.descending;
      data.sort(function (a, b) {
        return descending ? a[key] < b[key] ? 1 : -1 : a[key] > b[key] ? 1 : -1;
      });
      this.setState({
        data: data,
        sortby: key,
        descending: descending
      });
      this._fireDataChange(data);
    }
  }, {
    key: '_showEditor',
    value: function _showEditor(e) {
      this.setState({ edit: {
          row: parseInt(e.target.dataset.row, 10),
          cell: e.target.dataset.key
        } });
    }
  }, {
    key: '_save',
    value: function _save(e) {
      e.preventDefault();
      var value = this.refs.input.getValue();
      var data = Array.from(this.state.data);
      data[this.state.edit.row][this.state.edit.key] = value;
      this.setState({
        edit: null,
        data: data
      });
      this._fireDataChange(data);
    }
  }, {
    key: '_actionClick',
    value: function _actionClick(rowidx, action) {
      this.setState({ dialog: { type: action, idx: rowidx } });
    }
  }, {
    key: '_deleteConfirmationClick',
    value: function _deleteConfirmationClick(action) {
      if (action === 'dismiss') {
        this._closeDialog();
        return;
      }
      var data = Array.from(this.state.data);
      data.splice(this.state.dialog.idx, 1);
      this.setState({
        dialog: null,
        data: data
      });
      this._fireDataChange(data);
    }
  }, {
    key: '_closeDialog',
    value: function _closeDialog() {
      this.setState({ dialog: null });
    }
  }, {
    key: '_saveDataDialog',
    value: function _saveDataDialog(action) {
      if (action === 'dismiss') {
        this._closeDialog();
        return;
      }
      var data = Array.from(this.state.data);
      data[this.state.dialog.idx] = this.refs.form.getData();
      this.setState({
        dialog: null,
        data: data
      });
      this._fireDataChange(data);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Excel' },
        this._renderTable(),
        this._renderDialog()
      );
    }
  }, {
    key: '_renderDialog',
    value: function _renderDialog() {
      if (!this.state.dialog) {
        return null;
      }
      switch (this.state.dialog.type) {
        case 'delete':
          return this._renderDeleteDialog();
        case 'info':
          return this._renderFormDialog(true);
        case 'edit':
          return this._renderFormDialog();
        default:
          throw Error('\u4E0D\u6B63\u306A\u30C0\u30A4\u30A2\u30ED\u30B0\u306E\u7A2E\u985E: ' + this.state.dialog.type);
      }
    }
  }, {
    key: '_renderDeleteDialog',
    value: function _renderDeleteDialog() {
      var first = this.state.data[this.state.dialog.idx];
      var nameguess = first[Object.keys(first)[0]];
      return _react2.default.createElement(
        _Dialog2.default,
        {
          modal: true,
          header: '\u524A\u9664\u306E\u78BA\u8A8D',
          confirmLabel: '\u524A\u9664',
          onAction: this._deleteConfirmationClick.bind(this)
        },
        '\u524A\u9664\u3057\u3066\u3082\u3088\u3044\u3067\u3059\u304B: "' + nameguess + '"?'
      );
    }
  }, {
    key: '_renderFormDialog',
    value: function _renderFormDialog(readonly) {
      return _react2.default.createElement(
        _Dialog2.default,
        {
          modal: true,
          header: readonly ? '項目の情報' : '項目の編集',
          confirmLabel: readonly ? 'OK' : '保存',
          hasCancel: !readonly,
          onAction: this._saveDataDialog.bind(this)
        },
        _react2.default.createElement(_Form2.default, {
          ref: 'form',
          fields: this.props.schema,
          initialData: this.state.data[this.state.dialog.idx],
          readonly: readonly })
      );
    }
  }, {
    key: '_renderTable',
    value: function _renderTable() {
      var _this2 = this;

      return _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            this.props.schema.map(function (item) {
              if (!item.show) {
                return null;
              }
              var title = item.label;
              if (_this2.state.sortby === item.id) {
                title += _this2.state.descending ? ' \u2191' : ' \u2193';
              }
              return _react2.default.createElement(
                'th',
                {
                  className: 'schema-' + item.id,
                  key: item.id,
                  onClick: _this2._sort.bind(_this2, item.id)
                },
                title
              );
            }, this),
            _react2.default.createElement(
              'th',
              { className: 'ExcelNotSortable' },
              '\u64CD\u4F5C'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          { onDoubleClick: this._showEditor.bind(this) },
          this.state.data.map(function (row, rowidx) {
            return _react2.default.createElement(
              'tr',
              { key: rowidx },
              Object.keys(row).map(function (cell, idx) {
                var _classNames;

                var schema = _this2.props.schema[idx];
                if (!schema || !schema.show) {
                  return null;
                }
                var isRating = schema.type === 'rating';
                var edit = _this2.state.edit;
                var content = row[cell];
                if (!isRating && edit && edit.row === rowidx && edit.key === schema.id) {
                  content = _react2.default.createElement(
                    'form',
                    { onSubmit: _this2._save.bind(_this2) },
                    _react2.default.createElement(_FormInput2.default, _extends({ ref: 'input' }, schema, {
                      defaultValue: content }))
                  );
                } else if (isRating) {
                  content = _react2.default.createElement(_Rating2.default, { readonly: true,
                    defaultValue: Number(content) });
                }
                return _react2.default.createElement(
                  'td',
                  {
                    className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'schema-' + schema.id, true), _defineProperty(_classNames, 'ExcelEditable', !isRating), _defineProperty(_classNames, 'ExcelDataLeft', schema.align === 'left'), _defineProperty(_classNames, 'ExcelDataRight', schema.align === 'right'), _defineProperty(_classNames, 'ExcelDataCenter', schema.align !== 'left' && schema.align !== 'right'), _classNames)),
                    key: idx,
                    'data-row': rowidx,
                    'data-key': schema.id },
                  content
                );
              }, _this2),
              _react2.default.createElement(
                'td',
                { className: 'ExcelDataCenter' },
                _react2.default.createElement(_Actions2.default, { onAction: _this2._actionClick.bind(_this2, rowidx) })
              )
            );
          }, this)
        )
      );
    }
  }]);

  return Excel;
}(_react.Component);

Excel.propTypes = {
  schema: _react.PropTypes.arrayOf(_react.PropTypes.object),
  initialData: _react.PropTypes.arrayOf(_react.PropTypes.object),
  onDataChange: _react.PropTypes.func
};

exports.default = Excel;