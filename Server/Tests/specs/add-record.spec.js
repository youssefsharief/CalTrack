console.log(process.env.NODE_PATH)

const { setup } = require('Tests/helpers/requestsSpecHelper')
const faker = require('faker')
let server, request


fdescribe("Users endpoint", function () {
    beforeAll(() => {
        [server, request] = setup()

    })
    afterAll(() => {
        server.close()
    })
    describe("Add record", function () {

        const newUser = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            maxCalories: 2000,
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
            maxCalories: 2000,
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
            request.post('/users').send(newUser).end((err, res) => {
                id = res.body._id
                request.post('/users').send(newUser2).end((err, res) => {
                    done()
                })
            })
        })
        describe("Acting as same user", function () {

            beforeAll((done) => {
                request.post('/users/login').send(newUserCredentials).end((err, res) => {
                    userToken = res.body.token
                    done()
                })
            })

            it("should add successfully ", function (done) {
                request.post(`/users/${id}/meals`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(newMeal)
                    .end((err, res) => {
                        expect(res.status).toEqual(200)
                        expect(res.body.meals[0].name).toBe(newMeal.name)
                        expect(res.body.meals[0].date).toBeTruthy()
                        expect(res.body.meals[0].numOfCalories).toBe(newMeal.numOfCalories)
                        done();
                    })
            })

            it("should respond by 404 error when id is not provided ", function (done) {
                request.post(`/users/meals`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(newMeal)
                    .end((err, res) => {
                        expect(res.status).toEqual(404)
                        done();
                    })
            })

        })



        describe("Acting as different user", function () {
            beforeAll((done) => {
                request.post('/users/login').send(newUser2Credentials).end((err, res) => {
                    userToken = res.body.token
                    done()
                })
            })

            it("should not be allowed to add ", function (done) {
                request.post(`/users/${id}/meals`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(newMeal)
                    .end((err, res) => {
                        expect(res.status).toEqual(403)
                        done();
                    })
            })

            it("should respond by 404 error when id is not provided ", function (done) {
                request.post(`/users/meals`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(newMeal)
                    .end((err, res) => {
                        expect(res.status).toEqual(404)
                        done();
                    })
            })
        })

    })
})