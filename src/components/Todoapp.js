import React, { Component } from 'react'
import Todoapplist from './Todoapplist'


 class Todoapp extends Component {
 

   constructor(props) {
     super(props)
   
     this.state = {
        term:'',
        items:[],
        completed: { 
           0: true,
          1: false,},

     }
     this.handleCheck = this.handleCheck.bind(this);
   }
   
   onChangeHandler = (e) =>{
       this.setState({
        term: e.target.value,
        
       })
       
   }

   onAddhandler =(f) =>{
     f.preventDefault();
     this.setState({
      term: '',
      items:[...this.state.items,this.state.term]
      
     })
   }
    
   onDeleteHandler = (index) =>{
    const deleteTask =[...this.state.items];
    deleteTask.splice(index,1);
    this.setState({
      items:deleteTask
    })
   }

  
   
   handleCheck(index) {
    this.setState(state => ({
      completed: { ...this.state.completed,[index]: !this.state.completed[index] }
    }));
  }
  



   


  render() {
          
    return (

      <div>
        <h1>All Tasks</h1>
        <form>
        <div>
           <input id="input" type="text" name="add" class="textinput" placeholder="Add a new task"  value ={this.state.term} onChange={this.onChangeHandler} />
           <button id="addbtn" class="button" onClick={this.onAddhandler}>Add</button>
         
        </div>
        </form>
        <div>
          < Todoapplist deleteTask={this.onDeleteHandler} items ={this.state.items} checkbox={this.handleCheck} />
        </div>
        <div>
            {this.state.items.length === 0 && <h2 id="h2">Seems like a quiet day</h2>}
        </div>
      </div>
      
    )
  }
}
 

export default Todoapp