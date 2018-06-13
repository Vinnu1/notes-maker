import React, { Component } from 'react';
import AddItem from './Components/AddItem';
import ShowItem from './Components/ShowItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}>Note Maker</h1>
        <AddItem />
        <ShowItem />
      </div>
    );
  }
}

export default App;
