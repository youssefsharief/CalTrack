import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../core/services/data.service';
import { SnackBarService } from '../../../core/services/snackbar.service';
import { AuthService } from '../../../core/services/auth.service';
import { passwordPattern } from 'app/shared/config/constants';

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
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    googleInit() {
        gapi.load('auth2', () => {
            this.auth2 = gapi.auth2.init({
                client_id: '170990127407-hmj1dvgspn0vbn6bn1q284a9j36eh6mj.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            this.attachSignin(document.getElementById('googleBtn'));
        });
    }

    attachSignin(element) {
        this.auth2.attachClickHandler(element, {},
            (googleUser) => {
                const profile = googleUser.getBasicProfile();
                console.log('Token || ' + googleUser.getAuthResponse().id_token);
                console.log('ID: ' + profile.getId());
                console.log('Name: ' + profile.getName());
                console.log('Image URL: ' + profile.getImageUrl());
                console.log('Email: ' + profile.getEmail());
                const id_token = googleUser.getAuthResponse().id_token;
                console.log('ID Token: ' + id_token);
                this.dataService.verifyTokenFromGoogle(id_token).subscribe(
                    data => {
                        this.authService.saveToken(data.token)
                        this.authService.saveProfile(data.user)
                        this.router.navigate(['empty'])
                    },
                    error => console.log(error)
                )
            }, (error) => {
                alert(JSON.stringify(error, undefined, 2));
            });
    }


    // tslint:disable-next-line:use-life-cycle-interface
    ngAfterViewInit() {
        this.googleInit();
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
                this.router.navigate(['empty'])
            },
        )
    }

    googleSignOut() {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }

}
