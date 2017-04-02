// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
import Results from "./children/Results";
import Articles from "./children/Articles";

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { term: "", results:[], articles: [], deleted: []};
  },

  setTerm: function(term, startyear, endyear) {
    helpers.runQuery(term, startyear, endyear).then(function(data) {
      if (data !== this.state.results) {
        console.log("search", data);
        this.setState({ results: data });
      }
    }.bind(this))
  },


  // Here we render the function
  render: function() {
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
            <Results art = {this.state.results /* .filter(item=> !savedLinks.map(s=>s.link).includes(item.link))*/} />
          </div>
          <div className="row">
            <Articles sart={this.state.articles} />
          </div>
        </div>
      </div>
    );
  }
});


module.exports = Main;