/* @flow */

import classNames from 'classnames';
import React from 'react';

type Props = {
  href: ?string,
  className: ?string,
};

const Button = (props: Props) =>
  props.href
    ? <a {...props} className={classNames('Button', props.className)} />
    : <button {...props} className={classNames('Button', props.className)} />

export default Button
