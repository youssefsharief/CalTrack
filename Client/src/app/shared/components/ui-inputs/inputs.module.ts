import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailInputLayoutComponent } from 'app/shared/components/ui-inputs/email-input-layout/email-input-layout.component';
import { NameInputLayoutComponent } from 'app/shared/components/ui-inputs/name-input-layout/name-input-layout.component';
import { SubmitButtonComponent } from 'app/shared/components/ui-inputs/submit-button/submit-button.component';
import { PasswordInputlayoutComponent } from 'app/shared/components/ui-inputs/password-input-layout/password-input-layout.component';
import { DefaultInputLayoutComponent } from 'app/shared/components/ui-inputs/default-input-layout/default-input-layout.component';
import { ConfirmPasswordInputLayoutComponent } from 'app/shared/components/ui-inputs/confirm-password-input-layout/confirm-password-input-layout.component';
import { CodeInputLayoutComponent } from 'app/shared/components/ui-inputs/code-input-layout/code-input-layout.component';
import { CaloriesInputLayoutComponent } from 'app/shared/components/ui-inputs/calories-input-layout/calories-input-layout.component';
import { MaxCaloriesInputLayoutComponent } from 'app/shared/components/ui-inputs/max-calories-input-layout/max-calories-input-layout.component';
import { DisplayTrackingInputCheckboxLayoutComponent } from 'app/shared/components/ui-inputs/display-tracking-input-checkbox-layout/display-tracking-input-checkbox-layout.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    SubmitButtonComponent,
    EmailInputLayoutComponent,
    NameInputLayoutComponent,
    PasswordInputlayoutComponent,
    DefaultInputLayoutComponent,
    ConfirmPasswordInputLayoutComponent,
    CodeInputLayoutComponent,
    CaloriesInputLayoutComponent,
    MaxCaloriesInputLayoutComponent,
    DisplayTrackingInputCheckboxLayoutComponent
  ],
  declarations: [
    SubmitButtonComponent,
    EmailInputLayoutComponent,
    PasswordInputlayoutComponent,
    NameInputLayoutComponent,
    DefaultInputLayoutComponent,
    ConfirmPasswordInputLayoutComponent,
    CodeInputLayoutComponent,
    CaloriesInputLayoutComponent,
    MaxCaloriesInputLayoutComponent,
    DisplayTrackingInputCheckboxLayoutComponent
  ],
})
export class AppInputsModule { }
