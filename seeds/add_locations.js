
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      return knex('locations').insert({order:1,lat:39.7392, lng:-104.9903})
    })
    .then(function () {
      return knex('locations').insert({order:2,lat:39.153898, lng:-108.733090})
    })
    .then(function () {
      return knex('locations').insert({order:3,lat:37.846848,lng:-111.025394})
    })
    .then(function () {
      return knex('locations').insert({order:4,lat:37.777042,lng:-111.620492})
    })
    .then(function () {
      return knex('locations').insert({order:5,lat:33.4484,lng: -112.0740})
    })
    .then(function () {
      return knex('locations').insert({order:6,lat:32.746152,lng: -117.159537})
    })
    .then(function () {
      return knex('locations').insert({order:7,lat:34.101509, lng:-118.339386})
    })
    .then(function () {
      return knex('locations').insert({order:8,lat:36.177560, lng:-121.698901})
    })
    .then(function () {
      return knex('locations').insert({order:9,lat:37.787611, lng:-122.413868})
    })
    .then(function () {
      return knex('locations').insert({order:10,lat:41.2132, lng:-124.0046})
    })
    .then(function () {
      return knex('locations').insert({order:11,lat:45.5231, lng:-122.6765})
    })
};


// knex('locations').insert({order:2,lat:39.153898, lng:-108.733090}),
// knex('locations').insert({order:3,lat:37.846848,lng:-111.025394}),
// knex('locations').insert({order:4,lat:37.777042,lng:-111.620492}),
// knex('locations').insert({order:5,lat:33.4484,lng: -112.0740}),
// knex('locations').insert({order:6,lat:32.746152,lng: -117.159537}),
// knex('locations').insert({order:7,lat:34.101509, lng:-118.339386}),
// knex('locations').insert({order:8,lat:36.177560, lng:-121.698901}),
// knex('locations').insert({order:9,lat:37.787611, lng:-122.413868}),
// ]);
