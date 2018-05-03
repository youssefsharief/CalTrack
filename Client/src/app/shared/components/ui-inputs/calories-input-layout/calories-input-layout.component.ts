import { Component, Input } from '@angular/core';
import { codeErrorMessage } from 'app/shared/config/constants';

@Component({
    selector: 'app-calories-input-layout',
    templateUrl: 'calories-input-layout.component.html',
    styleUrls: ['calories-input-layout.component.scss']
})
export class CaloriesInputLayoutComponent {
    public errorMessage = codeErrorMessage;
    @Input() isNotValid: Boolean
    @Input() label = 'Calories'

}
