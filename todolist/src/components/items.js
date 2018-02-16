import React, { Component } from 'react';

class Items extends Component{
constructor(props,context){
    super(props,context)
    //bind the createTask method
    this.createTask=this.createTask.bind(this);
    this.delete=this.delete.bind(this);
}

createTask(item){
    return <li key={item.key} className="well"
    onClick={()=>this.delete(item.key)}>{item.text}</li>
}

//delete the list item
delete(key){
    this.props.delete(key)
}
  render(){
      var todoEntries=this.props.entries;
      var listItems=todoEntries.map(this.createTask)

      return(
          <div className="row listRow">
          <h1 className="text-center">MY LIST</h1>
          <ul>
              {listItems}
          </ul>
          </div>
      )
  }
}

export default Items