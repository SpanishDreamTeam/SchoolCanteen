import React, { Component } from 'react';
import {Col,Row, Icon} from 'antd';
import './contact.css';

export default class contact extends Component {
  render(){
    return(
      <Row className="contact">
        <div className="overlay"></div>
        <Row>
          <Col span={24} className="contact-main">
            <h1>公司简介</h1>
            <p>“餐厅大师”，是一家致力于开发高校食堂饭菜信息公布与交流平台的高科技公司。</p>
            <p>餐厅大师公司，创立于2017年3月，拥有数名研发工程师，这是一支优秀的技术团队，掌握着先进的网站建设技术。</p>
            <p>从创立之初，餐厅大师便将“让师生最平等便捷地获取食堂饭菜信息,找到所求”作为自己的使命，成立以来，公司秉承“用户至上”的理念，不断坚持技术创新，致力于为用户提供“简单可依赖”的互联网搜索产品及服务。</p>
            <p>通过“餐厅大师”这个平台，在校师生将会拥有一个全新的渠道了解本校的饮食文化，饮食结构，和丰富的餐饮内容。餐厅大师将线上食堂和线下食堂有机的结合在一起，提高了学生对校园生活的参与度，以学生的角度看食堂，看学校，不仅可以丰富学生的校园生活还可以拉近学生和校务人员的距离，不失为一个建设和谐校园的新途径。</p>
          </Col>
        </Row>
        <Row>
          <Col span={24} className="footer-foot"><p>朱广磊：15238465952</p></Col>
        </Row>
      </Row>    
    );
  }
}