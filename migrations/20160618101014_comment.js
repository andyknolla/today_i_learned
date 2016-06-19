
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', function(table) {
    table.increments();
    table.text('comment_title');
    table.text('comment_content');
    table.date('comment_date');
    table.integer('comment_author_id').references('bloguser.id');
    table.integer('post_id').references('post.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment');
};
