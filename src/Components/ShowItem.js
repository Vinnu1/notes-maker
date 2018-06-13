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
      
    fetch('/show').then(res => res.json()).then(data => {
        //console.log(data)
        this.setState({items:data})
    })

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
