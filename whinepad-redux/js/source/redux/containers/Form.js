/* @flow */

import {connect} from 'react-redux';
import FormInput from '../../components/FormInput';
import Rating from '../../components/Rating';
import React, {Component} from 'react';

import type {FormInputFieldValue} from '../../components/FormInput';

type Props = {
  readonly?: boolean,
  recordId?: ?number,
  fields: Array<Object>, // redux state
  initialData: ?Object, //redux state
};

class Form extends Component<Props> {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  getData() {
    let data = {};
    this.props.fields.forEach(field =>
      data[field.id] = this.refs[field.id].getValue()
    );
    return data;
  }

  render() {
    return (
      <form className="Form">{this.props.fields.map(field => {
        const prefilled: FormInputFieldValue = this.props.initialData && this.props.initialData[field.id] || '';
        if (!this.props.readonly) {
          return (
            <div className="FormRow" key={field.id}>
              <label className="FormLabel" htmlFor={field.id}>{field.label}:</label>
              <FormInput {...field} ref={field.id} defaultValue={prefilled} />
            </div>
          );
        }
        if (!prefilled) {
          return null;
        }
        return (
          <div className="FormRow" key={field.id}>
            <span className="FormLabel">{field.label}:</span>
            {
              field.type === 'rating'
                ? <Rating readonly={true} defaultValue={parseInt(prefilled, 10)} />
                : <div>{prefilled}</div>
            }
          </div>
        );
      }, this)}</form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const fields = state.crud.schema;
  let initialData;
  if (typeof ownProps.recordId === 'number') {
    initialData = state.crud.data.get(ownProps.recordId);
  }
  return {
    fields: fields,
    initialData: initialData,
  }
}

export default connect(mapStateToProps, null, null, {withRef: true})(Form)
