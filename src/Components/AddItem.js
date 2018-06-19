import React, { Component } from 'react';
const $ = require('jquery');

class AddItem extends Component {
  
  constructor(props){
    super(props);
    this.state={
      title:'',
      body:'',
      insert:0
    }
    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.submit = this.submit.bind(this)
  }

  titleChange(event){
    this.setState({title: event.target.value})
  }

  bodyChange(event){
    this.setState({body: event.target.value})
  }
  
  submit(){
    $.post('/submit',{data:this.state});
    let count = this.state.insert + 1;
    console.log("count",count)
    this.setState({title:'',body:'',insert:count},()=>{
      this.props.changeInsert(this.state.insert);
    })
  }

  render() {

    return (
      <div>
          <h3>AddItem here</h3>
          <br/>
          <form onSubmit={this.submit}>
              <input name="title" placeholder="Enter Title" value={this.state.title} onChange={this.titleChange}/>
              <br /><br/>
              <textarea name="Body" rows={5} placeholder="Enter Body" value={this.state.body} onChange={this.bodyChange} /><br/>
              <button type="button" value="Save" onClick={this.submit}>Save</button>
          </form>
      </div>
    );
  }
}

export default AddItem;
