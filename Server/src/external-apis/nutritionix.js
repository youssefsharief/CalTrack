const NutritionixClient = require('nutritionix');

const nutritionix = new NutritionixClient({
    appId: process.env.nutritionixAppId,
    appKey: process.env.nutritionixAppKey,
});


module.exports = {
    getNutriCalories(food) {
        return nutritionix.natural(food).then(data => data.results[0].nutrients.find(item=> item.usda_tag==='ENERC_KCAL').value)
            .catch((err) => console.log(err));
    }
} 