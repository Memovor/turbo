import React, {
  Component,
} from '@mtfe/turbo/react';

import {
  Route, Link, Switch,
  HashRouter as Router,
} from 'react-router-dom';

import {
  Menu,
  Layout,
  Row,
  Col,
  Avatar,
  Dropdown,
  Icon,
  Alert
} from 'antd';

import routes from '../app/routes';

import './app.css';

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
);

class Index extends Component {
  state = { name: 'Admin' }
  componentDidCatch(err, info){
    Object.assign(err, info);
    this.setState({ error: err });
  }
  render() {
    const { user } = this.props;
    const { error } = this.state;
    const pathname = location.hash.slice(1);
    const [root] = pathname.split('/');
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/logout">Logout</a>
        </Menu.Item>
      </Menu>
    );
    return error ? <Alert style={{margin: 20}} type="error" message={ error.name } description={ error.message } /> : (
      <Router>
        <Layout className="main">
          <Header className="header main-header">
            <Row type='flex' justify='space-between' className='man-header-row'>
              <Col span={6}>
                <div className="main-title">
                  <Link to="/">Dashboard</Link>
                </div>
              </Col>
              <Col span={4} className='user' width={200}>
                <Dropdown overlay={menu} trigger={['click']} className='user-drop'>
                  <div className='user-out'>
                    <Avatar icon='user' className='user-avatar'/>
                    <p className='user-name'>
                      {user.name}
                    </p>
                    <Icon type="down" className='user-dir'/>
                  </div>
                </Dropdown>
              </Col>
            </Row>
          </Header>
          <Layout>
            <Sider width={200} className='main-sider'>
              <Menu mode="inline"
                    defaultOpenKeys={[root]}
                    defaultSelectedKeys={[pathname]}
                    className='main-sider-menu'>
                <SubMenu key="app" title="Menu 1">
                  <Menu.Item key="/">
                    <Link to="/">Overview</Link>
                  </Menu.Item>
                  <Menu.Item key="/home">
                    <Link to="/home">Home</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="banner" title="Menu 2">
                  <Menu.Item key="3">
                    <Link to="/">Sub Menu 1</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/home">Sub Menu 2</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className='main-content'>
              <Switch>
                {
                  routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                  ))
                }
              </Switch>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Index;
