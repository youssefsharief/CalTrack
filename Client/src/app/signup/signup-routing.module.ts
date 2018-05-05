import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from 'app/signup/signup.component';
import { SignupSuccessComponent } from 'app/signup/signup-success/signup-success.component';
import { ActivateAfterSignupComponent } from 'app/signup/activate-after-signup/activate-after-signup.component';


const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'activate', component: ActivateAfterSignupComponent },
    { path: 'success', component: SignupSuccessComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule { }
