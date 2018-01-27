'use strict';

import Dialog from './components/Dialog';
import Actions from './components/Actions';
import Form from './components/Form';
import FormInput from './components/FormInput';
import Rating from './components/Rating';
import Suggest from './components/Suggest';
import Button from './components/Button';
import Logo from './components/Logo';
import React from 'react';
import ReactDOM from 'react-dom';
import CRUDStore from './flux/CRUDStore';
import schema from './schema';

CRUDStore.init(schema);

ReactDOM.render(
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
  </div>,
  document.getElementById('pad')
);
