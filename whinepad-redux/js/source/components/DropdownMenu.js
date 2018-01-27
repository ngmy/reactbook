import React, {Component, PropTypes} from 'react';

class DropdownMenu extends Component {
  _getOptions() {
    var options = this.props.options;
    if (this.props.groupBy) {
      return this._getOptgroupTags(options);
    } else {
      return this._getOptionTags(options);
    }
  }

  _getOptgroupTags(groups) {
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

  _getOptionTags(options) {
    return options.map(option => {
      return this._getOptionTag(option);
    });
  }

  _getOptionTag(option) {
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

DropdownMenu.propTypes = {
  groupBy: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  selected: PropTypes.string,
};

DropdownMenu.defaultProps = {
  options: [],
  groupBy: null,
  selected: null,
};

export default DropdownMenu
