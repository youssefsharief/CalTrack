import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DateUtilityService } from 'app/core/services/date-utility.service';
import { Meal } from 'app/shared/models/meal.model';

@Component({
    selector: 'app-meal-form',
    templateUrl: 'meal-form.component.html',
    styleUrls: ['meal-form.component.scss']
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
            date: [this.meal ? new Date(this.meal.date.replace('Z', '')) : new Date(Date.now()), Validators.required],
            time: [this.meal ? this.meal.date.replace('Z', '') : new Date(Date.now()), Validators.required],
            numOfCalories: [this.meal ? Number(this.meal.numOfCalories).toFixed(1) : '', Validators.compose([Validators.min(0), Validators.max(3000)])],
        })
    }

}
