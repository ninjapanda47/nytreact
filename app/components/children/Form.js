
import React, { Component } from 'react';

export default class Results extends Component {

    constructor(props) {
    super(props);
    this.state = {term: "", startyear: "", endyear: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
    handleChange(event) {
    this.setState({ term: event.target.value });
  }

    handleChangeStart(event) {
    this.setState({ startyear: event.target.value });
  }

    handleChangeEnd(event) {
    this.setState({ endyear: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.setTerm(this.state.term, this.state.startyear, this.state.endyear);
    console.log(this.state.term);
    this.setState({ term: "" });
    this.setState({ startyear: "" });
    this.setState({ endyear: "" });
  }



  render() {
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
};

