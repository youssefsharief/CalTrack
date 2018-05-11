const { setup } = require('Tests/helpers/requestsSpecHelper')
let server, request
const API = require('helpers/api-calls')
console.log('aaaaaaaaa')
beforeAll(() => {
    [server, request] = setup()
    this.api = new API(request)
})
afterAll(() => {
    server.close()
})

