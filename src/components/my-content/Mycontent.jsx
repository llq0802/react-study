import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Tables from '../../pages/Admin/Table'
import Home from '../../pages/Admin/home/Home.jsx'


export default function Mycontent() {
  return (
    <>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path="/home" component={Home}></Route>
        <Route path="/tables" component={Tables}></Route>
      </Switch>
    </>
  )
}
