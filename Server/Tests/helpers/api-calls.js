module.exports = class ApiCalls {

    constructor(request) {
        this.request = request;
    }
    login(payload) {
        return this.request.post('/api/users/login').send(payload)
    }

    signup(payload) {
        return this.request.post('/api/users').send(payload)
    }

    updateInfo(id, token, payload) {
        return this.request.put(`/api/users/${id}/info`).set({ 'Authorization': `Bearer ${token}` }).send(payload)
    }

    addRecord(id, token, payload) {
        return this.request.post(`/api/users/${id}/meals`).set({ 'Authorization': `Bearer ${token}` }).send(payload)
    }

    getRecords(id, userToken) {
        return this.request.get(`/api/users/${id}/meals`).set({ 'Authorization': `Bearer ${userToken}` })
    }

    updateRecord(id, mealId, userToken, updatedMeal) {
        return this.request.put(`/api/users/${id}/meals/${mealId}`).set({ 'Authorization': `Bearer ${userToken}` }).send(updatedMeal)
    }

    deleteRecord(id, token, mealId) {
        return this.request.delete(`/api/users/${id}/meals/${mealId}`).set({ 'Authorization': `Bearer ${token}` })
    }

    updateRole(userId, userToken, role) {
        return this.request.patch(`/api/users/${userId}/role`).set({ 'Authorization': `Bearer ${userToken}` }).send({ role })
    }

    updatePassword(id, token, payload) {
        return this.request.put(`/api/users/${id}/password`).set({ 'Authorization': `Bearer ${token}` }).send(payload)
    }



}