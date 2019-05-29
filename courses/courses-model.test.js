const db = require('../data/dbConfig');
const Courses = require('./courses-model')

describe('courses model', () => {

  describe('remove()', async () => {

    beforeEach(async () => {
      await db('courses').truncate()
    })

    test('should remove the course from the db', async () => {
      const course = await Courses.insert({ name: 'TPC Sawgrass' })
      const courses = await db('courses')
      expect(courses).toHaveLength(1)

      await Courses.remove(course.id)
      const deletedCourses = await db('courses')
      expect(deletedCourses).not.toHaveLength(1)
    })

  })


  describe('insert()', () => {

    beforeEach(async () => {
      await db('courses').truncate()
    })

    test('should insert the provided course into the db', async () => {
      await Courses.insert({ name: 'Gamble Sands' })

      const courses = await db('courses')
      expect(courses).toHaveLength(1)
    })

    test('should return the course name and course id', async () => {
      const course = await Courses.insert({ name: 'Augusta National' })
      expect(course.name).toBe('Augusta National')
      expect(course.id).toBe(1)
    })


  })

})
