const { setup } = require('Tests/helpers/requestsSpecHelper')
let server, request
const API = require('helpers/api-calls')

beforeAll(() => {
    [server, request] = setup()
    API.saveRequestObject(request)
})
afterAll(() => {
    server.close()
})

