
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table) {
    table.increments();
    table.text('post_title');
    table.text('post_content');
    table.date('post_date');
    table.integer('post_author_id').references('bloguser.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
