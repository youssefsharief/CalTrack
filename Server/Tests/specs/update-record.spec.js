const { setup } = require('helpers/requestsSpecHelper')
const API = require('helpers/api-calls')
const faker = require('faker')
let server, request

describe("Users endpoint", function () {
    let api;
    beforeAll(() => {
        [server, request] = setup()
        api = new API(request)
    })
    afterAll(() => {
        server.close()
    })
    describe("update meal", function () {

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
        const updatedMeal = {
            name: 'me2',
            numOfCalories: 900,
            date: Date.now()
        }
        let id
        let userToken
        let mealId
        beforeAll(async () => {
            const res = await api.signup(newUser)
            id = res.body.user_id
        })
        describe("Acting as same user", function () {
            beforeAll((done) => {
                api.login(newUserCredentials).then(loginRes => {
                    userToken = loginRes.body.token
                    id = loginRes.body.user._id
                    return api.addRecord(id, userToken, newMeal)
                }).then(() =>
                    api.getRecords(id, userToken)).then(res => {
                        expect(res.status).toBe(200)
                        mealId = res.body.meals[0]._id
                        done()
                    }).catch(err => { throw err })
            })

            it("should update successfully ", async () => {
                await api.updateRecord(id, mealId, userToken, updatedMeal).expect(200)
                const res = await api.getRecords(id, userToken).expect(200)
                expect(res.body.meals).toBeTruthy()
                expect(res.body.meals[0]).toBeTruthy()
                expect(res.body.meals[0].name).toBe(updatedMeal.name)
                expect(res.body.meals[0].numOfCalories).toBe(updatedMeal.numOfCalories)
            })

            it("should respond by 422 error when wrong id is provided ", async () => {
                await api.updateRecord(id, '1', userToken, updatedMeal).expect(422)
            })
        })
    })
})


