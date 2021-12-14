import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Tables from '../../pages/Admin/Table'
import Home from '../../pages/Admin/home/Home.jsx'
import Upload from '../../pages/Admin/upload/Upload.jsx'
import File from '../../pages/Admin/file/File.jsx'
import Echarts from '../../pages/Admin/echarts/Echarts.jsx'


export default function Mycontent() {
  return (
    <>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route path="/home" component={Home}></Route>
        <Route path="/tables" component={Tables}></Route>
        <Route path="/upload" component={Upload}></Route>
        <Route path="/file" component={File}></Route>
        <Route path="/echarts" component={Echarts}></Route>
      </Switch>
    </>
  )
}
