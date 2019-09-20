const { gql } = require("apollo-server");
const userDefs = require("./services/users/types/userDefs");
const postDef = require("./services/posts/types/postDef");
const linkSchema = gql`
  type Mutation {
    _: Boolean
  }

  type Query {
    _: Boolean
  }
`;

module.exports = [linkSchema, userDefs, postDef];
