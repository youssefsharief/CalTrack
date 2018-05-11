const { setup } = require('Tests/helpers/requestsSpecHelper')
const faker = require('faker')
const { adminCredentials, managerCredentials } = require('constants/credentials')
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
    describe("Updating user role", function () {
        let adminToken
        let newUserId
        beforeAll((done) => {
            // Login as super admin

            const newUser = {
                name: faker.name.firstName(),
                email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
                meals: [],
                password: '456565654ds'
            }
            api.signup(newUser).then(res => {
                newUserId = res.body.user._id
                done();
            })
        })

        describe('Acting as an admin', () => {
            beforeAll((done) => {
                api.login(adminCredentials).then(res => {
                    adminToken = res.body.token
                    done()
                })
            })
            it("should not allow unauthenticated users", async ()=> {
                await api.updateRole(newUserId, 'dsad', 'manager').expect(401)
            })

            it("should update role as manager ", async ()=> {
                await api.updateRole(newUserId, adminToken, 'manager').expect(200)
            })

            it("should update role as admin ", async ()=> {
                await api.updateRole(newUserId, adminToken, 'admin').expect(200)
            })

            it("should update role as regular ", async ()=> {
                await api.updateRole(newUserId, adminToken, 'regular').expect(200)
            })

            it("should return 422 if no id is provided", async () => {
                await api.updateRole(null, adminToken, 'admin').expect(422)
            })
        })

        describe('Acting as a manager', () => {
            let managerToken
            beforeAll((done) => {
                api.login(managerCredentials).then(res => {
                    managerToken = res.body.token
                    done()
                })
            })

            it("should not update role ", async ()=> {
                await api.updateRole(newUserId, managerToken, 'regular').expect(403)
            })
        })
    })
})