import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
          <dl>
              <dt><h5>{this.props.title}</h5></dt>
              <dd>{this.props.body} </dd>
          </dl>
    );
  }
}

export default Item;
