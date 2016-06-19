
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Inserts seed entries
    knex('comment').insert({
      comment_title: 'some title',
      comment_content: 'Heres some words about stuff',
      comment_date: '1982-10-06',
      comment_author_id: 1,
      post_id: 1
      }),
    knex('comment').insert({
      comment_title: 'Another title',
      comment_content: 'Some more words about other stuff',
      comment_date: '1985-01-21',
      comment_author_id: 2,
      post_id: 2
      }),
    knex('comment').insert({
      comment_title: 'A third title',
      comment_content: 'a third comment about lots of other stuff.  Words, words , words and more words',
      comment_date: '2001-06-18',
      comment_author_id: 2,
      post_id: 1
      })
  );
};
