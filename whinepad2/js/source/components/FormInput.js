/* @flow */

import Rating from './Rating';
import React, {Component} from 'react';
import Suggest from './Suggest';

type FormInputFieldType = 'year' | 'suggest' | 'rating' | 'text' | 'input';

export type FormInputFileldValue = string | number;

export type FormInputField = {
  type: FormInputFieldType,
  defaultValue?: FormInputFileldValue,
  id?: string,
  options: Array<string>,
  label?: string,
};

class FormInput extends Component<FormInputField> {
  props: FormInputField;
  getValue(): FormInputFileldValue {
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
    case 'text':
      return <textarea {...common} />;
    default:
      return <input {...common} type="text" />;
    }

  }
}

export default FormInput
