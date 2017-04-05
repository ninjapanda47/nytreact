
import React, { Component } from 'react';

import Form from "./children/Form";
import Results from "./children/Results";
import Articles from "./children/Articles";

var helpers = require("./utils/helpers");

export default class Main extends Component {

    constructor(props) {
    super(props);
    this.state = { term: "", results:[], articles: [], deleted: []};
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setTerm = this.setTerm.bind(this);
    this.setArticles = this.setArticles.bind(this);
  }

  componentDidMount() {
    helpers.getArticles().then(function(response) {
          if (response !== this.state.articles) {
            this.setState({ articles: response});
          }
    }.bind(this))
    }

  setArticles(articles){
    this.setState({ articles: articles});
  }


  setTerm(term, startyear, endyear) {
    helpers.runQuery(term, startyear, endyear).then(function(data) {
      if (data !== this.state.results) {
        this.setState({ results: data });
      }}.bind(this))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Scrubber</h2>
            <p className="text-center">
              <em>Search for and annotate articles of interest</em>
            </p>
          </div>
          <div className="row">
            <Form setTerm={this.setTerm} />
          </div>
          <div className="row">
            <Results art = {this.state.results} setArticles={this.setArticles.bind(this)}/>
          </div>
          <div className="row">
            <Articles sart={this.state.articles} />
          </div>
        </div>
      </div>
    );
  }
}



