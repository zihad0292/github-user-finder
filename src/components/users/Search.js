import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [username, setUsername] = useState("");

  const onChange = e => {
    setUsername(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (username === "") {
      alertContext.setAlert("Please enter something", "light");
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

export default Search;
