import React, { Component } from 'react';
import {Col,Row,Tabs,Card } from 'antd';
import './menu.css';

const TabPane = Tabs.TabPane;

class Content extends Component {
    
    render() {
      const arr=[ {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},
                  {'name':'松园3楼20号窗口烩面','price':'998','num':'10000','like':'100','estimate':'1000'},]
      return (
        <Row gutter={8}>
          {arr.map((v,k)=>{ return <Col span={6} key={k} className="food-card">
            <Card title={v.name} bordered={false}>
              <img src={require('../img/huimian .png')} alt="#" className="food-img"/>
              <p>{'$'+v.price+'月售'+v.num}</p>
              <p>{'点赞'+v.like+'评价'+v.estimate}</p>
            </Card>
          </Col>})}
        </Row>
      );
    }
  }


class Menu extends Component {

    render() {
      const arr=['美味炒菜','精品套餐','面食大全','精致汤品','幸福甜点','炸鸡卤味'];
      return (
        <div className="menu">
          <Tabs defaultActiveKey="0">
            {arr.map((v,k)=>{
              return <TabPane tab={v} key={k}><Content /></TabPane>
            })}
          </Tabs>
        </div>
      );
    }
  }

export default Menu;