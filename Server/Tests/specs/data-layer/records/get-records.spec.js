const addNewUser = require('../../../../src/data-layer/add-new-user.db')
const addBulkRecords = require('../../../../src/data-layer/add-bulk-records.db')
const getRecordsQuery = require('../../../../src/data-layer/get-records.db')
const { connectToDb } = require('../../../helpers/requestsSpecHelper')

const faker = require('faker')


fdescribe("Users endpoint", function () {
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

    describe("Adding records ", function () {
        beforeEach((done) => {
            const meals = []
            for (let i = 0; i < 50; i++) {
                meals.push({
                    name: faker.name.firstName(),
                    numOfCalories: Math.random() * 100,
                    date: new Date(+(new Date()) - Math.floor(Math.random()*10000000000))
                })
            }
            addBulkRecords(id, meals).then(x => {
                done()
            })
        })

        it('should use skip and limit correctly', (done)=>{
            const getMealsQuery = new getRecordsQuery(id, 10, 0)
            getMealsQuery.getMeals().then(x=>{
                console.log(x)
                expect(x.length).toBe(10)
                done()
            })
        })


        
    })





})