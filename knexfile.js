// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/today_i_learned_db'
  },

  production : {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
