const { AuthenticationError, UserInputError } = require("apollo-server");

const {
  userMutation,
  userQuery
} = require("./services/users/resolvers/userResolvers");
const {
  postMutation,
  postQuery
} = require("./services/posts/resolvers/postResolvers");

const resolvers = {
  Mutation: {
    ...userMutation,
    ...postMutation
  },

  Query: {
    ...userQuery,
    ...postQuery
  },

  MutationResponse: {
    __resolveType(mutationResponse, context, info) {
      return null;
    }
  }
};

module.exports = resolvers;
