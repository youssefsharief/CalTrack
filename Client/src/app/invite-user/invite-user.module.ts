import { NgModule } from '@angular/core';
import { SharedFormsModule } from 'app/shared/shared-forms.module.ts/shared-forms.module';
import { InviteUserComponent } from 'app/invite-user/invite-user.component';
import { InviteUserRoutingModule } from 'app/invite-user/invite-user-routing.module';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';

@NgModule({
    imports: [
        SharedFormsModule,
        InviteUserRoutingModule,
        SharedTrimmedModule
    ],
    declarations: [
        InviteUserComponent
    ],
})
export class InviteUserModule {

}

