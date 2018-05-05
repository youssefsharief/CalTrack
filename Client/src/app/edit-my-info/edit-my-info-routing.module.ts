

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMyInfoComponent } from 'app/edit-my-info/edit-my-info.component';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/edit-my-info/change-my-password-using-old-password/change-my-password-using-old-password.component';


const routes: Routes = [
    { path: '', component: EditMyInfoComponent },
    { path: 'password', component: ChangeMyPasswordUsingOldPasswordComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditMyInfoRoutingModule { }
