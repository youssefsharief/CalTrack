import { NgModule } from '@angular/core';
import { LoginsComponent } from './logins.component';
import { CommonModule } from '@angular/common';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';

@NgModule({
    imports: [
        CommonModule, SharedTrimmedModule
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
