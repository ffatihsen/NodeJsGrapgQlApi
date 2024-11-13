// src/resolvers/userResolvers.js
const axios = require('axios');

const JSON_SERVER_URL = 'http://localhost:3001';

const userResolvers = {
  Query: {
    getUsers: async () => {
      const response = await axios.get(`${JSON_SERVER_URL}/users`);
      return response.data;
    },
    getUser: async (_, { id }) => {
      const response = await axios.get(`${JSON_SERVER_URL}/users/${id}`);
      return response.data;
    }
  },
  Mutation: {
    addUser: async (_, { name, age }) => {
      const response = await axios.post(`${JSON_SERVER_URL}/users`, {
        name,
        age
      });
      return response.data;
    },
    updateUser: async (_, { id, name, age }) => {
      const response = await axios.patch(`${JSON_SERVER_URL}/users/${id}`, {
        ...(name && { name }),
        ...(age && { age })
      });
      return response.data;
    }
  }
};

module.exports = userResolvers;
