exports.seed = function(knex, Promise) {
  return knex("bloguser").del()
  .then(function () {
    return knex("comment").del()
  })
  .then(function () {
    return knex("post").del()
  })
};
