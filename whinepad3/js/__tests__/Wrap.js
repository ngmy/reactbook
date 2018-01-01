/* @flow */

import React from 'react';

type Props = {
  children: Object,
}

class Wrap extends React.Component<Props> {
  props: Props;

  render() {
    return <div>{this.props.children}</div>;
  }
}
export default Wrap;
