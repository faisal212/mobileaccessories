// server.js
const mongoose = require('mongoose');
// Initialize connection to database
const DB_URL = 'mongodb+srv://bulkpanda:minalfirebase@cluster0-5trbx.mongodb.net/test?retryWrites=true&w=majority';
const dbUrl = DB_URL,
      dbOptions = {
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0 ,
        dbName: 'bulkpanda',
        useNewUrlParser:true
      }
// Set DB from mongoose connection
module.exports = async () => {
  return await mongoose.createConnection(dbUrl,dbOptions);
}

