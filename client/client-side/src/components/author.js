import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { ADD_NEW_AUTHOR } from "./queries";

class CreateLink extends Component {
  state = {
    name: "",
    username: "",
    password: "",
    email: ""
  };

  render() {
    const { name, username, password, email } = this.state;
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />

          <input
            className="mb2"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
          <input
            className="mb2"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={ADD_NEW_AUTHOR}
          variables={{ name, username, password, email }}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
