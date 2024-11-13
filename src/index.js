// src/index.js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/typeDefs');
const userResolvers = require('./resolvers/userResolvers');

// Apollo Server Initialization
const server = new ApolloServer({
  typeDefs,
  resolvers: userResolvers
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`GraphQL API running at ${url}`);
});
