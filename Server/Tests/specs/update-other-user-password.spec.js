const { setup } = require('helpers/requestsSpecHelper')
const faker = require('faker')
const { adminCredentials } = require('constants/credentials')


let server, request

describe("Users endpoint", function () {
    beforeAll(() => {
        [server, request] = setup()
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
        let adminToken
        beforeAll((done) => {
            request.post('/api/users').send(newUser).end((err, res) => {
                request.post('/api/users/login').send(loginPayload).end((err, res) => {
                    user = res.body.user
                    id = user._id
                    request.post('/api/users/login').send(adminCredentials).end((err, res) => {
                        adminToken = res.body.token
                        done();
                    })
                })
            })


        })



        it("should update password and be able to login afterwards", function (done) {
            request.put(`api/users/${id}/password`)
                .set({ 'Authorization': `Bearer ${adminToken}` })
                .send(updatePasswordPayload)
                .end((err, res) => {
                    expect(res.status).toBe(200)
                    request.post('/api/users/login').send(loginPayload).end((err, res) => {
                        expect(res.status).toBe(401)
                        request.post('/api/users/login').send({ email: loginPayload.email, password: updatePasswordPayload.newPassword }).end((err, res) => {
                            expect(res.status).toBe(200)
                            done();
                        })
                    })
                })
        })

        it("should return 404 if no id is provided", function (done) {
            request.put(`api/users/password`)
                .set({ 'Authorization': `Bearer ${adminToken}` })
                .send(updatePasswordPayload)
                .end((err, res) => {
                    expect(res.status).toBe(404)
                    done();
                })
        })
    })
})