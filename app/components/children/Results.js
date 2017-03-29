// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Results</h2>
        </div>
        <div className="panel-body text-center">
          {this.props.headlines.map(function(item) {
            return <div>{item}<button className="btn btn-primary"
                type="submit">Save</button></div>
          })
        }
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
