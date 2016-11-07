import React, {Component} from 'react';


import Fa from 'react-fontawesome';
import {Panel} from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import Stores from '../container/stores/Stores'
import Products from '../container/warehouse/Products'
import Campaigns from '../container/marketing/Campaigns'
import Ads from '../container/marketing/Ads'

import {
    Row, Col
} from 'react-bootstrap';

const style = {}
export default class DashboardView extends Component {
  constructor(props){
    super(props);
    this.user = props.user;
  }

  render() {
    return (
        <div id="page-wrapper">
            <Row>
              <Col lg={12}>
                <Stores owner={this.user}/>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Products owner={this.user}/>
              </Col>
              <Col lg={6}>
                <Ads owner={this.user}/>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Campaigns owner={this.user}/>
              </Col>
            </Row>
        </div>
    );
  }
}
