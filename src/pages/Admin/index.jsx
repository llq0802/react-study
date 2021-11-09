import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, Space, } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import Mycontent from '../../components/my-content/Mycontent';
import { Transition } from 'react-transition-group';


import './index.scss'


const { Header, Sider, Content } = Layout;
const menu = (
	<Menu>
		<Menu.Item>
			111
		</Menu.Item>
		<Menu.Item>
			222
		</Menu.Item>

	</Menu>)

export default class SiderDemo extends Component {
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout className='admin'>

				<Sider trigger={null} collapsible collapsed={this.state.collapsed}
					style={{ position: 'fixed', height: '100vh', overflow: 'hidden', }}>

					{!this.state.collapsed ? <div className="logo"> React APP </div> : <div style={{ color: 'white', textAlign: 'center', padding: '10px 0px', transition: 'all .2' }}>LLQ</div>}
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							nav 1
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							nav 2
						</Menu.Item>

					</Menu>
				</Sider>
				<Layout className="site-layout" style={{ marginLeft: !this.state.collapsed ? '200px' : '80px', transition: 'all .2s' }}>
					<Header className="site-layout-background" style={{
						padding: '0px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
						<div style={{ display: 'flex' }}>
							{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								className: 'trigger',
								onClick: this.toggle,
							})}
							<Breadcrumb style={{ marginLeft: '20px' }}>
								<Breadcrumb.Item>Home</Breadcrumb.Item>
								<Breadcrumb.Item>
									<a href="">Application Center</a>
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

				</Layout>

			</Layout>
		);
	}
}
