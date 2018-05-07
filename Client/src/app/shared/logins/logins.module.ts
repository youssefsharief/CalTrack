import { NgModule } from '@angular/core';
import { LoginsComponent } from './logins.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginsComponent,
    ],
    exports: [
        LoginsComponent,
    ]
})
export class LoginsModule {

}
