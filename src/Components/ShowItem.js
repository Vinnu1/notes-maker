import React, { Component } from 'react';
import Item from './Item';

class ShowItem extends Component {
  constructor(){
      super();
      this.state = {
          items: [

          ]
    }
}

  componentDidMount(){
      this.setState({
            items: [
            {
                title:"Homework",
                body:"Complete network security assignment",
            },
            {
                title:"ToDo",
                body:"Laundry, bill payments"
            },
            {
                title:"Weekend Plans",
                body:"Watch Deadpool 2"
            },
            ]});
  }  
  
  
  render() {
    let Items = null;  
    if(this.state.items){
    Items = this.state.items.map(element =>{
        
        return (
            <Item key={element.title} title={element.title} body={element.body}/>
        )
    })
    }
    return (
      <div>
          <h3>ShowItem here</h3>
          <h4>Items</h4>
          {Items}
      </div>
    );
  }
}

export default ShowItem;
