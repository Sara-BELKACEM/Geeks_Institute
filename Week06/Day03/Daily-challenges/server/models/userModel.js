const db = require('../config/db');

module.exports = {
  createUser: async (user, hashedPassword) => {
    return await db.transaction(async trx => {
      const [newUser] = await trx('users')
        .insert({
          email: user.email,
          username: user.username,
          first_name: user.first_name,
          last_name: user.last_name
        })
        .returning('*');

      await trx('hashpwd')
        .insert({
          username: user.username,
          password: hashedPassword
        });

      return newUser;
    });
  },

  findUserByUsername: async (username) => {
    return await db('users').where({ username }).first();
  },

  findPasswordByUsername: async (username) => {
    return await db('hashpwd').where({ username }).first();
  },

  getAllUsers: async () => {
    return await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
  },

  getUserById: async (id) => {
    return await db('users').where({ id }).first();
  },

  updateUserById: async (id, userData) => {
    return await db('users')
      .where({ id })
      .update(userData)
      .returning('*');
  }
};
