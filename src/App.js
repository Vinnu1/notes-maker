import React, { Component } from 'react';
import AddItem from './Components/AddItem';
import ShowItem from './Components/ShowItem';

class App extends Component {
  constructor(){
    super();
    this.state = {
      insert:0
    }
  }
  onChangeInsert(count){
    console.log("condition:",count);
    this.setState({insert:count});
    // this.setState({
    //   data:data
    // })

  }

  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}>Note Maker</h1>
        <AddItem  
        changeInsert = {this.onChangeInsert.bind(this)}
        />
        <ShowItem Insert = {this.state.insert}/>
      </div>
    );
  }
}

export default App;