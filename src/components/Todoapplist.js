import React, { Component } from 'react'

 class Todoapplist extends Component {
  
  render() {
    return (
      <div>
        <ul class="ul">
          {this.props.items.map((item,index)=> {
            return <li class="list" key ={index} > 
            <div class="list-items"><input id="myCheckBox" type="checkbox" class="checkbox"  ></input>
               <span>  {item}</span></div><button  class="deletebtn"   ><i onClick={this.props.deleteTask.bind(this,index)}  class="fa fa-trash" ></i></button> 
           </li>
          }

          )}
        </ul>
      </div>
    )
  }
}

export default Todoapplist

