jest.autoMockOff();

import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Excel = require('../source/components/Excel').default;
const schema = require('../source/schema').default;

let data = [{}];
schema.forEach(item => data[0][item.id] = item.sample);

describe('データの描画', () => {
  it('新規データを保存します', () => {
    const callback = jest.genMockFunction();
    const table = TestUtils.renderIntoDocument(
      <Excel
        schema={schema}
        initialData={data}
        onDataChange={callback} />
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
    expect(callback.mock.calls[0][0][0].name).toBe(newname);
  });

  it('データを削除します', () => {
    const callback = jest.genMockFunction();
    const table = TestUtils.renderIntoDocument(
      <Excel
        schema={schema}
        initialData={data}
        onDataChange={callback} />
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(table, 'ActionsDelete')
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(table, 'Button')
    );
    expect(callback.mock.calls[0][0].length).toBe(0);
  });
});
