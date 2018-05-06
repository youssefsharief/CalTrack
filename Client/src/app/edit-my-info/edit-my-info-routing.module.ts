

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMyInfoComponent } from 'app/edit-my-info/edit-my-info.component';


const routes: Routes = [
    { path: '', component: EditMyInfoComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditMyInfoRoutingModule { }
