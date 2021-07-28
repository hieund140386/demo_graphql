const express = require('express');
const { PORT, connectDB } = require('./config/database');
const { server } = require('./config/apolloServer');

// connect to mongoDB
connectDB();

// init server
const app = express();

server.applyMiddleware({ app });

app.listen(
  PORT,
  () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  }
)