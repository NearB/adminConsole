import React, {Component} from 'react';

import NavedContainer from './NavedContainer'
import NewDashboardView from '../presentation/DashboardView'

import '../../css/Dashboard.css';
import '../../css/sb-admin.css';


export default class NewDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.params.userId
    };

    this.renderContent = this.renderContent.bind(this);
  }

  renderContent(){
    return (<NewDashboardView userId={this.state.userId}/>);
  }
  render() {
    return (
      <NavedContainer userId={this.state.userId}
                      content={this.renderContent}
      />
    );
  }
}
