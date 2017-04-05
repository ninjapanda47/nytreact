
import React, { Component } from 'react';

var helpers = require("../utils/helpers");

export default class Results extends Component {

   constructor(props) {
        super(props);
        this.save = this.save.bind(this);
    }

   save(item) {
    helpers.postArticles(item.headlines, item.link).then(data => {
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
}



