module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemon-node'
  },

  production: {
    client: 'postgresql',
    connection: ''
  }
};
