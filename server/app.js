//========================================
//               IMPORTS
//========================================

const express = require('express');
// * Used so express can understand GraphQL
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
// * Connect to DB
const mongoose = require('mongoose');
// * Cors
const cors = require('cors');

//========================================
//              Server Setup
//========================================
const app = express();
const PORT = 4000;

// Allow cross-origin requests
app.use(cors());

// Connect to mlab database
mongoose.connect(
  'mongodb://<username>:<password>@ds215961.mlab.com:15961/gql-ninja',
  { useNewUrlParser: true },
);

// Once the connection is open fire cb function
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
