require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/code-road-trip'
  },

  production: {
    client: 'pg',
    connection:process.env.DATABASE_URL
  }
};
