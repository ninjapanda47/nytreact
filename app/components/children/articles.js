// Osei's trendy new ES6 code
import React, { Component } from 'react';

var helpers = require("../utils/helpers");

// Creating the Results component
export default class Articles extends Component {
  
    remove(item){  
      console.log("remove!!");

  }


  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Saved Articles</h2>
        </div>
        <div className="panel-body text-center">
                  {this.props.sart.map(item=>{
            return <div key={item.id.toString()} className="result"><a href={item.link}>{item.headlines}</a><button className="btn btn-secondary btn-sm pull-right"
                type="submit" onClick={()=>this.remove(item)}>remove</button></div>
          })
        }
        </div>
      </div>
    );
  }
};

