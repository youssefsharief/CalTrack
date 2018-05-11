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
	fdescribe("Logging in", function () {
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

		beforeAll((done) => {
			api.signup(newUser).then(()=> {
				done();
			})

		})

		it("should login", async () => {
			await api.login(loginPayload).expect(200)
		})

		it("should not login with wrong credentials", async () => {
			await api.login({ email: 'randomEmail@test33.com', password: '454ds65ds8ew' }).expect(401)
		})

		it("should have token", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.token).toBeTruthy()
		})
		it("should have user object", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.user).toBeTruthy()
		})
		it("should have name", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.user.name).toBeTruthy()
		})
		it("should have email", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.user.email).toBe(newUser.email)
		})
		it("should have _id", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.user._id).toBeTruthy()
		})
		it("should have role", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.user.role).toBe('regular')
		})
		it("should not have password in response", async () => {
			const res = await api.login(loginPayload)
			expect(res.body.user.password).toBeFalsy()
		})
		it("should not login in case password is incorrect", async () => {
			loginPayload.password = '12236565rew'
			await api.login(loginPayload).expect(401)
		})



	})
})