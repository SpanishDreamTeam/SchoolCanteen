import React, { Component } from 'react';
import {Col,Row,Form, Icon} from 'antd';
import './footer.css';

export default class Footer extends Component {
  render(){
    return(
      <footer className="footer">
        <div className="overlay"></div>
        <Row>
          <Col span={24} className="footer-top">联系我们</Col>
          <Col span={6} offset={3} className="footer-bottom"><Icon type="phone" /> +123 456 789</Col>
          <Col span={6} className="footer-bottom"><Icon type="mail" /> SpanishDreamTeam@github.com</Col>
          <Col span={6} className="footer-bottom"><Icon type="message" /> 在线联系</Col>
          <Col span={24} className="footer-top">关注我们</Col>
          <Col span={1} offset={10} className="footer-bottom"><Icon type="github" /></Col>
          <Col span={1} className="footer-bottom"><Icon type="aliwangwang" /></Col>
          <Col span={1} className="footer-bottom"><Icon type="dingding" /></Col>
          <Col span={1} className="footer-bottom"><Icon type="chrome" /></Col>
        </Row>
        <Row>
          <Col span={24} className="footer-foot">2017	&copy; 版权归SpanishDreamTeam所有</Col>
        </Row>
      </footer>    
    );
  }
}