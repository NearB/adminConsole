import React, {Component} from 'react';

import NavedContainer from './../NavedContainer'
import Products from '../warehouse/Products'

export default class ProductsHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId != null ? props.userId  : props.params.userId
    };
  }

  render() {
    return (
      <NavedContainer userId={this.state.userId}>
        <Products userId={this.state.userId} />
      </NavedContainer>
    );
  }
}
