
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Inserts seed entries
    knex('bloguser').insert({user_name: 'Mike'}),
    knex('bloguser').insert({user_name: 'Randy'}),
    knex('bloguser').insert({user_name: 'Bill'})
  );
};
