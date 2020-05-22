const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    name: String!
    tree_id: String!
    bio: String
    race: String
  }
  
  type Mutation {
    addPerson(name: String!, tree_id: String!): Person
    deletePerson(tree_id: String!, name: String): Person
    updatePerson(name: String, bio: String, race: String, tree_id: String): Person @cacheControl(maxAge: 10)
  }

  type Query {
    getPeople: [Person]
    getPerson(name: String!): Person
    getPeopleByRace(race: String!): [Person]
  }`;

module.exports = typeDefs;
