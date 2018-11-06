import { Injectable } from '@angular/core';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { of, Observable } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class SelectedUserService {

    private selectedUser: User

    constructor(
        private dataService: DataService
    ) { }
    public set(user: User): void {
        this.selectedUser = user;
    }

    public get(): User {
        return this.selectedUser
    }

    public getUserWithProbableDataFetch(params: Observable<any>): Observable<User> {
        if (this.selectedUser) {
            return of(this.selectedUser)
        } else {
            return params.pipe(
                first(),
                switchMap(data => this.dataService.getUserDetails(data.id)),
                first(),
                tap(user => this.selectedUser = user)
            )
        }
    }


}
