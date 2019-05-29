const db = require('../data/dbConfig');

module.exports = {
  insert,
  remove
}

async function insert(course) {
  const [id] = await db('courses').insert(course, 'id')
  return db('courses')
    .where({ id })
    .first()
}

function remove(id) {
  return db('courses')
    .where({ id })
    .del()
}