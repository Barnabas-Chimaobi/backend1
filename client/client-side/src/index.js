import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/user";
// import * as serviceWorker from "./serviceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// import { render } from "react-dom";
// const { gql } = require("apollo-boost");
import User from "./components/user";

const client = new ApolloClient({
  uri: "http://localhost:9009/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <User />
    </div>
  </ApolloProvider>
);

// render(<App />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
