import { Meal } from '../../../models/meal.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectedMealService } from 'app/core/services/selected-meal.service';

@Component({
    selector: 'app-meals',
    templateUrl: 'meals.component.html',
    styleUrls: ['meals.component.scss']
})

export class MealsComponent {
    @Input() meals: Meal[]
    @Input() title: string
    @Output() addClicked = new EventEmitter()
    @Output() editClicked = new EventEmitter()
    @Output() deleteClicked = new EventEmitter()

    constructor(
        private mealsService: SelectedMealService,
    ) { }

    onDeleteClick(item) {
        this.deleteClicked.emit(item)
    }

    onEditMealClick(item: Meal) {
        this.mealsService.saveSelectedMeal(item)
        this.editClicked.emit(item)
    }

    onAddClick() {
        this.addClicked.emit()
    }

}
