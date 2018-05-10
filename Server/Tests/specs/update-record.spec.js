const { setup } = require('helpers/requestsSpecHelper')
const faker = require('faker')
let server, request

describe("Users endpoint", function () {
    beforeAll(() => {
        [server, request] = setup()
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
        beforeAll((done) => {
            request.post('/api/users').send(newUser).end((err, res) => {
                id = res.body.user_id
                done()
            })
        })
        describe("Acting as same user", function () {
            beforeAll((done) => {
                request.post('/api/users/login').send(newUserCredentials).end((err, res) => {
                    userToken = res.body.token
                    id = res.body.user._id
                    request.post(`/api/users/${id}/meals`).set({ 'Authorization': `Bearer ${userToken}` }).send(newMeal).end((err, res) => {
                            request.get(`/api/users/${id}/meals`).set({ 'Authorization': `Bearer ${userToken}` }).end((err, res) => {
                                done();
                            })
                        })
                })
            })

            fit("should update successfully ", function (done) {
                request.put(`api/users/${id}/meals/${mealId}`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(updatedMeal)
                    .end((err, res) => {
                        if(err) throw err
                        request.get(`/api/users/${id}/meals`)
                            .set({ 'Authorization': `Bearer ${userToken}` })
                            .end((err, res) => {
                                // expect(res.body.meals).toBeTruthy()
                                // expect(res.body.meals[0]).toBeTruthy()
                                // expect(res.body.meals[0].name).toBe(updatedMeal.name)
                                // expect(res.body.meals[0].numOfCalories).toBe(updatedMeal.numOfCalories)
                                // console.log(res.body.meals)
                                done();
                            })

                    })
            })

            it("should respond by 404 error when id is not provided ", function (done) {
                request.put(`api/users/${id}/meals/`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(newMeal)
                    .end((err, res) => {
                        expect(res.status).toEqual(404)
                        done();
                    })
            })

            it("should respond by 400 error when wrong id is provided ", function (done) {
                request.put(`api/users/${id}/meals/1`)
                    .set({ 'Authorization': `Bearer ${userToken}` })
                    .send(newMeal)
                    .end((err, res) => {
                        expect(res.status).toEqual(422)
                        done();
                    })
            })

        })


    })
})