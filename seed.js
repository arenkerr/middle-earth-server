const { MongoClient } = require('mongodb');
const assert = require('assert');

const dbURL = 'mongodb://localhost:27017/arda';
const dbName = 'arda';
const collectionName = 'races';

let races = []

// Connect to the server
MongoClient.connect(dbURL, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.insertMany(races, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Documents inserted!');
    }

    client.close();
  });
});