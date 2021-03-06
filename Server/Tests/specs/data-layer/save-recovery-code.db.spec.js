const saveRecoveryCode = require('src/data-layer/user/save-recovery-code.db')
const addNewUser = require('src/data-layer/user/add-new-user.db')
const { connectToDb } = require('helpers/requestsSpecHelper')
const generateRandomCode = require('src/services/generate-random-code').generateRandomCode
const getUserByEmail = require('src/data-layer/user/get-user-by-email')

const faker = require('faker')


describe('recovery code', function () {
    beforeAll(() => {
        connectToDb()
    })
    const payload = {
        name: faker.name.firstName(),
        email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
        meals: [],
        password: '1234567a'
    }
    let id 
    beforeAll((done) => {
        addNewUser(payload, 'regular').then(x => {
            expect(x.name).toBe(payload.name)
            expect(x.email).toBe(payload.email)
            id = x._id
            done()
        })
    })

    it('should save recovery code ', async function (done) {
        const res = await saveRecoveryCode(payload.email, generateRandomCode())
        expect(res).toBeTruthy()
        const user = await getUserByEmail(payload.email)
        expect(user).toBeTruthy()
        done()
    })







})