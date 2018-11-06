import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';

@Component({
    selector: 'app-user-form',
    templateUrl: 'user-form.component.html',
    styleUrls: ['user-form.component.scss']
})
export class UserFormComponent implements OnInit {
    @Input() user: User
    @Output() edited = new EventEmitter()
    public form: FormGroup
    constructor(
        private dataService: DataService,
        private fb: FormBuilder,
        private sb: SnackBarService,
    ) { }

    ngOnInit() {
        this.buildForm()
    }

    private buildForm() {
        this.form = this.fb.group({
            name: [this.user.name, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            maxCalories: [this.user.maxCalories, Validators.compose([Validators.required, Validators.min(500), Validators.max(8000)])],
            isTrackingDisplayed: [this.user.isTrackingDisplayed],
        })
    }

    onSubmit() {
        this.dataService.updateUserInfo(this.user._id, this.form.value).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.edited.emit(data)
            },
            error => {
                this.sb.emitErrorSnackBar(error.msg)
            }
        )
    }
}
