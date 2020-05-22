const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let mongoUserCredentials = '';
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoUserCredentials = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`;
}

const MONGO_URL = process.env.MONGO_URL || 'localhost:27017';
const DB_NAME = process.env.MONGO_DB_NAME || 'arda';
const MONGO_CONNECTION_STRING = `mongodb://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;


mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${MONGO_CONNECTION_STRING}`));