require("./src/config/config");
const { ApolloServer } = require("apollo-server");
const { PORT, MONGODB_URI } = process.env;

const mongoose = require("mongoose");

const typeDefs = require("./src/types");
const resolvers = require("./src/resolver");
const dataSources = require("./src/datasources");
const { getUser } = require("./src/utils/getAuth");

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

const server = new ApolloServer({
  // cors: true,
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const AuthUser = await getUser(token);
    return AuthUser;
  },
  dataSources: () => dataSources
});

server
  .listen(PORT)
  .then(({ url }) => console.log(`server is ready at ${url}`))
  .catch(err => console.log(`error occured ${err}`));
