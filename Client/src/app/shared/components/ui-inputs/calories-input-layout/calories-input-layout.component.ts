import { Component, Input } from '@angular/core';
import { caloriesErrorMessage } from 'app/shared/config/constants';

@Component({
    selector: 'app-calories-input-layout',
    templateUrl: 'calories-input-layout.component.html',
    styleUrls: ['calories-input-layout.component.scss']
})
export class CaloriesInputLayoutComponent {
    public errorMessage = caloriesErrorMessage;
    @Input() isDisplayingErrorMessage: Boolean
    @Input() label = 'Calories'

}
