const addNewUser = require('../../../../src/data-layer/add-new-user.db')
const addRecord = require('../../../../src/data-layer/add-record.db')
const { connectToDb } = require('../../../helpers/requestsSpecHelper')
const getUserRecordsById = require('../../../../src/data-layer/get-user-records-by-id.db')
const deleteRecord = require('../../../../src/data-layer/remove-record.db')
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
        done()

            
        // expect(updated.meals[0].gmtTimeDifference).toBe(5)
        // expect(updated.meals[0].name).toBe(updatedRecord.name)
        // expect(updated.meals[0].city).toBe(updatedRecord.city)
        
    })





})