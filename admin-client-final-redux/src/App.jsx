import React, {Component} from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
应用的根组件
 */
export default class App extends Component {


  render () {
    return (
      <HashRouter>
        <Switch> {/*只匹配其中一个*/}
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </HashRouter>
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

// return (
// 	<BrowserRouter >
// 		<Switch>
// 			{Routers}
// 			<Route component={Error404} />
// 		</Switch>
// 	</BrowserRouter>
// );