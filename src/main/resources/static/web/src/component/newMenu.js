import React, { Component } from 'react';
import {Col,Row,Card,Input,Spin,Button,Modal,Form,message} from 'antd';
import {getService} from '../model/fetch';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './new-menu.css';
const Search = Input.Search;
const { TextArea } = Input;
const FormItem = Form.Item;

class CommentForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        getService('http://www.henryzhang.com.cn:8080/comment/'+this.props.id+'&'+sessionStorage.getItem('uid')+'&'+values.comment,(data)=>{ 
          if(data.success){
            if(data.data==="False"){
              message.error("评论失败",3);
            }else if(data.data==="True"){
              this.props.getCommentData(this.props.id);
              message.success("评论成功",3);
            }           
          }
        })
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Row>
          <Col span={16}>
            <FormItem>
              {getFieldDecorator('comment', {
                rules: [{ required: true, message: '请填写评论' }],
              })(
                <TextArea  placeholder="请填写评论" />
              )}
            </FormItem>
          </Col>
          <Col span={4} offset={2}>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                提交
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

const Commentform = Form.create()(CommentForm);

class Comment extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      loading:true,
    };
  }
  componentDidMount(){
    this.getCommentData(this.props.foodData.id);
  }
  getCommentData = (id) => {
    getService('http://www.henryzhang.com.cn:8080/searchComment/'+id,(data)=>{
      if(data.success){
        this.setState({
          data:data.data,
          loading:false,
        });
      }
    })
  } 
  render(){
    const {data} = this.state;
    const {foodData} = this.props;
    console.log(data);
    return(
      <div>
        <Row>
          <Col span={8} offset={2} className="modal-foodimg">
            <img src={foodData.picture_url} alt="#" />
          </Col>
          <Col span={12} className="modal-foodmsg">
            <h3>{foodData.dish_name}</h3>
            <p>{foodData.canteen+foodData.floor+foodData.windows}</p>
            <p>{'￥'+foodData.price}</p>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
            <Spin spinning={this.state.loading} delay={500}>
            <ul className="comment-ul">
            {data.map((v,k)=>{
              return <li key={k}>
                <span>{v.name}:</span>
                <p>{v.comment}</p>
                <span>{v.date}</span>
              </li>      
            })}
            </ul>
            </Spin>
          </Col>
        </Row>
        <Row>
          <Col span={20} offset={2}>
          {sessionStorage.getItem('name')?
            <Commentform id={foodData.id} getCommentData={this.getCommentData}/>
            :<p style={{textAlign:'center',margin:'10px'}}>请登录后评论</p>
          }  
          </Col>
        </Row>
      </div>
    )
  }
}

class Content extends Component {
    constructor(props){
      super(props);
      this.AllData=[];
      this.state={
        data:[],
        loading:true,
        visible:false,
        foodData:{},
        commentData:[],
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
    showModal = (v) => {
      this.setState({ 
        visible: true,
        foodData:v,
      });
    }
    handleCancel = () => {
      this.setState({ visible: false });
    }
    
    render() {
      const {data,foodData,commentData}=this.state;
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
          <Spin spinning={this.state.loading} delay={500} className="spin">
            <Row gutter={30} className="menu">
              {arr.map((v,k)=>{ return <Col span={8} key={k} className="food-card" onClick={this.showModal.bind(this,v)}>
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
          {this.state.visible?<Modal visible={this.state.visible} title="评论" footer={null} onCancel={this.handleCancel}>
            <Comment foodData={foodData}/>
          </Modal>:<div/>}
        </div>
      );
    }
  }
export {Content};
  