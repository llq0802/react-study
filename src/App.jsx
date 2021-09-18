/*
 * @Author: your name
 * @Date: 2021-09-02 12:03:56
 * @LastEditTime: 2021-09-16 16:11:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react\src\App.js
 */
import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import Count from './pages/Count' //Count
import Person from './pages/Person' //Person
import About from './pages/About' //About是路由组件
// import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

import { Button } from 'antd';

export default class App extends Component {
	render() {
		return (
			<>
				{/* 原生html中，靠<a>跳转不同的页面 */}
				{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}
				{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
				{/* <MyNavLink to="/about">About</MyNavLink>
					<MyNavLink to="/home">Home</MyNavLink>
					<MyNavLink to="/count">Count</MyNavLink>
					<MyNavLink to="/person">Person</MyNavLink> */}


				{/* 注册路由 */}
				<Switch>
					{/* <Route path="/" exact component={About}/> */}
					<Route path="/" component={About} exact />
					<Route path="/home" component={Home} />
					<Route path="/count" component={Count} />
					<Route path="/person" component={Person} />
					<Redirect exact from='/' to="/about" />
				</Switch>
			</>
		)
	}
}
