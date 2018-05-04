import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { SnackBarService } from '../../../core/services/snackbar.service';
import { AuthService } from '../../../core/services/auth.service';
import { passwordPattern } from 'app/shared/config/constants';
import { AuthService as LibAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'app/shared/models/user.model';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    form: FormGroup
    isRegisteredButNotActive: boolean
    socialAuthListener$: Subscription
    constructor(
        private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
        private router: Router,
        private authService: AuthService,
        private libAuthService: LibAuthService
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    listenToSocialAuth() {
        this.socialAuthListener$ = this.libAuthService.authState.subscribe((user) => {
            console.log(user)
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


    private buildForm() {
        this.form = this.fb.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
            password: ['', Validators.compose([Validators.required, Validators.pattern(passwordPattern)])],
        })
    }

    onSubmit(loginForm) {
        this.dataService.login(loginForm).subscribe(
            data => {
                this.saveUserDataLocallyAndProceedToProfile(data);
            },
        )
    }

    private saveUserDataLocallyAndProceedToProfile(data: { user: User, token: string }) {
        this.authService.saveToken(data.token)
        this.authService.saveProfile(data.user)
        this.router.navigate(['my-profile'])
    }

    signInWithFB(): void {
        this.listenToSocialAuth();
        this.libAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signInWithGoogle(): void {
        this.listenToSocialAuth();
        this.libAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    }

    ngOnDestroy() {
        if (this.socialAuthListener$) {
            this.socialAuthListener$.unsubscribe();
        }
    }

}
