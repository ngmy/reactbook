/* @flow */

import Rating from './Rating';
import React, {Component} from 'react';
import Suggest from './Suggest';
import DropdownMenu from './DropdownMenu';

import type {Option as DropdownMenuOption} from './DropdownMenu'

type FormInputFieldType = 'year' | 'suggest' | 'rating' | 'text' | 'input' | 'select';

export type FormInputFieldValue = string | number;

export type FormInputField = {
  type: FormInputFieldType,
  defaultValue?: FormInputFieldValue,
  id?: string,
  options: Array<string> | Array<DropdownMenuOption>,
  label?: string,
  groupBy?: string,
  placeholder?: string,
  selected?: string,
};

class FormInput extends Component<FormInputField> {
  props: FormInputField;
  getValue(): FormInputFieldValue {
    return 'value' in this.refs.input
      ? this.refs.input.value
      : this.refs.input.getValue();
  }

  render() {
    const common: Object = {
      id: this.props.id,
      ref: 'input',
      defaultValue: this.props.defaultValue,
    };

    switch(this.props.type) {
    case 'year':
      return (
        <input
          {...common}
          type="number"
          defaultValue={this.props.defaultValue || new Date().getFullYear()} />
      );
    case 'suggest':
      return <Suggest {...common} options={this.props.options} />;
    case 'rating':
      return (
        <Rating
          {...common}
          defaultValue={parseInt(this.props.defaultValue, 10)} />
      );
    case 'select':
      return (
        <DropdownMenu
          {...common}
          groupBy={this.props.groupBy}
          options={this.props.options}
          placeholder={this.props.placeholder}
          selected={this.props.selected} />
      );
    case 'text':
      return <textarea {...common} />;
    default:
      return <input {...common} type="text" />;
    }

  }
}

export default FormInput
