/* @flow */

import {connect} from 'react-redux'
import Button from '../../components/Button';
import Dialog from '../../components/Dialog';
import Excel from './Excel';
import Form from './Form';
import React, {Component} from 'react';
import {createRecord, search, startSearching, doneSearching} from '../actions';

type Props = {
  count: number, // redux state
  dispatch: Function, // redux dispatch
}

type State = {
  addnew: boolean,
};

class Whinepad extends Component<Props, State> {
  props: Props;
  state: State;

  constructor(props) {
    super(props);
    this.state = {
      addnew: false,
    };
  }

  shouldComponentUpdate(newProps: Props, newState: State): boolean {
    return (
      newState.addnew !== this.state.addnew ||
      newProps.count !== this.props.count
    );
  }

  _addNewDialog() {
    this.setState({addnew: true});
  }

  _addNew(action: string) {
    this.setState({addnew: false});
    if (action === 'confirm') {
      this.props.dispatch(createRecord(this.refs.form.getWrappedInstance().getData()));
    }
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
                `${this.props.count}件から検索...`
              }
              onChange={e => this.props.dispatch(search(e))}
              onFocus={() => this.props.dispatch(startSearching())}
              onBlur={() => this.props.dispatch(doneSearching())} />
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
            <Form ref="form" />
          </Dialog>
          : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.crud.data.count(),
  };
}

export default connect(mapStateToProps, null, null, {withRef: true})(Whinepad)
