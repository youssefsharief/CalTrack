import { Meal } from '../../../models/meal.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';

@Component({
    selector: 'app-meals',
    templateUrl: 'meals.component.html',
    styleUrls: ['meals.component.scss']
})

export class MealsComponent implements OnInit {
    @Input() userId: string
    @Input() title: string
    @Output() addClicked = new EventEmitter()
    @Output() editClicked = new EventEmitter()
    meals: Meal[] = []
    totalItems: number
    startDate: string
    endDate: string;
    startTime: string
    endTime: string;
    currentPage: number

    constructor(
        private mealsService: SelectedMealService,
        private dataService: DataService,
        private sb: SnackBarService,

    ) { }

    ngOnInit() {
        this.fetchMeals({ page: 1 })
    }

    public fetchConsideringPaging() {
        if (this.currentPage === 1) {
            this.fetchMeals({ page: 1 })
        } else {
            this.currentPage = 1
        }
    }

    public fetchMeals({ page }) {
        this.dataService.getMeals(this.userId, {
            startDate: this.startDate, endDate: this.endDate, startTime: this.startTime, endTime: this.endTime, skip: (page - 1) * 10
        }).first().subscribe(
            data => {
                this.meals = data.meals
                this.totalItems = data.count
            },
            error => this.sb.emitErrorSnackBar(error)
            )
    }

    onDeleteClick(item) {
        this.dataService.deleteMeal(this.userId, item._id).subscribe(
            data => this.meals = this.meals.filter(t => t._id !== item._id),
            error => this.sb.emitErrorSnackBar(error)
        )
    }


    onEditMealClick(item: Meal) {
        this.mealsService.saveSelectedMeal(item)
        this.editClicked.emit(item)
    }

    onAddClick() {
        this.addClicked.emit()
    }

}
