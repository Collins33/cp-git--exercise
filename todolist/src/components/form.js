import React, { Component } from 'react';
import Items from './items'

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
        //access the current state
        var itemArray=this.state.items;

        //check if the input field contains a value
        if(this._inputElement.value !== ""){

            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            })

            //update the state
            this.setState({
                items:itemArray
            })

            //clear the input field
            this._inputElement.value=""
        }
        console.log(itemArray);
        e.preventDefault()

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
            <Items entries={this.state.items}/>
            </div>
        )
    }

}

export default Form