/* @flow */

'use strict';

import {Provider} from 'react-redux';
import {createStore} from 'redux'
import React from 'react';
import ReactDOM from 'react-dom';
import whinepadApp from './redux/reducers'
import Whinepad from './redux/containers/Whinepad';
import Logo from './components/Logo';

let store = createStore(whinepadApp);

const pad = document.getElementById('pad');

if (pad === null) {
  throw Error('アプリケーションを配置するDOMが存在しません');
}

ReactDOM.render(
  <div>
    <div className="app-header">
      <Logo /> Whinepadにようこそ！
    </div>
    <Provider store={store}>
      <Whinepad />
    </Provider>
  </div>,
  pad
);
