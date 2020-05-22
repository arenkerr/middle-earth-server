const Person = require('./models/person')

const resolvers = {
  Query: {
    getPeople: async () => await Person.find(),
    getPerson: async (root, args) => await Person.findOne(args),
    getPeopleByRace: async (root, args) => await Person.find(args)
  },
  Mutation: {
    addPerson: async (root, args) => {
      const newPerson = new Person({
        name: args.name,
        tree_id: args.tree_id
      });

      let err = await newPerson.save();
  
      if (err) return err;
      return newPerson;
    },
    deletePerson: async (root, args) => {
      const deletedPerson = Person.findOneAndRemove({
        tree_id: args.tree_id,
        name: args.name
      });
      return deletedPerson;
    },
    updatePerson: async (root, args) => {
      const updatedPerson = Person.findOneAndUpdate({
        name: args.name,
        bio: args.bio,
        race: args.race,
        tree_id: args.tree_id
      });

      return updatedPerson;
    }
  }
}

module.exports = resolvers;
