const getUserByAttribute = require('../data-layer/user/get-user-by-attribute.db')
const clearUnneededDataFromPayload = require('./clear-unneeded-data')
const addNewUser = require('../data-layer/user/add-new-user.db')
const ROLES = require('../config/rolesConstants')
const { getToken } = require('../core/authentication')

module.exports = class SocialAuth {
    constructor(id, name, idKey) {
        this.id = id;
        this.name = name
        this.idKey = idKey
    }

    action() {
        return new Promise((resolve, reject) => {
            return getUserByAttribute({[this.idKey]: this.id}).then(existingUser => {
                if (existingUser) {
                    resolve(this._getPayload(existingUser))
                } else {
                    return this._addUser(this.name, this.idKey, this.id).then(user => resolve(this._getPayload(user)).catch(err => reject(err)))
                }
            }).catch(err => reject(err))
        })
    }

    _addUser(name, idKey, idValue) {
        const user = {
            name: name,
            meals: [],
            active: true,
            maxCalories: 2250,
            isTrackingDisplayed: true,
        }
        user[idKey] = idValue
        return addNewUser(user, ROLES.regular)
    }
    
    _getPayload(user) {
        return { user: clearUnneededDataFromPayload(user), token: getToken(user._id, user.role) }
    }
}