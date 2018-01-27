/* @flow */

import React, {Component} from 'react';

export type Option = {
  id: string,
  name: string,
  [string]: Array<Option>
}

export type Props = {
  groupBy: string,
  options: Array<Option>,
  placeholder?: string,
  selected: string,
}

class DropdownMenu extends Component<Props> {
  props: Props

  static defaultProps = {
    options: [],
    groupBy: null,
    selected: null,
  };

  _getOptions() {
    var options = this.props.options;
    if (this.props.groupBy) {
      return this._getOptgroupTags(options);
    } else {
      return this._getOptionTags(options);
    }
  }

  _getOptgroupTags(groups: Array<Option>) {
    var optgroups = groups.map(group => {
      var children = this._getOptionTags(group[this.props.groupBy]);
      return (
        <optgroup key={group.id} label={group.name}>
          {children}
        </optgroup>
      );
    });
    return optgroups;
  }

  _getOptionTags(options: Array<Option>) {
    return options.map(option => {
      return this._getOptionTag(option);
    });
  }

  _getOptionTag(option: Option) {
    return <option value={option.id} key={option.id}>{option.name}</option>;
  }

  render() {
    var options = this._getOptions();
    return (
      <select
        defaultValue={this.props.selected}
        selected={this.props.selected}
      >
        <option>{this.props.placeholder}</option>
        {options}
      </select>
    )
  }
}

export default DropdownMenu
