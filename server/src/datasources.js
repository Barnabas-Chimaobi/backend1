const User = require("./services/users/datasource/User");
const Post = require("./services/posts/datasources/Post");

const datasources = {
  User,
  Post
};

module.exports = datasources;
