const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'SARABELKACEM879',
    database: 'blogdb',
  },
});

module.exports = knex;
