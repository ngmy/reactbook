jest
  .dontMock('../source/components/FormInput')
  .dontMock('../source/components/Rating')
  .dontMock('../source/components/Suggest')
  .dontMock('classnames')
;

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const FormInput = require('../source/components/FormInput').default;

describe('factory works', () => {
  it('入力値を返します', () => {
    let input = TestUtils.renderIntoDocument(<FormInput type="year" />);
    expect(input.getValue()).toBe(String(new Date().getFullYear()));
    input = TestUtils.renderIntoDocument(<FormInput type="rating" defaultValue="3" />);
    expect(input.getValue()).toBe(3);
  });

});
