import React, { Component } from 'react';
import Item from './Item';

class ShowItem extends Component {
  constructor(props){
      super(props);
      this.state = {
          items: [

          ],
          insert:props.Insert
    }
}

  fetchFunc(){
    fetch('/show').then(res => res.json()).then(data => {
        console.log(data)
        this.setState({items:data})
    })
  }  

  componentDidMount(){
    this.fetchFunc();
  }
  
  componentWillReceiveProps(props){
      console.log("component will receive props:",props.Insert)
      this.setState({insert:props.Insert},()=>{
        console.log(this.state.insert);
        this.fetchFunc();
      })
      
  }
  
  
  render() {
    let Items = null;  
    if(this.state.items){
    Items = this.state.items.map(element =>{
        
        return (
            <Item key={element._id} title={element.title} body={element.body}/>
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
