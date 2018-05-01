const mongoose = require('mongoose')
const Schema = mongoose.Schema


const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date:{
        type: Schema.Types.Date,
        required: true
    },
    numOfCalories: {
        type: Number,
        required: true
    }
})

module.exports = mealSchema