const { setup } = require('Tests/helpers/requestsSpecHelper')
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
    describe("Add record", function () {

        const newUser = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            maxCalories: 2000, isTrackingDisplayed: true,
            meals: [],
            password: '456565654ds'
        }
        const newUserCredentials = {
            email: newUser.email,
            password: newUser.password
        }
        const newUser2 = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            maxCalories: 2000, isTrackingDisplayed: true,
            meals: [],
            password: '3223565689re'
        }
        const newUser2Credentials = {
            email: newUser2.email,
            password: newUser2.password
        }
        const newMeal = {
            name: 'meal1',
            numOfCalories: 600,
            date: Date.now()
        }
        let id
        let userToken
        beforeAll((done) => {
            api.signup(newUser).then(res => {
                id = res.body.user._id
                return api.signup(newUser2)
            }).then(() => done())
        })
        describe("Acting as same user", function () {
            beforeAll((done) => {
                api.login(newUserCredentials).then(res => {
                    userToken = res.body.token
                    done()
                })
            })

            it("should add successfully ", function (done) {
                api.addRecord(id, userToken, newMeal).then(res => {
                    expect(res.status).toEqual(200)
                    done();
                })
            })
        })

        describe("Acting as different user", function () {
            beforeAll((done) => {
                api.login(newUser2Credentials).then(res => {
                    userToken = res.body.token
                    done()
                })
            })

            it("should not be allowed to add ", function (done) {
                api.addRecord(id, userToken, newMeal).then(res => {
                    expect(res.status).toEqual(403)
                    done();
                })
            })
        })
    })
})