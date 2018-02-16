import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            <div className="row">
            <form className="form-inline">

            <div className="form-group">
            <input  className="form-control"/>
            </div>
            <button className="btn btn-danger" type="submit">ADD ITEM</button>

            </form>
            </div>
        )
    }

}

export default Form