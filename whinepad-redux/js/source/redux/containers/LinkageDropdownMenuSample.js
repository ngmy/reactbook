import {connect} from 'react-redux'
import React, {Component} from 'react';
import DropdownMenu from '../../components/DropdownMenu';

class LinkageDropdownMenuSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOfDropdown1: null,
    };
    this.defineLinkage = [
      {
        selectedOfDropdown1 : '1',
        options: [
          {id: '1_1', name: 'eenie1'},
          {id: '1_2', name: 'meenie1'},
          {id: '1_3', name: 'miney1'},
          {id: '1_4', name: 'mo1'},
        ],
      },
      {
        selectedOfDropdown1 : '2',
        options: [
          {id: '2_1', name: 'eenie2'},
          {id: '2_2', name: 'meenie2'},
          {id: '2_3', name: 'miney2'},
          {id: '2_4', name: 'mo2'},
        ],
      },
      {
        selectedOfDropdown1 : '3',
        options: [
          {id: '3_1', name: 'eenie3'},
          {id: '3_2', name: 'meenie3'},
          {id: '3_3', name: 'miney3'},
          {id: '3_4', name: 'mo3'},
        ],
      },
      {
        selectedOfDropdown1 : '4',
        options: [
          {id: '4_1', name: 'eenie4'},
          {id: '4_2', name: 'meenie4'},
          {id: '4_3', name: 'miney4'},
          {id: '4_4', name: 'mo4'},
        ],
      },
    ];
  }

  _setSelectedOfDropdownMenu1(e) {
    var nextSelectedOfDropdownMenu1 = e.target.value;
    if (!e.target.value) {
      nextSelectedOfDropdownMenu1 = null;
    }
    this.setState({
      selectedOfDropdown1: nextSelectedOfDropdownMenu1,
    });
  }

  _getOptionsOfDropdownMenu2() {
    if (!this.state.selectedOfDropdown1) {
      return [];
    }
    const defineLinkage = this.defineLinkage.filter(item => {
      return item.selectedOfDropdown1 === this.state.selectedOfDropdown1;
    });
    return defineLinkage[0].options;
  }

  render() {
    return (
      <div>
        <DropdownMenu
          onChange={this._setSelectedOfDropdownMenu1.bind(this)}
          type="select"
          options={[
            {id: '1', name: 'eenie'},
            {id: '2', name: 'meenie'},
            {id: '3', name: 'miney'},
            {id: '4', name: 'mo'},
          ]} />
        <DropdownMenu
          type="select"
          options={this._getOptionsOfDropdownMenu2()} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.crud.data,
    schema: state.crud.schema,
  };
}

export default connect(mapStateToProps, null, null, {withRef: true})(LinkageDropdownMenuSample)
