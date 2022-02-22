/*
 * @Author: your name
 * @Date: 2021-09-02 12:03:56
 * @LastEditTime: 2021-12-28 09:15:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-react\src\App.js
 */

// import Count from './pages/Count' //Count
// import Person from './pages/Person' //Person

// import Header from './components/Header' //Header是一般组件
// import MyNavLink from './components/MyNavLink'
// import store from './redux/store';
// import { Button } from 'antd';
import React, { Component, } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Admin from './pages/Admin/index.jsx'
import Login from './pages/Login/Login.jsx'

// const Admin = () => (import('./pages/Admin/index.jsx'))
// const Login = () => (import('./pages/Login/Login.jsx'))
export default class App extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Admin} />


					{/* <Redirect to='/'></Redirect> */}

					{/* <Route path='/'>
							<Admin/>
					</Route> */}


					{/* <Route path="/" render={(props) => {
						return 1 ? <Admin /> : <Redirect to="/login" />
					}} /> */}


				</Switch>

			</>
		)
	}
}



/**
 * 路由权限
 */

{/* <Provider store={store}>
	<BrowserRouter>
	<Switch>
	<Route path="/auth" component={UnauthorizedLayout} />
	<AuthorizedRoute path="/app" component={PrimaryLayout} />
	或者:
	<AuthorizedRoute path="/app" >
		<PrimaryLayout/	>
	</AuthorizedRoute>

	<Redirect to="/auth" />
	</Switch>
</Provider> */}

// AuthorizedRoute.js文件
// render() {
// 	const { component: Component, pending, logged, ...rest } = this.props
// 	return (
// 		<Route {...rest} render={props => {
// 			if (pending) return <div>Loading...</div>
// 			return logged
// 				? <Component {...props} />
// 				: <Redirect to="/auth/login" />
// 		}} />
// 	)
// }

// 或者:
// return (
// 	<Route
// 		{...rest}
// 		render={({ location }) =>
// 			auth.user ? (
// 				children
// 			) : (
// 				<Redirect
// 					to={{
// 						pathname: "/login",
// 						state: { from: location }
// 					}}
// 				/>
// 			)
// 		}
// 	/>
// );





// const Routers = routerList.map((item, index) => {
// 	return <Route key={index} path={item.path} exact={item.exact} render={(props) => {
// 		if (item.noLogin) { // 如果是不用登录就可访问的页面，直接返回
// 			return <item.component {...props} />;
// 		} else {
// 			if (token) {
// 				return <item.component {...props} />;
// 			} else {
// 				return <Redirect to={{
// 					pathname: '/login',
// 					state: {from: props.location} }} />
// 			}
// 		}
// 	}} />
// });
// xuanran
// return (
// 	<BrowserRouter >
// 		<Switch>
// 			{Routers}
// 			<Route component={Error404} />
// 		</Switch>
// 	</BrowserRouter>
// );



//antd4 动态创建Icon图标
// import React from "react";
// import  * as Icon from '@ant-design/icons';
// let iconType = 'FastBackwardOutlined';
// export default function Aicon(iconType) {
//   return (
//     <div >
//     {
//       React.createElement(
//         Icon[iconType],
//         {
//           style:{ fontSize: '16px', color: '#08c' }
//         }
//       )
//     }
//     </div>
//   );
// }

