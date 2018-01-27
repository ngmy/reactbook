'use strict';

import DropdownMenu from './components/DropdownMenu';
import Dialog from './components/Dialog';
import Actions from './components/Actions';
import Form from './redux/containers/Form';
import FormInput from './components/FormInput';
import Rating from './components/Rating';
import Suggest from './components/Suggest';
import Button from './components/Button';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import whinepadApp from './redux/reducers'

let store = createStore(
  whinepadApp,
  applyMiddleware(
    thunk
  )
);

ReactDOM.render(
  <Provider store={store}>
    <div style={ {padding: '20px'} }>
      <h1>コンポーネント一覧</h1>

      <h2>Logo</h2>
      <div style={ {display: 'inline-block', background: 'purple'} }>
        <Logo />
      </div>

      <h2>Button</h2>
      <div>onClickが指定されたButton: <Button onClick={() => alert('クリックされました')}>クリック</Button></div>
      <div>hrefが指定されたButton: <Button href="http://reactjs.com">フォローする</Button></div>
      <div>クラス名が指定されたButton: <Button className="custom">何もしません</Button></div>

      <h2>Suggest</h2>
      <div><Suggest options={['eenie', 'meenie', 'miney', 'mo']} /></div>

      <h2>Rating</h2>
      <div>初期値なし: <Rating /></div>
      <div>初期値4: <Rating defaultValue={4} /></div>
      <div>最大値11: <Rating max={11} /></div>
      <div>読み取り専用: <Rating readonly={true} defaultValue={3} /></div>

      <h2>DropdownMenu</h2>
      <div>初期値なし：
        <DropdownMenu
          options={[
            {id: '1', name: 'eenie'},
            {id: '2', name: 'meenie'},
            {id: '3', name: 'miney'},
            {id: '4', name: 'mo'},
          ]} />
      </div>
      <div>初期値4：
        <DropdownMenu
          selected="4"
          options={[
            {id: '1', name: 'eenie'},
            {id: '2', name: 'meenie'},
            {id: '3', name: 'miney'},
            {id: '4', name: 'mo'},
          ]} />
      </div>
      <div>プレースホルダーあり：
        <DropdownMenu
          placeholder="選択してください"
          options={[
            {id: '1', name: 'eenie'},
            {id: '2', name: 'meenie'},
            {id: '3', name: 'miney'},
            {id: '4', name: 'mo'},
          ]} />
      </div>
      <div>グループ化：
        <DropdownMenu
          selected="3_4"
          groupBy="subcategories"
          options={[
            {
              id: '1',
              name: 'group1',
              subcategories: [
                {id: '1_1', name: 'eenie1'},
                {id: '1_2', name: 'meenie1'},
                {id: '1_3', name: 'miney1'},
                {id: '1_4', name: 'mo1'},
              ],
            },
            {
              id: '2',
              name: 'group2',
              subcategories: [
                {id: '2_1', name: 'eenie2'},
                {id: '2_2', name: 'meenie2'},
                {id: '2_3', name: 'miney2'},
                {id: '2_4', name: 'mo2'},
              ],
            },
            {
              id: '3',
              name: 'group3',
              subcategories: [
                {id: '3_1', name: 'eenie3'},
                {id: '3_2', name: 'meenie3'},
                {id: '3_3', name: 'miney3'},
                {id: '3_4', name: 'mo3'},
              ],
            },
          ]} />
      </div>

      <h2>FormInput</h2>
      <table><tbody>
        <tr>
          <td>単純な入力フィールド</td>
          <td><FormInput /></td>
        </tr>
        <tr>
          <td>デフォルト値</td>
          <td><FormInput defaultValue="デフォルトです" /></td>
        </tr>
        <tr>
          <td>年の入力</td>
          <td><FormInput type="year" /></td>
        </tr>
        <tr>
          <td>評価</td>
          <td><FormInput type="rating" defaultValue={4} /></td>
        </tr>
        <tr>
          <td>入力候補の表示</td>
          <td><FormInput
            type="suggest"
            options={['red', 'green', 'blue']}
            defaultValue="green" />
          </td>
        </tr>
        <tr>
          <td>単純なテキストエリア</td>
          <td><FormInput type="text" /></td>
        </tr>
        <tr>
          <td>単純なドロップダウンメニュー</td>
          <td><FormInput
            type="select"
            options={[
              {id: '1', name: 'eenie'},
              {id: '2', name: 'meenie'},
              {id: '3', name: 'miney'},
              {id: '4', name: 'mo'},
            ]} />
          </td>
        </tr>
      </tbody></table>

      <h2>Form</h2>
      <Form recordId={0} />

      <h2>読み取り専用のForm</h2>
      <Form
        recordId={0}
        readonly={true} />

      <h2>操作</h2>
      <div><Actions onAction={type => alert(type)} /></div>

      <h2>ダイアログ</h2>
      <Dialog
        header="単純な例"
        onAction={type => alert(type)}>
        こんにちは！
      </Dialog>
      <Dialog
        header="キャンセルボタンなし、カスタムのボタン"
        hasCancel={false}
        confirmLabel="ラベル"
        onAction={type => alert(type)}>
        何でも表示できます。例えば、
        <button>ボタン</button>
      </Dialog>

      {/* その他のコンポーネントはここに追加されます */}
    </div>
  </Provider>,
  document.getElementById('pad')
);
