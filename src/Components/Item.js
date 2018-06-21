import React, { Component } from 'react'

class Item extends Component {
  deleteClick(element){
    console.log("delete clicked ")
    this.props.delete(element.target.id)
  }
  render() {
    return (
          <div>
          <dl>
              <dt><h5>{this.props.title}</h5></dt>
              <dd>{this.props.body} </dd>
          </dl>
          <button onClick={this.deleteClick.bind(this)} id={this.props.id}>Delete</button>
          </div>
    );
  }
}

export default Item;
