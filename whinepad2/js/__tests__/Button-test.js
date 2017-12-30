jest
  .dontMock('../source/components/Button')
  .dontMock('classnames');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Button = require('../source/components/Button').default;

describe('Buttonコンポーネントの描画', () => {
  it('<a>または<button>を描画します', () => {
    const button = TestUtils.renderIntoDocument(
      <div>
        <Button>
          こんにちは
        </Button>
      </div>
    );
    expect(ReactDOM.findDOMNode(button).children[0].nodeName).toEqual('BUTTON');

    const a = TestUtils.renderIntoDocument(
      <div>
        <Button href="#">
          こんにちは
        </Button>
      </div>
    );
    expect(ReactDOM.findDOMNode(a).children[0].nodeName).toEqual('A');
  });

  it('カスタムのCSSクラスを指定できます', () => {
    const button = TestUtils.renderIntoDocument(
      <div>
        <Button className="good bye">
          こんにちは
        </Button>
      </div>
    );
    //console.log(ReactDOM.findDOMNode(button).outerHTML);
    const buttonNode = ReactDOM.findDOMNode(button).children[0];
    expect(buttonNode.getAttribute('class')).toEqual('Button good bye');
  });
});
