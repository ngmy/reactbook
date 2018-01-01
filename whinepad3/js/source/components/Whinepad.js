import CRUDStore from '../flux/CRUDStore';
import Button from './Button';
import Dialog from './Dialog';
import Excel from './Excel';
import Form from './Form';
import React, {Component, PropTypes} from 'react';

class Whinepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addnew: false,
      count: CRUDStore.getCount(),
    };

    CRUDStore.addListener('change', () => {
      this.setState({
        count: CRUDStore.getCount(),
      })
    });

    this._preSearchData = null;
  }

  shouldComponentUpdate(newProps: Object, newState: state): boolean {
    return (
      newState.addnew !== this.state.addnew ||
      newState.count !== this.state.count
    );
  }

  _addNewDialog() {
    this.setState({addnew: true});
  }

  _addNew(action) {
    if (action === 'dismiss') {
      this.setState({addnew: false});
      return;
    }
    let data = Array.from(CRUDStore.getData());
    data.unshift(this.refs.form.getData());
    this.setState({
      addnew: false,
      data: data,
    });
    this._commitToStorage(data);
  }

  _commitToStorage(data) {
    localStorage.setItem('data', JSON.stringify(data));
  }

  _startSearching() {
    this._preSearchData = CRUDStore.getData();
  }

  _doneSearching() {
    this.setState({
      data: this._preSearchData,
    });
  }

  _search(e) {
    const needle = e.target.value.toLowerCase();
    if (!needle) {
      this.setState({data: this._preSearchData});
      return;
    }
    const fields = this.props.schema.map(item => item.id);
    const searchdata = this._preSearchData.filter(row => {
      for (let f = 0; f < fields.length; f++) {
        if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1) {
          return true;
        }
      }
      return false;
    });
    this.setState({data: searchdata});
  }

  render() {
    return (
      <div className="Whinepad">
        <div className="WhinepadToolbar">
          <div className="WhinepadToolbarAdd">
            <Button
              onClick={this._addNewDialog.bind(this)}
              className="WhinepadToolbarAddButton">
              + 追加
            </Button>
          </div>
          <div className="WhinepadToolbarSearch">
            <input
              placeholder={
                `${this.state.count}件から検索 ...`
              }
              onChange={this._search.bind(this)}
              onFocus={this._startSearching.bind(this)}
              onBlur={this._doneSearching.bind(this)} />
          </div>
        </div>
        <div className="WhinepadDatagrid">
          <Excel />
        </div>
        {this.state.addnew
          ? <Dialog
            modal={true}
            header="項目の追加"
            confirmLabel="追加"
            onAction={this._addNew.bind(this)}
          >
            <Form
              ref="form"
              fields={this.props.schema} />
          </Dialog>
          : null}
      </div>
    );
  }
}

Whinepad.propTypes = {
  schema: PropTypes.arrayOf(
    PropTypes.object
  ),
  initialData: PropTypes.arrayOf(
    PropTypes.object
  ),
};

export default Whinepad
