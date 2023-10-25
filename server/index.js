const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema.js');
const users = [];
const app = express();
app.use(cors());

const root = {
  getAllUsers: () => {
    return users;
  },

  getUsers: ({ id }) => {
    return users.find((users) => users.id == id);
  },
};
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  }),
);
app.listen(5001, () => console.log('Server running'));
