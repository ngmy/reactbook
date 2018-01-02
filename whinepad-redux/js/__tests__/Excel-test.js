jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Excel = require('../source/components/Excel').default;
const schema = require('../source/schema').default;
const Store = require('../source/flux/CRUDStore').default;

Store.init(schema);

describe('データの描画', () => {
  it('新規データを保存します', () => {
    const table = TestUtils.renderIntoDocument(
      <Excel />
    );
    const newname = '2.99ドルのジャック';
    const cell = TestUtils.scryRenderedDOMComponentsWithTag(table, 'td')[0];
//    cell.dataset = { // JestのDOM向けのハック
//      row: cell.getAttribute('data-row'),
//      key: cell.getAttribute('data-key'),
//    };
    TestUtils.Simulate.doubleClick(cell);
    cell.getElementsByTagName('input')[0].value = newname;
    TestUtils.Simulate.submit(cell.getElementsByTagName('form')[0]);
    expect(cell.textContent).toBe(newname);
  });

  it('データを削除します', () => {
    const table = TestUtils.renderIntoDocument(
      <Excel />
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(table, 'ActionsDelete')
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(table, 'Button')
    );
  });
});
