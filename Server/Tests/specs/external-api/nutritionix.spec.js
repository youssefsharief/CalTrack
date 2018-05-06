const { getNutriCalories } = require('src/external-apis/nutritionix')

fdescribe('nutritionix', () => {

    it("should authenticate token successfully ", function (done) {
        getNutriCalories('rice').then(x =>{
            expect(x).toBe(205.4)
            done()
        })
    })


})
