const addNewUser = require('src/data-layer/user/add-new-user.db')
const getUserByEmail = require('src/data-layer/user/get-user-by-email')
const GetUserQuery = require('src/data-layer/user/get-users.db')
const { connectToDb } = require('helpers/requestsSpecHelper')
const faker = require('faker')


describe('users endpoint', function () {
    beforeAll(() => {
        connectToDb()
    })
    const payload = {
        name: faker.name.firstName(),
        email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
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

    it('should GET user by email ', function (done) {
        getUserByEmail(payload.email).then(x => {
            expect(x.email).toBe(payload.email)
            expect(x.name).toBe(payload.name)
            done()
        }).catch(err => { throw err })
    })

    it('should GET all users ', function (done) {
        const getUserQuery = new GetUserQuery(10, 0, '')
        getUserQuery.getUsers().then(x => {
            expect(x.length).toBeTruthy()
            expect(x[0].name).toBeTruthy()
            expect(x[0].role).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })

    it('should GET regular users only ', function (done) {
        const getUserQuery = new GetUserQuery(10, 0, 'regular')
        getUserQuery.getUsers().then(x => {
            expect(x.length).toBeTruthy()
            expect(x[0].name).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })

    it('should GET all users count', function (done) {
        const getUserQuery = new GetUserQuery(10, 0, '')
        getUserQuery.getUsersCount().then(x => {
            expect(Number.isInteger(x)).toBe(true)
            expect(x).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })


    it('should GET regular users count ', function (done) {
        const getUserQuery = new GetUserQuery(10, 0, 'regular')
        getUserQuery.getUsersCount().then(x => {
            expect(Number.isInteger(x)).toBe(true)
            expect(x).toBeTruthy()
            done()
        }).catch(err => { throw err })
    })






})