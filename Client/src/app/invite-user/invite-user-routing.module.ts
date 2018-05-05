import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteUserComponent } from 'app/invite-user/invite-user.component';


const routes: Routes = [
    { path: '', component: InviteUserComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InviteUserRoutingModule { }
