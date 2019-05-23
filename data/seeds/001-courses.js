
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        { name: 'Pebble Beach' },
        { name: 'Bethpage Black' },
        { name: 'Oak Hill' },
        { name: 'Bandon Dunes' },

      ]);
    });
};
