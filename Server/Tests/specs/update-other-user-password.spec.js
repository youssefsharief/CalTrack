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
    describe("Updating other user password", function () {
        const newUser = {
            name: faker.name.firstName(),
            email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
            meals: [],
            password: '1234567a'
        }
        const loginPayload = {
            email: newUser.email,
            password: newUser.password
        }
        const updatePasswordPayload = {
            newPassword: '1234567b'
        }
        let user
        let id
        let token
        beforeAll(async () => {
            const res = await api.signup(newUser)
            user = res.body.user
            id = user._id
            token = res.body.token

            // const res = await api.login(loginPayload)
        })

        it("should update password and be able to login afterwards", async () => {
            await api.updatePassword(id, token, updatePasswordPayload).expect(200)
            await api.login(loginPayload).expect(401)
            await api.login({ email: loginPayload.email, password: updatePasswordPayload.newPassword }).expect(200)
        })

    })
})