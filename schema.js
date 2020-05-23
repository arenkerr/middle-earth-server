const { gql } = require('apollo-server');

const typeDefs = gql`
  type Person {
    name: String!,
    tree_id: String!,
    bio: String,
    race: String,
  }

  type Race {
    title: String,
    desc: String,
  }
  
  type Mutation {
    addPerson(name: String!, tree_id: String!): Person,
    deletePerson(tree_id: String!, name: String): Person,
    updatePerson(name: String, bio: String, race: String, tree_id: String): Person @cacheControl(maxAge: 10),
  }

  type Query {
    getPeople: [Person],
    getPerson(name: String!): Person,
    getPeopleByRace(title: String!): [Person],
    getRace(title: String!): Race,
    getAllRaces: [Race],
  }`;

module.exports = typeDefs;
