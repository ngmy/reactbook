'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Excel = _react2.default.createClass({
  displayName: 'Excel',

  propTypes: {
    headers: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    initialData: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string))
  },

  getInitialState: function getInitialState() {
    return {
      data: this.props.initialData,
      sortby: null,
      descending: false,
      edit: null, // {row: 行番号, cell: 列番号}
      search: false
    };
  },

  componentDidMount: function componentDidMount() {
    document.onkeydown = function (e) {
      //if (e.altKey && e.shiftKey && e.keyCode === 82) {
      if (e.altKey && e.keyCode === 82) {
        this._replay();
      }
    }.bind(this);
  },

  _preSearchData: null,

  _log: [],

  _replay: function _replay() {
    if (this._log.length === 0) {
      console.warn('ステートが記録されていません');
      return;
    }
    var idx = -1;
    var interval = setInterval(function () {
      idx++;
      if (idx === this._log.length - 1) {
        clearInterval(interval);
      }
      this.setState(this._log[idx]);
    }.bind(this), 1000);
  },

  _logSetState: function _logSetState(newState) {
    this._log.push(JSON.parse(JSON.stringify(this._log.length === 0 ? this.state : newState)));
    this.setState(newState);
  },

  _sort: function _sort(e) {
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    var descending = this.state.sortby === column && !this.state.descending;
    data.sort(function (a, b) {
      return descending ? a[column] < b[column] ? 1 : -1 : a[column] > b[column] ? 1 : -1;
    });
    this._logSetState({
      data: data,
      sortby: column,
      descending: descending
    });
  },

  _showEditor: function _showEditor(e) {
    this._logSetState({ edit: {
        row: parseInt(e.target.dataset.row, 10),
        cell: e.target.cellIndex
      } });
  },

  _save: function _save(e) {
    e.preventDefault();

    var input = e.target.firstChild;
    var data = this.state.data.slice();
    data[this.state.edit.row][this.state.edit.cell] = input.value;
    this._logSetState({
      edit: null,
      data: data
    });
  },

  _search: function _search(e) {
    var needle = e.target.value.toLowerCase();
    if (!needle) {
      this._logSetState({ data: this._preSearchData });
      return;
    }
    var idx = e.target.dataset.idx;
    var searchdata = this._preSearchData.filter(function (row) {
      return row[idx].toString().toLowerCase().indexOf(needle) > -1;
    });
    this._logSetState({ data: searchdata });
  },

  _toggleSearch: function _toggleSearch() {
    if (this.state.search) {
      this._logSetState({
        data: this._preSearchData,
        search: false
      });
      this._preSearchData = null;
    } else {
      this._preSearchData = this.state.data;
      this._logSetState({
        search: true
      });
    }
  },

  _renderSearch: function _renderSearch() {
    if (!this.state.search) {
      return null;
    }
    return _react2.default.createElement(
      'tr',
      { onChange: this._search },
      this.props.headers.map(function (_ignore, idx) {
        return _react2.default.createElement(
          'td',
          { key: idx },
          _react2.default.createElement('input', { type: 'text', 'data-idx': idx })
        );
      })
    );
  },

  _download: function _download(format, ev) {
    var contents = format === 'json' ? JSON.stringify(this.state.data) : this.state.data.reduce(function (result, row) {
      return result + row.reduce(function (rowresult, cell, idx) {
        return rowresult + '"' + cell.replace(/"/g, '""') + '"' + (idx < row.length - 1 ? ',' : '');
      }, '') + "\n";
    }, '');

    var URL = window.URL || window.webkitURL;
    var blob = new Blob([contents], { type: 'text/' + format });
    ev.target.href = URL.createObjectURL(blob);
    ev.target.download = 'data.' + format;
  },

  _renderToolbar: function _renderToolbar() {
    return _react2.default.createElement(
      'div',
      { className: 'toolbar' },
      _react2.default.createElement(
        'button',
        { onClick: this._toggleSearch },
        '\u691C\u7D22'
      ),
      _react2.default.createElement(
        'a',
        { onClick: this._download.bind(this, 'json'), href: 'data.json' },
        'JSON\u3067\u4FDD\u5B58'
      ),
      _react2.default.createElement(
        'a',
        { onClick: this._download.bind(this, 'csv'), href: 'csv.json' },
        'CSV\u3067\u4FDD\u5B58'
      )
    );
  },

  _renderTable: function _renderTable() {
    return _react2.default.createElement(
      'table',
      null,
      _react2.default.createElement(
        'thead',
        { onClick: this._sort },
        _react2.default.createElement(
          'tr',
          null,
          this.props.headers.map(function (title, idx) {
            if (this.state.sortby === idx) {
              title += this.state.descending ? '\u2191' : '\u2193';
            }
            return _react2.default.createElement(
              'th',
              { key: idx },
              title
            );
          }, this)
        )
      ),
      _react2.default.createElement(
        'tbody',
        { onDoubleClick: this._showEditor },
        this._renderSearch(),
        this.state.data.map(function (row, rowidx) {
          return _react2.default.createElement(
            'tr',
            { key: rowidx },
            row.map(function (cell, idx) {
              var content = cell;

              var edit = this.state.edit;
              if (edit && edit.row === rowidx && edit.cell === idx) {
                content = _react2.default.createElement(
                  'form',
                  { onSubmit: this._save },
                  _react2.default.createElement('input', { type: 'text', defaultValue: content })
                );
              }

              return _react2.default.createElement(
                'td',
                { key: idx, 'data-row': rowidx },
                content
              );
            }, this)
          );
        }, this)
      )
    );
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'Excel' },
      this._renderToolbar(),
      this._renderTable()
    );
  }
});

exports.default = Excel;