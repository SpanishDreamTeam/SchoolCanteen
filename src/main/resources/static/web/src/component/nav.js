import React, { Component } from 'react';
import { Button,Col,Row,Carousel,Input} from 'antd';
import {getService} from '../model/fetch';
import './nav.css';
const Search=Input.Search;


class Nav extends Component {
  componentDidMount(){
    getService( 'http://101.200.45.85:8080/getMenu',(data)=>{
      if(data.success){
        console.log(data);
      }
    })
  }
    render() {
      const arr=['松园','菊园','荷园','柳园','联系我们'];
      const arr1=['校贴吧','校网站','校新闻','校教务','校贴吧','校网站','校新闻','校教务'];
      const arr2=['松园3楼20号窗口烩面','松园3楼20号窗口烩面','松园3楼20号窗口烩面','松园3楼20号窗口烩面','松园3楼20号窗口烩面','松园3楼20号窗口烩面'];
      const arr3=[require('../img/chrysanthemum.png'),require('../img/loose.png'),require('../img/lotus.png'),require('../img/willow.png')];
      return (
        <div className="nav">
          <Row>
            <Col span={14} offset={5} className='main-nav'>
              <Search placeholder="寻找美食" className='search'/>
              <ul className="sttnav">
                {arr.map((v,k)=>{return <li key={k}><a href="#">{v}</a></li>})}
              </ul>
            </Col>
          </Row>
          <Row>
            <Col span={3} offset={1}>
              <ul className="side-nav left">
                {arr1.map((v,k)=>{return <li key={k}><a href="#">{v}</a></li>})}
              </ul>
            </Col>
            <Col span={14}>
              <Carousel autoplay>
                {arr3.map((v,k)=>{return <div key={k} className="ad-box"><img src={v} alt="#"/></div>})}
              </Carousel>
            </Col>
            <Col span={6} className="food-list">
              <h2>今日榜单</h2>
              <ul className="side-nav right">
                {arr2.map((v,k)=>{return <li key={k}><a href="#">{'NO'+(k+1)+' '+v}</a></li>})}
              </ul>
            </Col>
          </Row>
        </div>
      );
    }
  }

export default Nav;
