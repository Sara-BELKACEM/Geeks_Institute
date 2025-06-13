/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'SARABELKACEM879',
      database: 'books_db',
    },
    migrations: {
      directory: './server/config/migrations'
    }
  }
};

