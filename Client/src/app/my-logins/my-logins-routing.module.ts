import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLoginsComponent } from 'app/my-logins/my-logins.component';


const routes: Routes = [
    { path: '', component: MyLoginsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyLoginsRoutingModule { }
