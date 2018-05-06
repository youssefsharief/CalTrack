import { Component, OnDestroy } from '@angular/core';
import { AuthService as LibAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
    selector: 'app-social-sign-in',
    templateUrl: 'social-sign-in.component.html',
    styleUrls: ['social-sign-in.component.scss']
})

export class SocialSignInComponent implements OnDestroy {
    socialAuthListener$: Subscription

    constructor(
        private libAuthService: LibAuthService,
        private dataService: DataService,
        private router: Router,
        private authService: AuthService,
    ) { }

    listenToSocialAuth() {
        this.socialAuthListener$ = this.libAuthService.authState.subscribe((user) => {
            if (user && user.authToken) {
                const sub = user.provider === 'FACEBOOK' ? this.dataService.oAuthFacebook(user.authToken) : this.dataService.oAuthGoogle(user.idToken)
                sub.subscribe(
                    data => {
                        this.saveUserDataLocallyAndProceedToProfile(data);
                    },
                    error => {
                        console.log(error)
                    }
                )
            }
        });
    }

    private saveUserDataLocallyAndProceedToProfile(data: { user: User, token: string }) {
        this.authService.saveToken(data.token)
        this.authService.saveProfile(data.user)
        this.router.navigate(['my-profile'])
    }


    signInWithFB(): void {
        this.libAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
            console.log(user)
            this.dataService.oAuthFacebook(user.authToken).subscribe(
                data => this.saveUserDataLocallyAndProceedToProfile(data),
                error => console.log(error)
            );
        })
    }

    signInWithGoogle(): void {
        this.libAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
            this.dataService.oAuthFacebook(user.idToken).subscribe(
                data => this.saveUserDataLocallyAndProceedToProfile(data),
                error => console.log(error)
            );
        })
    }

    ngOnDestroy() {
        if (this.socialAuthListener$) {
            this.socialAuthListener$.unsubscribe();
        }
    }
}
