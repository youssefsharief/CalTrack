import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meal } from '../../../models/meal.model';
import { DateUtilityService } from 'app/core/services/date-utility.service';

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
        private dateUtilityService: DateUtilityService
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    onSubmit() {
        this.submitted.emit({
            name: this.form.value.name,
            date: this.dateUtilityService.combineDateAndTimeFromUIPickersToDateObject(this.form.value.date, this.form.value.time),
            numOfCalories: this.form.value.numOfCalories ? this.form.value.numOfCalories : undefined
        });
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
