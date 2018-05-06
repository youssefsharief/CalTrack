const addNewUser = require('data-layer/user/add-new-user.db')
const addRecord = require('data-layer/record/add-record.db')
const { connectToDb } = require('helpers/requestsSpecHelper')

const faker = require('faker')


describe("Users endpoint", function () {
    beforeAll(() => {
        connectToDb()
    })
    const payload = {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        meals: [],
        password: '1234567a'
    }
    let id 
    beforeAll((done) => {
        addNewUser(payload, 'regular').then(x => {
            expect(x.name).toBe(payload.name)
            expect(x.email).toBe(payload.email)
            id = x._id
            done()
        })
    })

    it("should add new record ", function (done) {
        const newMeal = {
            name: 'meal1',
            numOfCalories: 600,
            date: Date.now()
        }

        addRecord(id, newMeal).then(x=>{
            expect(x.meals.length).toBe(1)
            expect(x.meals[0].name).toBe(newMeal.name)
            expect(x.meals[0].date).toBeTruthy()
            expect(x.meals[0].numOfCalories).toBe(newMeal.numOfCalories)
            done()
        })
    })





})