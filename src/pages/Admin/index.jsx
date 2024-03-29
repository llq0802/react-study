import React, { Component } from 'react';
import { withRouter, Link, NavLink } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Space } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Mycontent from '../../components/my-content/Mycontent';
import { Transition } from 'react-transition-group';

// import './index.scss'

const { Header, Sider, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>111</Menu.Item>
    <Menu.Item>222</Menu.Item>
  </Menu>
);
class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  items = [
    {
      label: <span>首页</span>,
      key: '1',
      icon: <VideoCameraOutlined />,
      children: [
        {
          key: 'submenu-item-1',
          label: <Link to="/">首页</Link>,
        },
        {
          key: 'submenu-item-2',
          label: <Link to="/canvas">canvas</Link>,
        },
        {
          key: 'submenu-item-3',
          label: <Link to="/lianxi">练习</Link>,
        },
        {
          key: 'submenu-item-4',
          label: <Link to="/lianxi1">练习1</Link>,
        },
        {
          key: 'submenu-item-5',
          label: <Link to="/lianxi2">练习2</Link>,
        },
      ],
    },
    {
      key: '2',
      icon: <UserOutlined />,
      label: <Link to="/tree">tree</Link>,
      // onClick: (e) => {
      // 	console.log(e);
      // }
    },
    {
      label: <Link to="/form">form</Link>,
      key: '3',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/hooks">hooks</Link>,
      key: '4',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/table">table</Link>,
      key: '5',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/echarts">echarts</Link>,
      key: '6',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/qrcode">qrcode</Link>,
      key: '7',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/roll">roll</Link>,
      key: '8',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/check">Check</Link>,
      key: '9',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/test">test</Link>,
      key: '10',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/uploadfile">uploadfile</Link>,
      key: '11',
      icon: <UserOutlined />,
    },
    {
      label: <Link to="/player">player</Link>,
      key: '12',
      icon: <UserOutlined />,
    },
  ];

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  handleMenuClick = ({ key, keyPath, domEvent }) => {
    // console.log(key, keyPath);
  };

  render() {
    return (
      <Layout className="admin">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ position: 'fixed', height: '100vh', overflow: 'hidden' }}
        >
          {!this.state.collapsed ? (
            <div className="logo"> React APP </div>
          ) : (
            <div style={{ color: 'white', textAlign: 'center', padding: '10px 0px', transition: 'all .2' }}>LLQ</div>
          )}
          <Menu theme="dark" mode="inline" items={this.items} onClick={this.handleMenuClick}>
            {/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
							<a href="/">首页</a>
						</Menu.Item>
						<Menu.Item key="1" icon={<UserOutlined />} >
							<a href="/tree">tree</a>
						</Menu.Item>
						<Menu.Item key="4" icon={<UserOutlined />} >
							<a href="/form">form</a>
						</Menu.Item>
						<Menu.Item key="3" icon={<UserOutlined />} >
							<a href="/hooks">hooks</a>
						</Menu.Item>
						<Menu.Item key="5" icon={<UserOutlined />} >
							<a href="/table">table</a>
						</Menu.Item>
						<Menu.Item key="6" icon={<UserOutlined />} >
							<a href="/echarts">echarts</a>
						</Menu.Item>
						<Menu.Item key="7" icon={<UserOutlined />} >
							<a href="/qrcode">qrcode</a>
						</Menu.Item>
						<Menu.Item key="8" icon={<UserOutlined />} >
							<a href="/roll">roll</a>
						</Menu.Item>
						<Menu.Item key="9" icon={<UserOutlined />} >
							<a href="/check">Check</a>
						</Menu.Item>
						<Menu.Item key="10" icon={<UserOutlined />} >
							<a href="/test">TestHook</a>
						</Menu.Item>
						<Menu.Item key="11" icon={<UserOutlined />} >
							<a href="/uploadfile">uploadfile</a>
						</Menu.Item>
						<Menu.Item key="12" icon={<UserOutlined />} >
							<a href="/player">Player</a>
						</Menu.Item> */}
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{ marginLeft: !this.state.collapsed ? '200px' : '80px', transition: 'all .2s' }}
        >
          <Header
            className="site-layout-background"
            style={{
              padding: '0px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex' }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <Breadcrumb style={{ marginLeft: '20px' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="/tables">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div style={{ marginRight: '20px' }}>
              <Space>
                <span>欢迎回来</span>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                  <Avatar icon={<UserOutlined />} />
                </Dropdown>
              </Space>
            </div>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Mycontent />
          </Content>
          <Footer style={{ textAlign: 'center', color: '#888' }}>推荐使用谷歌浏览器，可获得更佳页面操作体验</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo;
