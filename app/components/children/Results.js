// Osei's trendy new ES6 code
import React, { Component } from 'react';

var helpers = require("../utils/helpers");

// Creating the Results component
export default class Results extends Component {

  save(item){  
        helpers.postArticles(item.headlines, item.link).then(function(data) {
          console.log(item.headlines);
      }),
        helpers.getArticles().then(function(response) {
          console.log();
  
        })

  }

  // Here we render the function
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Results</h2>
        </div>
        <div className="panel-body text-center">
          {this.props.art.map(item=>{
            return <div key={item.id.toString()} className="result"><a href={item.link}>{item.headlines}</a><button className="btn btn-secondary btn-sm pull-right"
                type="submit" onClick={()=>this.save(item)}>Save</button></div>
          })
        }
        </div>
      </div>
    );
  }
};



