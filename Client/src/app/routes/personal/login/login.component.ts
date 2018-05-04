import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { SnackBarService } from '../../../core/services/snackbar.service';
import { AuthService } from '../../../core/services/auth.service';
import { passwordPattern } from 'app/shared/config/constants';
import { AuthService as LibAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';



declare var gapi: any
@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup
    isRegisteredButNotActive
    auth2
    constructor(private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
        private router: Router,
        private authService: AuthService,
        private libAuthService: LibAuthService
    ) {
    }

    ngOnInit() {
        this.buildForm()
        this.listenToSocialAuth();
    }

    listenToSocialAuth() {
        this.libAuthService.authState.subscribe((user) => {
            console.log(user)
            if (user && user.authToken) {
                this.dataService.oAuthFacebook(user.authToken).subscribe(
                    data => {
                        console.log(data)
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
                this.authService.saveToken(data.token)
                this.authService.saveProfile(data.user)
                this.router.navigate(['my-profile'])
            },
        )
    }

    googleSignOut() {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

    // signInWithFB(): void {
    //     this.libAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    // }

    // signInWithGoogle(): void {
    //     this.libAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    // }

    // libSignOut(): void {
    //     this.libAuthService.signOut();
    // }
}
