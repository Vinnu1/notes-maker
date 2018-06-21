import React, { Component } from 'react';
import Item from './Item';
const $ = require('jquery')

class ShowItem extends Component {
  constructor(props){
      super(props);
      this.state = {
          items: [

          ],
          insert:props.Insert,
          deleted:0
    }
}

  deleteFunc(id){
    console.log("delete call:",id);
    let confirmation = window.confirm('Are you sure you wish to delete this item?')
    if(confirmation){
        $.ajax({
            type:'Delete',
            url:"/delete/"+id,
        })
        let count = this.state.deleted + 1;
        this.setState({deleted:count},()=>{
        this.fetchFunc();  
      })    
    }else{
        return false;
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
            <Item 
            key={element._id} 
            id={element._id} 
            title={element.title} 
            body={element.body}
            delete = {this.deleteFunc.bind(this)}
            />
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
