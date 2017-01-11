exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('locations', function (table) {
    table.increments('id');
    table.float('order')
    table.float('lat');
    table.float('lng');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('locations')
};
