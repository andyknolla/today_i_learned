
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bloguser', function(table) {
    table.increments();
    table.text('user_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bloguser');
};
