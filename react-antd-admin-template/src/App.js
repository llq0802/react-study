/*
 * @Author: your name
 * @Date: 2021-09-27 12:34:05
 * @LastEditTime: 2021-09-27 14:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-antd-admin-template\src\App.js
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import store from './store';
import Router from './router';

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>
    );
  }
}

export default App;
