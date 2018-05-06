import { AuthService } from '../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs/Observable';
import { AuthService as LibAuthService } from 'angularx-social-login';
import { DataService } from 'app/core/services/data.service';
import { FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

@Component({
    templateUrl: 'edit-my-info.component.html',
})

export class EditMyInfoComponent implements OnInit {
    public user
    socialAuthListener$: Subscription
    userReceivedFromSocialMedia = new Subject<any>();
    constructor(
        private authService: AuthService,
        private libAuthService: LibAuthService,
        private dataService: DataService,

    ) { }

    ngOnInit() {
        this.user = this.authService.getProfile()
    }

    onEdited(data: User) {
        this.authService.saveProfile(data)
        this.user = this.authService.getProfile()
    }

    connectFacebook(): void {
        this.listenToSocialAuth();
        this.userReceivedFromSocialMedia.flatMap(user => this.dataService.connectFacebook(user.authToken)).subscribe(
                data => this.onEdited(data),
                error => console.log(error)
            )
        this.libAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    connectGoogle(): void {
        this.listenToSocialAuth();
        this.userReceivedFromSocialMedia.flatMap(user => this.dataService.connectGoogle(user.idToken)).subscribe(
                data => this.onEdited(data),
                error => console.log(error)
            )
        this.libAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    listenToSocialAuth() {
        this.socialAuthListener$ = this.libAuthService.authState.subscribe((user) => {
            if (user && user.authToken) {
                this.userReceivedFromSocialMedia.next(user)
            }
        });
    }

    disconnectFacebook() {
        this.dataService.disconnectFacebook().subscribe(
            data => this.onEdited(data)
        )
    }

    disconnectGoogle() {
        this.dataService.disconnectGoogle().subscribe(
            data => this.onEdited(data)
        )
    }
}
