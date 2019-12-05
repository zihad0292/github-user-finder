import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert, onSearch }) => {
  const githubContext = useContext(GithubContext);
  const [username, setUsername] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (username === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.onSearch(username);
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        name='username'
        placeholder='Search Users...'
        value={username}
        onChange={onChange}
      />
      <input
        type='submit'
        className='btn btn-dark btn-block'
        value='Search'
        onClick={onSubmit}
      />
    </form>
  );
};

Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
