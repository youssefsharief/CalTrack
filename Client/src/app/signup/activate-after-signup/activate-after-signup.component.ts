import { SnackBarService } from '../../core/services/snackbar.service';
import { DataService } from '../../core/services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PublicInfoService } from '../../core/services/public.info.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/services/auth.service';

@Component({
    templateUrl: 'activate-after-signup.component.html',
})
export class ActivateAfterSignupComponent implements OnInit {

    form: FormGroup
    constructor(
        private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
        private publicInfoService: PublicInfoService,
        private router: Router,
        private authService: AuthService
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    private buildForm() {
        this.form = this.fb.group({
            email: [this.publicInfoService.getEmail() || '',
            Validators.compose([Validators.required, Validators.email])],
            activationCode: ['', Validators.compose([Validators.required, Validators.minLength(20), Validators.maxLength(20)])],
        })
    }

    submit({ activationCode, email }) {
        this.dataService.activateFromBackEnd(activationCode, email).subscribe(
            data => {
                this.authService.saveToken(data.token)
                this.authService.saveProfile(data.user)
                this.router.navigate(['my-profile'])
            },
            error => this.sb.emitErrorSnackBar(error.msg)
        )
    }

}
