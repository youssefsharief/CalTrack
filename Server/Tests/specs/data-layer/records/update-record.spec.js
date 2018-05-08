// const addNewUser = require('data-layer/user/add-new-user.db')
// const addRecord = require('data-layer/record/add-record.db')
// const { connectToDb } = require('helpers/requestsSpecHelper')
// const updateRecord = require('data-layer/record/update-record.db')
// const faker = require('faker')
// const getRecord = require('data-layer/record/get-record.db')


// describe("Users endpoint", function () {
//     beforeAll(() => {
//         connectToDb()
//     })
//     const payload = {
//         name: faker.name.firstName(),
//         email: faker.internet.email(), maxCalories: 2000, isTrackingDisplayed: true,
//         meals: [],
//         password: '1234567a'
//     }
//     let id
//     let mealId
//     beforeAll((done) => {
//         addNewUser(payload, 'regular').then(x => {
//             expect(x.name).toBe(payload.name)
//             expect(x.email).toBe(payload.email)
//             id = x._id
//             const newMeal = {
//                 name: 'meal1',
//                 numOfCalories: 600,
//                 date: Date.now()
//             }
//             addRecord(id, newMeal).then(x => {
//                 console.log(x)
//                 expect(x.meals.length).toBe(1)
//                 expect(x.meals[0].name).toBe(newMeal.name)
//                 expect(x.meals[0].date).toBeTruthy()
//                 expect(x.meals[0].numOfCalories).toBe(newMeal.numOfCalories)
//                 done()
//             })
//         })
//     })

//     it("should update record ", async function (done) {      
//         // const updatedMeal = {
//         //     name: 'meal1',
//         //     numOfCalories: 600,
//         //     date: Date.now(),
//         // }
//         //  updateRecord(id, mealId, updatedMeal).then(x=>{
//         //      console.log(x)
//         //     getRecord(id, mealId).then(x => {
//         //         expect(x).toBeTruthy()
//         //         expect(x.name).toBe(updatedMeal.name)
//         //         expect(x.numOfCalories).toBe(updatedMeal.numOfCalories)
//         //         done()
//         //     })
            
//         // })
//         done()
//     })





// })