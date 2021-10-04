import React, { Component } from "react";


export default class Input extends Component{

    constructor(props){
        super(props);
    }

   render(){
       return(
           <div>
               <label for={this.props.id}>
                   {this.props.id}
               </label>
               <input id={this.props.id} 
               name={this.props.name} 
               type="text"
               value={this.props.value}
               onClick={this.props.handleChange}
               />
           </div>
       );
   }
}