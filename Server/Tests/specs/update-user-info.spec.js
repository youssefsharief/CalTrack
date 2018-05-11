const { setup } = require('helpers/requestsSpecHelper')
const faker = require('faker')
const API = require('helpers/api-calls')


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
    describe("Updating user info", function () {
        const newUser = {
            name: faker.name.firstName(),
            email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
            meals: [],
            password: '456565654ds'
        }
        const loginPayload = {
            email: newUser.email,
            password: newUser.password
        }
        const updatedInfoPayload = {
            name: faker.name.firstName(),
            maxCalories: 3000,
            isTrackingDisplayed: true
        }
        let token
        let user
        beforeAll(async () => {
            const res = await api.signup(newUser).then(() => api.login(loginPayload))
            token = res.body.token
            user = res.body.user
        })

        fit("should update", async () => {
            const res = await api.updateInfo(user._id, token, updatedInfoPayload).catch(err => { throw err })
            expect(res.status).toBe(200)
            expect(res.body.name).toBe(updatedInfoPayload.name)
            expect(res.body.maxCalories).toBe(updatedInfoPayload.maxCalories)
            expect(res.body.isTrackingDisplayed).toBe(updatedInfoPayload.isTrackingDisplayed)
        })
    })
})