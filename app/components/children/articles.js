
import React, { Component } from 'react';

var helpers = require("../utils/helpers");

export default class Articles extends Component {
  
    remove(item){  
    helpers.deleteArticles(item.id).then(data => {
      console.log("delete");
      helpers.getArticles().then(response => {
        console.log('here');
        this.props.setArticles(response);
        return response; 
      })
    })

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

