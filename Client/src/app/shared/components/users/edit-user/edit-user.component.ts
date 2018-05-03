import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../models/user.model';
import { Observable } from 'rxjs/Observable';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: 'edit-user.component.html',
})
export class EditUserComponent implements OnInit {
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
            email: [{value: this.user.email, disabled: true}],
            name: [this.user.name, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            maxCalories: [this.user.maxCalories, Validators.compose([Validators.required, Validators.min(500), Validators.max(8000)])],
            isTrackingDisplayed: [this.user.isTrackingDisplayed],
        })
    }

    onSubmit() {
        console.log(this.form.value)
        this.dataService.updateUserInfo(this.user._id, this.form.value).subscribe(
            data => {
                this.sb.emitSuccessSnackBar()
                this.edited.emit(data)
            },
            error => {
                this.sb.emitErrorSnackBar(error)
            }
        )
    }

}
