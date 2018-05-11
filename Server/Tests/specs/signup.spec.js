const { setup } = require('helpers/requestsSpecHelper')
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
	describe("Sign up", function () {
		const newUser = {
			name: faker.name.firstName(),
			email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
			meals:[],
			password: '456565654ds'
		}

		it("should add user", async ()=> {
			await api.signup(newUser).expect(201)
		})
		it("should not allow duplicate emails", async ()=> {
			await api.signup(newUser).expect(409)
		})
		it("should respond by error message in case password have no letter", async ()=> {
			newUser.password = '12236565'
			await api.signup(newUser).expect(422)
		})
		
		it("should respond by error message in case password have no number", async ()=> {
			newUser.password = 'herogymisthe'
			await api.signup(newUser).expect(422)
		})
		it("should respond by error message in case password is not lengthy enough", async ()=> {
			newUser.password = 'i5o'
			await api.signup(newUser).expect(422)
		})

		it("should respond by error message in case name is not provided", async ()=> {
			newUser.name = undefined
			await api.signup(newUser).expect(422)
		})
		it("should respond by error message in case email is not provided", async ()=> {
			newUser.email = undefined
			await api.signup(newUser).expect(422)
		})
		it("should respond by error message in case password is not provided", async ()=> {
			newUser.password = undefined
			await api.signup(newUser).expect(422)
		})
		it("should respond by error message in case email do not have the appropriate format", async ()=> {
			newUser.email = 'thisIsNOTanEmail'
			await api.signup(newUser).expect(422)
		})

        

    })
})