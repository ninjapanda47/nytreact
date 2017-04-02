// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", startyear: "", endyear: ""};
  },

  // These functions will respond to the user input
    handleChange: function(event) {
    this.setState({ term: event.target.value });
  },

    handleChangeStart: function(event) {
    this.setState({ startyear: event.target.value });
  },

    handleChangeEnd: function(event) {
    this.setState({ endyear: event.target.value });
  },

  // When a user submits...
  handleSubmit: function(event) {
    event.preventDefault();
    // Set the parent to have the search term
    this.props.setTerm(this.state.term, this.state.startyear, this.state.endyear);
    this.setState({ term: "" });
    this.setState({ startyear: "" });
    this.setState({ endyear: "" });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="panel-title text-center">Search</h2>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h5 className="">
                Topic
              </h5>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
               <h5 className="">
                Start Year
              </h5>
              <input
                value={this.state.startyear}
                type="text"
                className="form-control text-center"
                id="begin"
                onChange={this.handleChangeStart}
                required
              />
              <h5 className="">
                End Year
              </h5>
                <input
                value={this.state.endyear}
                type="text"
                className="form-control text-center"
                id="end"
                onChange={this.handleChangeEnd}
                required
              />

              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
