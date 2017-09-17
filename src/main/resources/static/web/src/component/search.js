import React, { Component } from 'react';
import { Button,Col,Row ,Input,Icon} from 'antd';
import './search.css';

const Search=Input.Search;

class Search1 extends Component {
    render() {
      return (
        <Row className="search">
        	<Col span={8} offset={8}>
            <Search placeholder='search' />
        	</Col>
        </Row>
      );
    }
  }

export default Search1;