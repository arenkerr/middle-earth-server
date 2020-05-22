const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config()
require('./config');

// import models
const { Person } = require('./models/person');

// Import GraphQL components
const typeDefs = require('./schema')
const resolvers = require('./resolvers')


// Set up Express server
const server = new ApolloServer({ 
  introspection: true,
  playground: true,
  typeDefs, 
  resolvers 
})
const app = express();
app.use(cors());
server.applyMiddleware({ app });

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`🚀 Server ready on port: ${process.env.PORT || 4000}`)
);


