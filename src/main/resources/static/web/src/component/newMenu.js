import React, { Component } from 'react';
import {Col,Row,Card,Input } from 'antd';
import {getService} from '../model/fetch';
import './new-menu.css';
const Search = Input.Search;

class Content extends Component {
    constructor(props){
      super(props);
      this.state={
        data:[],
      };
    }
    componentDidMount(){
      getService('http://www.henryzhang.com.cn:8080/getMenu',(data)=>{
        if(data.success){
          this.setState({
            data:data.data,
          });
        }
      })
    }
    onSearch=(value)=>{
      getService( 'http://www.henryzhang.com.cn:8080/search/'+value,(data)=>{
        if(data.success){
          this.setState({
            data:data.data,
          })
        }
      })
    }
    render() {
      const {data}=this.state;
      let arr;
      // if(this.props.type==='search'){
      //   arr=this.props.searchData;
      // }else {
        arr=data.slice(0,6);
      // }    
      return (
        <div style={{width:'100%'}}>
          <Row className="menu-head">
            <Col span={6} offset={2} className="menu-head-h1">
              <h1>精选菜肴</h1>
            </Col>
            <Col span={6} offset={6} className="menu-head-search">
              <Search size="large" onSearch={this.onSearch}/>
            </Col>  
          </Row>
          <Row gutter={30} className="menu">
            {data.map((v,k)=>{ return <Col span={8} key={k} className="food-card">
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
        </div>
      );
    }
  }
export {Content};
  