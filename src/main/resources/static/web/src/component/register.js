import React, { Component } from 'react';
import {Col,Row,Form, Icon, Input, Button, Menu ,Avatar,message,Tooltip} from 'antd';
import {getService} from '../model/fetch';
import {Content} from './newMenu';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const FormItem = Form.Item;

class RegisterForm extends React.Component {
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form  className="register-form"  hideRequiredMark > 
        <FormItem label="用户名"> 
          {getFieldDecorator('account', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
          )}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}  placeholder="请输入密码" />
          )}
        </FormItem>
        <FormItem label="姓名">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入姓名' }],
          })(
            <Input prefix={<Icon type="smile-o" style={{ fontSize: 13 }} />}  placeholder="请输入姓名" />
          )}
        </FormItem>
      </Form>
    );
  }
}
const Register = Form.create()(RegisterForm);
export default  Register ;