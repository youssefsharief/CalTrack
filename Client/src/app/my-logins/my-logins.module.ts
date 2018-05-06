import { NgModule } from '@angular/core';
import { MyLoginsComponent } from './my-logins.component';
import { MyLoginsRoutingModule } from 'app/my-logins/my-logins-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MyLoginsRoutingModule,
        CommonModule
    ],
    declarations: [
        MyLoginsComponent,
    ],
})
export class MyLoginsModule {

}
