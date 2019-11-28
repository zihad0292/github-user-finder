import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    username: ""
  };

  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ username: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();

    if (this.state.username === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.onSearch(this.state.username);
      // this.setState({ username: "" });
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Search Users...'
          value={this.state.username}
          onChange={this.onChange}
        />
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value='Search'
          onClick={this.onSubmit.bind(this)}
        />
      </form>
    );
  }
}

export default Search;
