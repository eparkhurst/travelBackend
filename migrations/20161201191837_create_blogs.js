exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('blogs', function (table) {
    table.increments('id');
    table.string('title');
    table.text('text');
    table.integer('location_id')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blogs')
};
