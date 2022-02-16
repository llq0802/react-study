/*
 * @Author: your name
 * @Date: 2019-06-03 14:31:32
 * @LastEditTime: 2021-11-01 09:39:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \code\admin-client_final_redux\src\index.js
 */
/*
入口js
 */
import React from 'react';
import ReactDOM, { HashRouter } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// 将App组件标签渲染到index页面的div上
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
