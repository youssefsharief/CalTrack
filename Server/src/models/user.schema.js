const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mealSchema = require('./meal.schema')
const ROLES = require('../config/rolesConstants')

const roles_enum = {
    values: [ROLES.regular, ROLES.manager, ROLES.admin],
    message: '`{VALUE}` is not a valid user role.'
};

const usersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: false, unique:true },
    password: { type: String, required: true },
    role: { type: String, enum: roles_enum, required: true, default: 'regular' },
    meals: [mealSchema],
    recoveryCode: String,
    active: { type: Boolean, required: true, default: false },
    activationCode: String,
    maxCalories: { type: Number, required: true },
    isTrackingDisplayed: { type: Boolean, required: true },
    googleId: { type: String, required: false, unique:true },
});

module.exports = usersSchema