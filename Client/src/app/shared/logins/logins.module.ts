import { NgModule } from '@angular/core';
import { LoginsComponent } from './logins.component';
import { CommonModule } from '@angular/common';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule, SharedTrimmedModule, RouterModule
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
