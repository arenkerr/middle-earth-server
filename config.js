const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const MONGO_CONNECTION_STRING = process.env.MONGO_URL || `mongodb://localhost:27017/arda`;

mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${MONGO_CONNECTION_STRING}`));