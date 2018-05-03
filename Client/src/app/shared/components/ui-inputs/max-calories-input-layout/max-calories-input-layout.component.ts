import { Component, Input } from '@angular/core';
import { maxCaloriesErrorMessage } from 'app/shared/config/constants';

@Component({
    selector: 'app-max-calories-input-layout',
    templateUrl: 'max-calories-input-layout.component.html',
    styleUrls: ['max-calories-input-layout.component.scss']
})
export class MaxCaloriesInputLayoutComponent {
    public errorMessage = maxCaloriesErrorMessage;
    @Input() isNotValid: Boolean
    @Input() label = 'Maximum Daily Intake of Calories'

}
