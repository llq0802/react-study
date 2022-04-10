import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Tables from '../../pages/Admin/Table'
import Home from '../../pages/Admin/home/Home.jsx'
import Upload from '../../pages/Admin/upload/Upload.jsx'
import File from '../../pages/Admin/file/File.jsx'
import Echarts from '../../pages/Admin/echarts/Echarts.jsx'
import Hook from '../../pages/Hooks/Usecontext.jsx'
import Tree from '../../pages/Tree/Tree.jsx'
import Form from '../../pages/Form/index.jsx'
import Qrcode from '../../pages/Qrcode/index.jsx'
import Roll from '../../pages/Roll/index.jsx'
import Check from '../../pages/Check/index.jsx'
import TestHook from '../../pages/TestHook/index.jsx'
import UploadFile from '../../pages/UploadFile/index.jsx'


export default function Mycontent() {
  return (
    <>
      <Switch>
        <Redirect exact from='/' to='/home' />
        <Route exact path="/home" component={Home}></Route>
        {/* <Route exact path="/" component={Home}></Route> */}
        <Route path="/tables" component={Tables}></Route>
        <Route path="/upload" component={Upload}></Route>
        <Route path="/file" component={File}></Route>
        <Route path="/echarts" component={Echarts}></Route>
        <Route path="/hooks" component={Hook}></Route>
        <Route path="/tree" component={Tree}></Route>
        <Route path="/form" component={Form}></Route>
        <Route path="/qrcode" component={Qrcode}></Route>
        <Route path="/roll" component={Roll}></Route>
        <Route path="/check" component={Check}></Route>
        <Route path="/test" component={TestHook}></Route>
        <Route path="/uploadfile" component={UploadFile}></Route>
      </Switch>
    </>
  )
}
