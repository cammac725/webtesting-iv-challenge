
exports.up = function (knex, Promise) {
  return knex.schema.createTable('courses', tbl => {
    tbl.increments()
    tbl
      .string('name', 255)
      .notNullable()
      .unique()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('courses')
};
