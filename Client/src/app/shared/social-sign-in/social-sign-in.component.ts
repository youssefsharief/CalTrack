import { Component, OnDestroy } from '@angular/core';
import { AuthService as LibAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';
import { SnackBarService } from 'app/core/services/snackbar.service';

@Component({
    selector: 'app-social-sign-in',
    templateUrl: 'social-sign-in.component.html',
    styleUrls: ['social-sign-in.component.scss']
})

export class SocialSignInComponent {

    constructor(
        private libAuthService: LibAuthService,
        private dataService: DataService,
        private router: Router,
        private authService: AuthService,
        private sb: SnackBarService
    ) { }

    private saveUserDataLocallyAndProceedToProfile(data: { user: User, token: string }) {
        this.authService.saveToken(data.token)
        this.authService.saveProfile(data.user)
        this.router.navigate(['my-profile'])
    }


    signInWithFB(): void {
        this.libAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
            this.dataService.oAuthFacebook(user.authToken).subscribe(
                data => this.saveUserDataLocallyAndProceedToProfile(data),
                error => this.sb.emitErrorSnackBar('Sorry.. An error occurred while you are trying to login')
            );
        })
    }

    signInWithGoogle(): void {
        this.libAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
            this.dataService.oAuthGoogle(user.idToken).subscribe(
                data => this.saveUserDataLocallyAndProceedToProfile(data),
                error => this.sb.emitErrorSnackBar('Sorry.. An error occurred while you are trying to login')
            );
        })
    }
}
