const addNewUser = require('../../../../src/data-layer/add-new-user.db')
const addRecord = require('../../../../src/data-layer/add-record.db')
const { connectToDb } = require('../../../helpers/requestsSpecHelper')
const getUserRecordsById = require('../../../../src/data-layer/get-user-records-by-id.db')
const updateRecord = require('../../../../src/data-layer/update-record.db')
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
            const newMeal = {
                name: 'meal1',
                numOfCalories: 600,
                date: Date.now()
            }
            addRecord(id, newMeal).then(x => {
                expect(x.meals.length).toBe(1)
                expect(x.meals[0].name).toBe(newMeal.name)
                expect(x.meals[0].date).toBeTruthy()
                expect(x.meals[0].numOfCalories).toBe(newMeal.numOfCalories)
                done()
            })
        })
    })

    it("should update record ", async function (done) {      
        const updatedMeal = {
            name: 'meal1',
            numOfCalories: 600,
            date: Date.now()
        }
         updateRecord(id, mealId, updatedMeal).then(x=>{
            done()
            
        })
        
        const u = await getUserRecordsById(id)
        
            
        // expect(updated.meals[0].gmtTimeDifference).toBe(5)
        // expect(updated.meals[0].name).toBe(updatedRecord.name)
        // expect(updated.meals[0].city).toBe(updatedRecord.city)
        
    })





})