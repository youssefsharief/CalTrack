const { setup } = require('../helpers/requestsSpecHelper')
const faker = require('faker')
let server, request

describe("Users endpoint", function () {
    beforeAll(() => {
        [server, request] = setup()

    })
    afterAll(() => {
        server.close()
    })
    describe("delete meal", function () {

        const newUser = {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            meals: [],
            password: '456565654ds'
        }
        const newUserCredentials = {
            email: newUser.email,
            password: newUser.password
        }
        const newMeal = {
            name: 'meal1',
            city: 'Cairo',
            gmtTimeDifference: 6
        }
        let id
        let userToken
        let mealId
        beforeAll((done) => {
            request.post('/users').send(newUser).end((err, res) => {
                id = res.body._id
                done()
            })
        })
        describe("Acting as same user", function () {
            beforeAll((done) => {
                request.post('/users/login').send(newUserCredentials).end((err, res) => {
                    userToken = res.body.token
                    request.post(`/users/${id}/meals`)
                        .set({ 'Authorization': `Bearer ${userToken}` })
                        .send(newMeal)
                        .end((err, res) => {
                            mealId = res.body.meals[0]._id
                            done();
                        })
                })
            })

            it("should delete successfully ", function (done) {
                request.delete(`/users/${id}/meals/${mealId}`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .end((err, res) => {
                        expect(res.status).toEqual(200)
                        expect(res.body.meals.length).toEqual(0)
                        done();
                    })
            })

            it("should respond by 404 error when id is not provided ", function (done) {
                request.delete(`/users/${id}/meals/`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .end((err, res) => {
                        expect(res.status).toEqual(404)
                        done();
                    })
            })

            it("should respond by 400 error when wrong id is provided ", function (done) {
                request.delete(`/users/${id}/meals/1`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .end((err, res) => {
                        expect(res.status).toEqual(422)
                        done();
                    })
            })

        })


    })
})