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
            city: [this.meal ? this.meal.city : '', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(3)])],
            gmtMealDifference: [this.meal ? this.meal.gmtMealDifference : 0, Validators.compose([Validators.required, Validators.max(14), Validators.min(-12)])],
        })
    }

}
