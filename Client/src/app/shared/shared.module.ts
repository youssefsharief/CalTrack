import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgProgressModule } from 'ngx-progressbar';
import { AppInputsModule } from 'app/shared/components/ui-inputs/inputs.module';
import { PaginationModule } from 'ngx-bootstrap/pagination/pagination.module';
import { SharedTrimmedModule } from 'app/shared/shared-trimmed.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    NgProgressModule,
    AppInputsModule,
    PaginationModule.forRoot(),
    SharedTrimmedModule
  ],
  providers: [],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgProgressModule,
    AppInputsModule,
    TypeaheadModule,
    PaginationModule,
  ],
})
export class SharedModule { }
