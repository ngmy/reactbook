/* @flow */

'use strict';

import CRUDStore from './flux/CRUDStore';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import Whinepad from './components/Whinepad';
import schema from './schema';

CRUDStore.init(schema);

const pad = document.getElementById('pad');

if (pad === null) {
  throw Error('アプリケーションを配置するDOMが存在しません');
}

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Whinepadにようこそ！
    </div>
    <Whinepad />
  </div>,
  pad
);
