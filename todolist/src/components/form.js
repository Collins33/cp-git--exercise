import React, { Component } from 'react';

class Form extends Component{

    constructor(props,context){
        super(props,context)

        this.state={
            //responsible for storing all our items when we enter them
            items:[]
        }

        this.addItem=this.addItem.bind(this)

    }

    addItem(e){

    }
    render(){
        return(
            <div className="row">
            <form className="form-inline" onSubmit={this.addItem}>

            <div className="form-group">
            <input  className="form-control" placeholder="enter item" ref={(a) => this._inputElement=a}/>
            </div>
            <button className="btn btn-danger" type="submit">ADD ITEM</button>

            </form>
            </div>
        )
    }

}

export default Form