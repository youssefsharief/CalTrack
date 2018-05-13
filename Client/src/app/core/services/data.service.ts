import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserCredentials } from 'app/shared/models/userCredentials';
import { User } from 'app/shared/models/user.model';
import { Meal } from 'app/shared/models/meal.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {
    constructor(
        private http: HttpClient,
    ) { }

    login(item: UserCredentials) {
        return this.http.post<{ token: string, user: User }>('users/login', item )
    }

    signup(item: User) {
        return this.http.post<{ token: string, user: User }>('users', item)
    }

    signupSecurely(item: User) {
        return this.http.post('users/secure', item)
    }

    activateFromBackEnd(code: string, email: string) {
        return this.http.post<{ token: string, user: User }>('activation', { code, email })
    }

    updateUserInfo(id: string, data) {
        return this.http.put(`users/${id}/info`, data )
    }

    deleteUser(id: string) {
        return this.http.delete(`users/${id}`)
    }

    getUsers({ skip = 0, searchTerm = '', roleFilter = '' }): Observable<{ users: User[], count: number }> {
        const params = new HttpParams().set('skip', skip.toString()).set('searchFilter', searchTerm).append('roleFilter', roleFilter);
        return this.http.get<{ users: User[], count: number }>('users', { params })
    }

    getUserDetails(userId: string): Observable<User> {
        return this.http.get<User>(`users/${userId}`)
    }

    getMeals(userId: string, { skip = 0, startDate = '', endDate = '', startTime = '', endTime = '' }): Observable<{ meals: Meal[], count: number }> {
        let params = new HttpParams()
            .set('skip', skip.toString())
        if (startDate) {
            params = params.append('startDate', startDate)
        }
        if (endDate) {
            params = params.append('endDate', endDate)
        }
        if (startTime) {
            params = params.append('startTime', startTime)
        }
        if (endTime) {
            params = params.append('endTime', endTime)
        }
        return this.http.get<{ meals: Meal[], count: number }>(`users/${userId}/meals`, { params })
    }

    getMeal(userId: string, mealId) {
        return this.http.get<Meal>(`users/${userId}/meals/${mealId}`)
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
        return this.http.post('recovery_code_requests', { email })
    }

    changePasswordUsingOldPassword({ oldPassword, newPassword }: { oldPassword: string, newPassword: string }): Observable<any> {
        return this.http.patch('password', { oldPassword, newPassword } )
    }

    changeOtherUserPassword(id: string, newPassword: string) {
        return this.http.patch(`users/${id}/password`, { newPassword } )
    }

    changeMyPasswordUsingRecoveryCode({ recoveryCode, email, newPassword }: { recoveryCode: string, email: string, newPassword: string }) {
        return this.http.post('recovery_code', { recoveryCode, email, newPassword } )
    }

    activateUserAdministratively(id: string) {
        return this.http.patch(`users/${id}/activation`, {} )
    }

    inviteUser(email: string, url: string) {
        return this.http.post(`users/invite`, { email, url } )
    }

    oAuthFacebook(access_token: string) {
        return this.http.post<{ token: string, user: User }>(`oauth/facebook`, { access_token } )
    }

    oAuthGoogle(access_token: string) {
        return this.http.post<{ token: string, user: User }>(`oauth/google`, { access_token } )
    }

    connectFacebook(access_token: string) {
        return this.http.post<User>(`connections/facebook`, { access_token } )
    }

    connectGoogle(access_token: string) {
        return this.http.post<User>(`connections/google`, { access_token } )
    }

    connectLocalLogin(payload) {
        return this.http.post<User>(`connections/local`, payload )
    }

    connectLocalLoginSecurely(payload) {
        return this.http.post<User>(`connections/local/secure`, payload )
    }

    disconnectFacebook() {
        return this.http.delete<User>(`connections/facebook`)
    }

    disconnectGoogle() {
        return this.http.delete<User>(`connections/google`)
    }

    disconnectLocalLogin() {
        return this.http.delete<User>(`connections/local`)
    }

    getTodaysIntake(userId): Observable<number> {
        return this.http.get<number>(`users/${userId}/meals/calories_today`)
    }

}


