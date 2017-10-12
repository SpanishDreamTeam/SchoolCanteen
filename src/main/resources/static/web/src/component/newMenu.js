import React, { Component } from 'react';
import {Col,Row,Card,Input,Spin,Button} from 'antd';
import {getService} from '../model/fetch';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './new-menu.css';
const Search = Input.Search;

class Content extends Component {
    constructor(props){
      super(props);
      this.AllData=[];
      this.state={
        data:[],
        loading:true,
      };
    }
    componentDidMount(){
      getService('http://www.henryzhang.com.cn:8080/getMenu',(data)=>{
        if(data.success){
          this.setState({
            data:data.data,
            loading:false,
          });
          this.AllData=data.data;
        }
      })
    }
    onSearch=(value)=>{
      getService( 'http://www.henryzhang.com.cn:8080/search/'+value,(data)=>{
        if(data.success){
          this.setState({
            data:data.data,
            loading:false,
          })
        }
      })
    }
    onClick=()=>{
      this.setState({
        data:this.AllData
      })
    }
    render() {
      const {data}=this.state;
      let arr;
      if(this.props.type==='allMenus'){
        arr=data;
      }else {
        arr=data.slice(0,9);
      }    
      return (
        <div style={{width:'100%'}}>
          <Row className="menu-head">
            <Col span={6} offset={2} className="menu-head-h1">
              <h1>精选菜肴</h1>
            </Col>
            <Col span={6} offset={6} className="menu-head-search">
              <Search size="large" onSearch={this.onSearch} placeholder="请输入菜名"/>
            </Col> 
            <Col span={1} offset={1} className="menu-head-btn">
              <Button style={this.props.type==='allMenus'?{}:{display:'none'}} onClick={this.onClick}>返回全部</Button>
            </Col> 
          </Row>
          <Spin spinning={this.state.loading} delay={500}>
            <Row gutter={30} className="menu">
              {arr.map((v,k)=>{ return <Col span={8} key={k} className="food-card">
                <div>
                  <div className="food-img">
                    <img src={v.picture_url} alt="#" />
                  </div>
                  <div className="text">
                    <h3>{v.dish_name}</h3>
                    <p>{v.canteen+v.floor+v.windows}</p>
                    <p>{'￥'+v.price}</p>
                  </div>  
                </div>
              </Col>})}
            </Row>
          </Spin>  
          <Row style={this.props.type==='allMenus'?{display:'none'}:{}}>
            <Col span={24} className="newMenu-more"><Link to="/menus">点击查看更多>>></Link></Col>
          </Row>
        </div>
      );
    }
  }
export {Content};
  