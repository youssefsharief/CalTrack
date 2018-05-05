import { NgModule } from '@angular/core';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { EmailPasswordRecoveryRoutingModule } from 'app/email-password-recovery/email-password-recovery-routing.module';
import { InviteUserComponent } from 'app/invite-user/invite-user.component';
import { InviteUserRoutingModule } from 'app/invite-user/invite-user-routing.module';

@NgModule({
    imports: [
        SharedFormsModule,
        InviteUserRoutingModule
    ],
    declarations: [
        InviteUserComponent
    ],
})
export class EmailPasswordRecoveryModule {

}

