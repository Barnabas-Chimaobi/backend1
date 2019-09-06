require("./src/config/config");
const { ApolloServer } = require("apollo-server");
const { PORT, MONGODB_URI } = process.env;

const mongoose = require("mongoose");

const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
};

mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log("connected to db..."))
  .catch(err => {
    console.log(`error connecting to DB: ${err}`);
    process.exit(1);
  });

const typeDefs = require("./src/types");
const resolvers = require("./src/resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server
  .listen(PORT)
  .then(({ url }) => console.log(`server is ready at ${url}`))
  .catch(err => console.log(`error occured ${err}`));
