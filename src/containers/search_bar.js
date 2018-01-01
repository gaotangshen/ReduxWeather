import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { feachWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { term: ''};
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.feachWeather(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-group">
        <input
          className="form-control"
          type="text" 
          placeholder="Type a city"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ feachWeather: feachWeather}, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);