const { setup } = require('helpers/requestsSpecHelper')
const faker = require('faker')
let server, request
const API = require('helpers/api-calls')

describe("Users endpoint", function () {
    let api;
    beforeAll(() => {
        [server, request] = setup()
        api = new API(request)
    })
    afterAll(() => {
        server.close()
    })
    describe("delete meal", function () {
        const newUser = {
            name: faker.name.firstName(),
            email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
            meals: [],
            password: '456565654ds'
        }
        const newUserCredentials = {
            email: newUser.email,
            password: newUser.password
        }
        const newMeal = {
            name: 'meal1',
            numOfCalories: 600,
            date: Date.now()
        }
        let id
        let userToken
        let mealId
        beforeAll((done) => {
            request.post('/api/users').send(newUser).then(res => {
                id = res.body.user._id
                done()
            })
        })
        describe("Acting as same user", function () {
            beforeEach((done) => {
                return api.login(newUserCredentials).then(res => {
                    userToken = res.body.token
                    return api.addRecord(id, userToken, newMeal)
                }).then(() => api.getRecords(id, userToken)).then(res=>{
                    mealId = res.body.meals[0]._id
                    done()
                }).catch(err => { throw err })
            })
            it("should delete successfully ", async () => {
                await api.deleteRecord(id, userToken, mealId).expect(200)
            })
        })


    })
})
