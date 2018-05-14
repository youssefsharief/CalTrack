import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'app/core/services/data.service';

@Component({
    templateUrl: 'invite-user.component.html',
    styleUrls: ['invite-user.component.scss']
})
export class InviteUserComponent implements OnInit {
    form: FormGroup
    constructor(private fb: FormBuilder,
        private dataService: DataService,
        private sb: SnackBarService,
    ) {  }

    ngOnInit() {
        this.buildForm()
    }

    private buildForm() {
        this.form = this.fb.group({
            email: ['', Validators.compose([Validators.email, Validators.required])],
        })
    }

    onSubmit() {
        this.dataService.inviteUser(this.form.value.email, `${window.location.origin}/signup?email=${this.form.value.email}`).subscribe(
            data => {
                this.sb.emitSuccessSnackBar('Email has been sent successfully')
            },
            error => this.sb.emitWarnSnackBar(error)
        )
    }
}
