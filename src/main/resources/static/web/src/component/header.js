import React, { Component } from 'react';
import { Button,Col,Row} from 'antd';
import './header.css';

class Header extends Component {
    render() {
      return (
        <header className="header">
          <Row>
          	<Col span={18} offset={2}>
	            <Col span={6}><img src={require('../img/logo.png')} alt="#"/></Col>
              <Col span={6}><h1>餐厅大师</h1></Col>
	            <Col span={12}>
	              <ul>
	                <li>
	                  <a href="#">登录</a>
	                </li>
	                <li>
	                  <a href="#">注册</a>
	                </li>
	                <li>
	                  <a href="#">收藏</a>
	                </li>
	                <li>
	                  <a href="#">首页</a>
	                </li>
	              </ul>
	            </Col>
            </Col>  
          </Row>
        </header>
      );
    }
  }

  export default Header;