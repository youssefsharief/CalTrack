const addNewUser = require('src/data-layer/user/add-new-user.db')
const getUserByEmail = require('src/data-layer/user/get-user-by-email')
const GetUserQuery = require('src/data-layer/user/get-users.db')
const { connectToDb } = require('helpers/requestsSpecHelper')
const faker = require('faker')


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
    beforeAll((done) => {
        addNewUser(payload, 'regular').then(x => {
            expect(x.name).toBe(payload.name)
            expect(x.email).toBe(payload.email)
            done()
        })
    })

    it("should GET USER BY EMAIL ", function (done) {
        getUserByEmail(payload.email).then(x => {
            expect(x.email).toBe(payload.email)
            expect(x.name).toBe(payload.name)
            done()
        }).catch(err => { throw err })
    })

    it("should GET All Users ", function (done) {
        const getUserQuery = new GetUserQuery(10, 0, '')
        getUserQuery.getUsers().then(x => {
            expect(x.length).toBeTruthy()
            expect(x[0].name).toBeTruthy()
            expect(x[0].email).toBeTruthy()
            expect(x[0].role).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })

    it("should GET All Regular Users ", function (done) {
        const getUserQuery = new GetUserQuery(10, 0, 'regular')
        getUserQuery.getUsers().then(x => {
            expect(x.length).toBeTruthy()
            expect(x[0].name).toBeTruthy()
            expect(x[0].email).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })

    it("should GET All Users count", function (done) {
        const getUserQuery = new GetUserQuery(10, 0, '')
        getUserQuery.getUsersCount().then(x => {
            expect(Number.isInteger(x)).toBe(true)
            expect(x).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })


    it("should GET All Regular Users count ", function (done) {
        const getUserQuery = new GetUserQuery(10, 0, 'regular')
        getUserQuery.getUsersCount().then(x => {
            expect(Number.isInteger(x)).toBe(true)
            expect(x).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })






})