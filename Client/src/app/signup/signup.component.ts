import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { SnackBarService } from '../core/services/snackbar.service';
import { User } from '../shared/models/user.model';
import { PublicInfoService } from '../core/services/public.info.service';
import { passwordPattern } from 'app/shared/config/constants';
import { AuthService } from 'app/core/services/auth.service';
import 'rxjs/add/operator/first'

@Component({
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss']
})
export class SignupComponent implements OnInit {
    form: FormGroup

    constructor(private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
        private router: Router,
        private publicInfoService: PublicInfoService,
        private authService: AuthService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.buildForm()
        this.getEmailFromParams()
    }

    private getEmailFromParams() {
        this.route.queryParams.first().subscribe(data => this.form.get('email').setValue(data['email']))
    }

    private buildForm() {
        const group = {
            name: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.pattern(passwordPattern)])],
            confirmPassword: ['', Validators.required],
            maxCalories: [2250, Validators.compose([Validators.required, Validators.min(500), Validators.max(8000)])],
            isTrackingDisplayed: [true],
        }
        group['g-recaptcha-response'] = [null, Validators.required]
        this.form = this.fb.group(group, { validator: this.areEqual })
    }

    private areEqual(group) {
        return group.get('password').value === group.get('confirmPassword').value ? null : { areEqual: true }
    }

    signup() {
        const payload = Object.assign(this.form.value, {})
        delete payload.confirmPassword
        this.dataService.signup(payload).subscribe(
            data => {
                this.authService.saveToken(data.token)
                this.authService.saveProfile(data.user)
                this.router.navigate(['my-profile'])
            },
            error => this.sb.emitErrorSnackBar(error.msg)
        )
    }

    signupSecurely() {
        const payload = Object.assign(this.form.value, {})
        delete payload.confirmPassword
        this.dataService.signupSecurely(payload).subscribe(
            data => {
                this.publicInfoService.setEmail(this.form.value.email)
                this.publicInfoService.setPass(this.form.value.password)
                this.router.navigate(['/signup/activate'])
            },
            error => {
                this.sb.emitErrorSnackBar(error.msg)
            }
        )
    }
}
