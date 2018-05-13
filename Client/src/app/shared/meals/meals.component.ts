import { Component, Input, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { SelectedMealService } from 'app/core/services/selected-meal.service';
import { SnackBarService } from 'app/core/services/snackbar.service';
import { DataService } from 'app/core/services/data.service';
import { User } from 'app/shared/models/user.model';
import { DateUtilityService } from 'app/core/services/date-utility.service';
import { CaloriesTrackingSubjectService } from 'app/core/services/calories-tracking-subject.service';
import { Meal } from 'app/shared/models/meal.model';
import { UndoDeleteService } from 'app/core/services/undo-delete.service';

@Component({
    selector: 'app-meals',
    templateUrl: 'meals.component.html',
    styleUrls: ['meals.component.scss']
})

export class MealsComponent implements OnInit {
    @Input() userId: string
    @Input() title: string
    @Input() emptyMealsText: string
    @Output() addClicked = new EventEmitter()
    @Output() editClicked = new EventEmitter()
    meals: Meal[]
    totalItems: number
    bsRangeValue: string
    startTime: string
    endTime: string;
    currentPage: number
    areFilterOptionsDisplayed = false

    constructor(
        private mealsService: SelectedMealService,
        private dataService: DataService,
        private sb: SnackBarService,
        private dateUtilityService: DateUtilityService,
        private caloriesTrackingSubjectService: CaloriesTrackingSubjectService,
        private undoDeleteService: UndoDeleteService,
        private ref: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.fetchMeals({ page: 1 })
    }

    fetchConsideringPaging() {
        if (this.currentPage === 1) {
            this.fetchMeals({ page: 1 })
        } else {
            this.currentPage = 1
        }
    }

    resetFilters() {
        this.bsRangeValue = null;
        this.endTime = null;
        this.startTime = null;
    }

    fetchMeals({ page }) {
        this.dataService.getMeals(this.userId, {
            startDate: this.bsRangeValue ? this.dateUtilityService.convertDateToMediumDate(this.bsRangeValue[0]) : null,
            endDate: this.bsRangeValue ? this.dateUtilityService.convertDateToMediumDate(this.bsRangeValue[1]) : null,
            startTime: this.dateUtilityService.convertDateToMediumTime(this.startTime),
            endTime: this.dateUtilityService.convertDateToMediumTime(this.endTime),
            skip: (page - 1) * 10 || 0
        }).subscribe(
            data => {
                this.meals = data.meals
                this.totalItems = data.count
            },
            error => this.sb.emitErrorSnackBar(error)
            )
    }

    onDeleteClick(item) {
        this.undoDeleteService.init(this.meals, 'Meal').first().subscribe(
            oldItems => {
                if (oldItems) {
                    this.meals = oldItems
                    this.ref.detectChanges()
                } else {
                    this.deleteFromBackend(item._id)
                }
            }
        )
        this.meals = this.meals.filter(meal => meal._id !== item._id)
    }

    private deleteFromBackend(mealId) {
        this.dataService.deleteMeal(this.userId, mealId).subscribe(
            data => {
                this.fetchMeals({ page: this.currentPage })
                this.caloriesTrackingSubjectService.updated$.next()
            },
            error => this.fetchMeals({ page: this.currentPage })
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
