import React, { Component } from 'react';
import {Col,Row,Form, Icon, Input, Button, Menu ,Avatar,message,Tooltip} from 'antd';
import {getService} from '../model/fetch';
import {Content} from './newMenu';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './new-header.css';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;


class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading:true
        })
        getService('http://www.henryzhang.com.cn:8080/login/'+values.userName+'&'+values.password,(data)=>{
          if(data.success){
            if(data.data==="False"){
              message.error("账号密码错误，请重新登录",3);
              this.setState({
                loading:false
              })
            }else{
              sessionStorage.setItem("name", data.data);
              this.props.changeLogin();
              message.success("登录成功",3);
              this.setState({
                loading:false
              })
            }           
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" layout="vertical" hideRequiredMark > 
        <FormItem label="用户名"> 
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
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
          <Menu.Item key="homepage">
            <Link to="/">
              <Icon type="home" />主页
            </Link>
          </Menu.Item>
          <Menu.Item key="menus">
            <Link to="/menus">
              <Icon type="appstore-o" />菜单列表
            </Link>
          </Menu.Item>
          {/* <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu> */}
          <div className="newHeader-user" style={this.props.isLogin?{}:{display:'none'}}>
            <Icon type="user" />
            {sessionStorage.getItem('name')}
            <Tooltip title="注销">
              <Icon type="poweroff" onClick={this.props.loginOut}/>
            </Tooltip>            
          </div>
        </Menu>       
      );
    }
  }


class Header extends Component {

  render() {
    const {changeLogin,isLogin}=this.props;
    return (
      <header className="header">
        <div className="overlay"></div>
        <Row gutter={40} className="header-main">
          <Col span={12}>
            <h1 className="header-h1">一切为了美味</h1>
          </Col>
          <Col span={6} offset={4}>
          {
            isLogin?<div />:<div className="login-box">
                              <h2 className="form-h2">login</h2>
                              <Login changeLogin={changeLogin}/>
                            </div>
          }            
          </Col>
        </Row>
      </header>        
    );
  }
}

export {Header,Nav};
