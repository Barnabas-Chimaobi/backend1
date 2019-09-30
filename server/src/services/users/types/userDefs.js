const { gql } = require("apollo-server");

module.exports = gql`
  interface MutationResponse {
    code: String
    success: Boolean
    message: String
  }

  type Author {
    id: ID
    name: String
    username: String!
    createdAt: String
    updatedAt: String
    password: String!
    email: String
    posts: Post
  }

  type LoggedInAuthor implements MutationResponse {
    code: String
    token: String
    success: Boolean
    message: String
  }

  extend type Query {
    getAuthors: [Author]
    getAuthor(id: ID!): Author
  }

  extend type Mutation {
    addAuthor(data: addAuthorInput!): Author
    updateAuthor(data: updateAuthor): Author
    login(data: loginInput): String
  }

  input addAuthorInput {
    name: String
    username: String!
    email: String!
    password: String!
  }

  input updateAuthor {
    name: String
    username: String
    password: String
  }

  input loginInput {
    email: String!
    password: String!
  }
`;
