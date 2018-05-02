import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserCredentials } from 'app/shared/models/userCredentials';
import { User } from 'app/shared/models/user.model';
import { UserInfo } from 'app/shared/models/userInfo.model';
import { Meal } from 'app/shared/models/meal.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(
        private http: HttpClient,
    ) { }

    login(item: UserCredentials) {
        return this.http.post<{ token: string, user: User }>('users/login', item, )
    }

    signup(item: User) {
        return this.http.post('users', { email: item.email, password: item.password, meals: [], name: item.name })
    }

    signupSecurely(item: User) {
        return this.http.post('users/secure', { email: item.email, password: item.password, meals: [], name: item.name }, )
    }

    activateFromBackEnd(code: string, email: string) {
        return this.http.post('activation', { code, email })
    }

    updateUserInfo(id: string, data: UserInfo) {
        return this.http.put(`users/${id}/info`, data, )
    }

    deleteUser(id: string) {
        return this.http.delete(`users/${id}`)
    }

    getUsers({ skip = 0, searchTerm = '', roleFilter = '' }) {
        const params = new HttpParams().set('skip', skip.toString()).set('searchFilter', searchTerm).append('roleFilter', roleFilter);
        return this.http.get<{ users: User[], count: number }>('users', { params })
    }

    getUserDetails(userId: string): Observable<User> {
        return this.http.get<User>(`users/${userId}`)
    }

    getMeals(userId: string, { skip = 0, startDate = '', endDate = '', startTime = '', endTime = '' }) {
        const params = new HttpParams()
            .set('skip', skip.toString())
            .set('startDate', startDate)
            .set('endDate', endDate)
            .set('startTime', startTime)
            .set('endTime', endTime)
        return this.http.get<{ meals: Meal[], count: number }>(`users/${userId}/meals`)
    }

    updateMeal(userId: string, mealId: string, data: Meal) {
        return this.http.put(`users/${userId}/meals/${mealId}`, data)
    }

    addMeal(userId: string, data: Meal) {
        return this.http.post<User>(`users/${userId}/meals`, data)
    }

    deleteMeal(userId: string, mealId: string) {
        return this.http.delete(`users/${userId}/meals/${mealId}`)
    }

    assignRole(id: string, data: { role: string }): Observable<any> {
        return this.http.patch(`users/${id}/role`, data)
    }

    forgottenPassword(email: string): Observable<any> {
        return this.http.post('password_recovery_requests', { email })
    }

    changePasswordUsingOldPassword({ oldPassword, newPassword }: { oldPassword: string, newPassword: string }): Observable<any> {
        return this.http.put('password', { oldPassword, newPassword }, )
    }

    changeOtherUserPassword(id: string, newPassword: string) {
        return this.http.put(`users/${id}/password`, { newPassword }, )
    }

    changeMyPasswordUsingRecoveryCode({ recoveryCode, email, newPassword }: { recoveryCode: string, email: string, newPassword: string }) {
        return this.http.post('users/recovery_code', { recoveryCode, email, newPassword }, )
    }

    activateUserAdministratively(id: string) {
        return this.http.patch(`activation/administration/${id}`, {}, )
    }

    inviteUser(email: string, url: string) {
        return this.http.post(`users/invite`, { email, url }, )
    }

}


