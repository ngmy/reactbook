/* @flow */

'use strict';

import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

let data: Array<Object>;
const storage: ?string = localStorage.getItem('data');

if (!storage) {
  data = [{}];
  schema.forEach(item => data[0][item.id] = item.sample);
} else {
  data = JSON.parse(storage);
}

const pad = document.getElementById('pad');

if (pad === null) {
  throw Error('アプリケーションを配置するDOMが存在しません');
}

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Whinepadにようこそ！
    </div>
    <Whinepad schema={schema} initialData={data} />
  </div>,
  pad
);
