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
        this.disableOrEnableCheckbox()
        this.form.valueChanges.subscribe(x => {
            this.disableOrEnableCheckbox()
        })
    }

    private buildForm() {
        this.form = this.fb.group({
            name: [this.user.name, Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            email: [this.user.email, Validators.compose([Validators.required, Validators.email])],
            maxCalories: [this.user.maxCalories, Validators.compose([Validators.required, Validators.min(500), Validators.max(8000)])],
            isTrackingDisplayed: [this.user.isTrackingDisplayed],
        })
    }

    disableOrEnableCheckbox() {
        // if (!this.form.get('maxCalories').value) {
        //     this.form.get('isTrackingDisplayed').disable()
        // } else {
        //     console.log('aaaaaa')
        //     this.form.get('isTrackingDisplayed').enable()
        // }
    }

    onSubmit() {
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
