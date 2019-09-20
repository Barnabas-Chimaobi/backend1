import ApolloClient from "apollo-boost";
const { gql } = require("apollo-boost");

client
  .query({
    query: gql`
      {
        getAuthors {
          username
        }
      }
    `
  })
  .then(result => console.log(result));

const client = new ApolloClient({
  uri: "http://localhost:9009/"
});
