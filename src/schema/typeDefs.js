// src/schema/typeDefs.js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int!): User
    updateUser(id: ID!, name: String, age: Int): User
  }
`;

module.exports = typeDefs;
