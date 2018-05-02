import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meal } from '../../../models/meal.model';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-meal-form',
    templateUrl: 'meal-form.component.html',
})
export class MealFormComponent implements OnInit {
    form: FormGroup
    @Input() meal?: Meal
    @Output() submitted = new EventEmitter();

    constructor(
        private fb: FormBuilder,
        private datePipe: DatePipe
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    onSubmit() {
        this.submitted.emit({
            name: this.form.value.name,
            date: this.transformDate(this.form.value.date, this.form.value.time),
            numOfCalories: this.form.value.numOfCalories ? this.form.value.numOfCalories : undefined
        });
    }

    private transformDate(date, time) {
        return new Date(this.datePipe.transform(date, 'yyyy-MM-dd') + ' ' + this.datePipe.transform(time, 'HH:MM:ss'));
    }

    private buildForm() {
        this.form = this.fb.group({
            name: [this.meal ? this.meal.name : '', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            date: [this.meal ? this.meal.date : ''],
            time: [this.meal ? this.meal.time : ''],
            numOfCalories: [this.meal ? this.meal.numOfCalories : ''],
        })
    }

}
