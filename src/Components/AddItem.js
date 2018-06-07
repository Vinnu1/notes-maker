import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    return (
      <div>
          <h3>AddItem here</h3>
          <br/>
          <form>
              <input placeholder={"Enter Title"}/>
              <br /><br/>
              <textarea rows={5} placeholder={"Enter Body"}/><br/>
              <input type="submit" value="Save" />
          </form>
      </div>
    );
  }
}

export default AddItem;
