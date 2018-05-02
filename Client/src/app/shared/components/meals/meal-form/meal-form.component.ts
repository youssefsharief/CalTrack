import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Meal } from '../../../models/meal.model';

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
    ) {
    }

    ngOnInit() {
        this.buildForm()
    }

    onSubmit() {
        this.submitted.emit(this.form.value);
    }

    private buildForm() {
        this.form = this.fb.group({
            name: [this.meal ? this.meal.name : '', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            date: [this.meal ? this.meal.date : ''],
            time: [this.meal ? this.meal.time : ''],
            calories: [this.meal ? this.meal.calories : 0, Validators.required],
        })
    }

}
