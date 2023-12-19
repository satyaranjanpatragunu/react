import React, { Component } from 'react'

export default class Channel extends Component {
    constructor(){
        super();
         this.state={
             msg:"satyaranjan patra hello"
         }
    }
    change=()=>{
        this.setState({
          msg:"hgasdsagdfsa"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={()=>{this.setState({msg:"sjdfhgasjdhf"})}}>change this</button> */}
        <button onClick={this.change}>change this</button>

      </div>
    )
  }
}
