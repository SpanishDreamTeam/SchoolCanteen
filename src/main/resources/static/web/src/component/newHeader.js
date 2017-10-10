import React, { Component } from 'react';
import {Col,Row,Form, Icon, Input, Button, Menu } from 'antd';
import {getService} from '../model/fetch';
import {Content} from './newMenu';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './new-header.css';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;


class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical" hideRequiredMark> 
        <FormItem label="用户名"> 
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(LoginForm);

class Nav extends Component {
    render() {
      return (
        <Menu mode="horizontal">
          <Menu.Item key="mail">
            <Icon type="mail" />菜单列表
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            Navigation Four - Link
          </Menu.Item>
        </Menu>       
      );
    }
  }


class Header extends Component {

  render() {
    return (
      <header className="header">
        <div className="overlay"></div>
        <Nav />
        <Row gutter={40} className="header-main">
          <Col span={12}>
            <h1 className="header-h1">一切为了美味</h1>
          </Col>
          <Col span={6} offset={4}>
            <div className="login-box">
              <h2 className="form-h2">login</h2>
              <Login />
            </div>
          </Col>
        </Row>
      </header>        
    );
  }
}

export default Header;
