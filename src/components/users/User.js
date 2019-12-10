import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, getUser, getUserRepos, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.username);
    getUserRepos(match.params.username);
    //eslint-disable-next-line
  }, []);

  const {
    login,
    avatar_url,
    html_url,
    name,
    blog,
    company,
    location,
    email,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt=''
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Visit Github Profile
          </a>
          <ul>
            {login && (
              <li>
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              </li>
            )}
            {email !== null && (
              <li>
                <Fragment>
                  <strong>Email:</strong> {email}
                </Fragment>
              </li>
            )}
            {company !== null && (
              <li>
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              </li>
            )}
            {blog !== null && (
              <li>
                <Fragment>
                  <strong>Website:</strong> {blog}
                </Fragment>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-info'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default User;
