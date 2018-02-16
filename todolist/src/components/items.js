import React, { Component } from 'react';

class Items extends Component{
constructor(props,context){
    super(props,context)
    //bind the createTask method
    this.createTask=this.createTask.bind(this);
}

createTask(item){
    return <li key={item.key} className="well">{item.text}</li>
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