import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordPattern } from 'app/shared/config/constants';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { PublicInfoService } from 'app/core/services/public.info.service';
import { AuthService } from 'app/core/services/auth.service';

@Component({
    templateUrl: 'add-local-login.component.html',
    styleUrls: ['add-local-login.component.scss']
})
export class AddLocalLoginComponent implements OnInit {

    form: FormGroup
    constructor(private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
        private router: Router,
        private publicInfoService: PublicInfoService,
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    private buildForm() {
        this.form = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, Validators.pattern(passwordPattern)])],
            confirmPassword: ['', Validators.required],
        }, { validator: this.areEqual })
    }

    private areEqual(group) {
        return group.get('password').value === group.get('confirmPassword').value ? null : { areEqual: true }
    }

    connectLocalLogin() {
        this.dataService.connectLocalLogin({email: this.form.value.email, password: this.form.value.password}).subscribe(
            data => {
                this.authService.saveProfile(data)
                this.sb.emitSuccessSnackBar('Connected Successfully')
                this.router.navigate(['my-logins'])
            },
            error => this.sb.emitErrorSnackBar(error.msg)
        )
    }

    connectLocalLoginSecurely() {
        this.dataService.connectLocalLoginSecurely({email: this.form.value.email, password: this.form.value.password}).subscribe(
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
