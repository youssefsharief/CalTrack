import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/services/auth.service';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { AuthService as LibAuthService } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'my-logins.component.html',
    styleUrls: ['my-logins.component.scss']
})

export class MyLoginsComponent implements OnInit {
    user: User;
    constructor(
        private authService: AuthService,
        private dataService: DataService,
        private libAuthService: LibAuthService,
        private sb: SnackBarService,
        private router: Router
    ) { }

    ngOnInit() {
        this.user = this.authService.getProfile()
    }

    onEdited(data: User) {
        this.authService.saveProfile(data)
        this.user = this.authService.getProfile()
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

    connectFacebook(): void {
        this.libAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
            if (user) {
                this.dataService.connectFacebook(user.authToken).subscribe(
                    data => this.onEdited(data),
                    err => this.sb.emitErrorSnackBar(err)
                )
            }
        });
    }

    connectGoogle(): void {
        this.libAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
            if (user) {
                this.dataService.connectGoogle(user.idToken).subscribe(
                    data => this.onEdited(data),
                    err => this.sb.emitErrorSnackBar(err)
                )
            }
        });
    }


    disconnectLocalLogin() {
        this.dataService.disconnectLocalLogin().subscribe(
            data => {
                this.onEdited(data)
                this.sb.emitSuccessSnackBar('Disonnected Successfully')
            }
        )
    }

    navigateToChangeMyPassword() {
        this.router.navigate(['/my-logins/password'])
    }

    isRemoveLoginDisabled() {
        let count = 3
        if (!this.user.googleId) {
            count--;
        }
        if (!this.user.facebookId) {
            count--;
        }
        if (!this.user.email) {
            count--;
        }
        return count === 1
    }

}
