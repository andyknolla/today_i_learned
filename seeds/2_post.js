
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Inserts seed entries
    knex('post').insert({
      post_title: 'Knex',
      post_content: 'I learned about knex and how cool it is',
      post_date: '2016-06-14',
      post_author_id: 1
    }),
    knex('post').insert({
      post_title: 'Express',
      post_content: 'I learned about how powerful Express.js is.  It can do lots of cool stuff. And awesome stuff too!',
      post_date: '2016-06-08',
      post_author_id: 1
    }),
    knex('post').insert({
      post_title: 'Node',
      post_content: 'My mind was blown as I tried to understand about node.js',
      post_date: '2016-06-06',
      post_author_id: 2
    })
  );
};
