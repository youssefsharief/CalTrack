const addNewUser = require('data-layer/user/add-new-user.db')
const addRecord = require('data-layer/record/add-record.db')
const { connectToDb } = require('helpers/requestsSpecHelper')
const deleteRecord = require('data-layer/record/remove-record.db')
const faker = require('faker')
const getRecord = require('data-layer/record/get-record.db')


describe("Users endpoint", function () {
    beforeAll(() => {
        connectToDb()
    })
    const payload = {
        name: faker.name.firstName(),
        email: faker.internet.email(), maxCalories: 2000,
        meals: [],
        password: '1234567a'
    }
    let id
    let mealId
    beforeAll((done) => {
        addNewUser(payload, 'regular').then(x => {
            expect(x.name).toBe(payload.name)
            expect(x.email).toBe(payload.email)
            id = x._id
            const newRecord = {
                name: 'meal1',
                numOfCalories: 600,
                date: Date.now()
            }
            addRecord(id, newRecord).then(x => {
                expect(x.meals.length).toBe(1)
                expect(x.meals[0].name).toBe(newRecord.name)
                expect(x.meals[0].date).toBeTruthy()
                expect(x.meals[0].numOfCalories).toBe(newRecord.numOfCalories)
                done()
            })
        })
    })

    it("should delete record ", async function (done) {      
        await deleteRecord(id, mealId)
        getRecord(id, mealId).then(x => {
            expect(x).toBeFalsy()
            done()
        })
    })





})