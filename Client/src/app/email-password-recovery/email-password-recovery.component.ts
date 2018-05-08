import { PublicInfoService } from '../core/services/public.info.service';
import { SnackBarService } from '../core/services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { Router } from '@angular/router';
import { isCaptchaEnabled } from 'app/shared/config/settings';

@Component({
    templateUrl: 'email-password-recovery.component.html',
    styleUrls: ['email-password-recovery.component.scss']
})
export class EmailPasswordRecoveryComponent implements OnInit {
    form: FormGroup
    isCaptchaEnabled = isCaptchaEnabled
    constructor(
        private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
        private router: Router,
        private publicInfoService: PublicInfoService
    ) { }

    ngOnInit() {
        this.buildForm()
    }

    onSubmit(formValue) {
        this.dataService.forgottenPassword(formValue.email).subscribe(
            data => {
                this.publicInfoService.setEmail(formValue.email)
                this.router.navigate(['/email_password_recovery/submit_new_password'])
            },
            error => {
                this.sb.emitErrorSnackBar(error)
            },
        )
    }

    private buildForm() {
        this.form = this.fb.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
        })
    }
}
