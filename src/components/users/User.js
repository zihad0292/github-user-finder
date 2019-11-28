import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.username);
  }

  render() {
    const {
      login,
      avatar_url,
      html_url,
      name,
      blog,
      location,
      email,
      hireable,
      bio,
      public_repos,
      public_gists,
      followers,
      following
    } = this.props.user;

    const loading = this.props.loading;

    return <div>{this.props.user.bio}</div>;
  }
}

export default User;
