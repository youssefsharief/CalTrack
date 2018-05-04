import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { passwordErrorMessage } from 'app/shared/config/constants';

@Component({
    selector: 'app-password-input-layout',
    templateUrl: 'password-input-layout.component.html',
})
export class PasswordInputlayoutComponent {
    public errorMessage = passwordErrorMessage;
    @Input() isDisplayingErrorMessage: Boolean
    @Input() label = 'Password'
}
