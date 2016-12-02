
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('locations').insert({id: 1, lat:39.7392, lng:-104.9903}),
        knex('locations').insert({id: 2, lat:37.846848,lng:-111.025394}),
        knex('locations').insert({id: 3, lat:37.777042,lng:-111.620492}),
        knex('locations').insert({id: 4, lat:33.4484,lng: -112.0740}),
        knex('locations').insert({id: 5, lat:32.746152,lng: -117.159537}),
        knex('locations').insert({id: 6, lat:34.101509, lng:-118.339386}),
        knex('locations').insert({id: 7, lat:36.177560, lng:-121.698901}),
        knex('locations').insert({id: 8, lat:37.787611, lng:-122.413868}),
      ]);
    });
};
