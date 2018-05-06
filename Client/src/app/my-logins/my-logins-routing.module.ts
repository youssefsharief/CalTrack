import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLoginsComponent } from 'app/my-logins/my-logins.component';
import { AddLocalLoginComponent } from 'app/my-logins/add-local-login/add-local-login.component';
import { ChangeMyPasswordUsingOldPasswordComponent } from 'app/my-logins/change-my-password-using-old-password/change-my-password-using-old-password.component';


const routes: Routes = [
    { path: '', component: MyLoginsComponent },
    { path: 'add-local-login', component: AddLocalLoginComponent },
    { path: 'password', component: ChangeMyPasswordUsingOldPasswordComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyLoginsRoutingModule { }
