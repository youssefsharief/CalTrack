import { Meal } from 'app/shared/models/meal.model';

export interface User {
    name: string
    email?: string
    maxCalories?: number
    isTrackingDisplayed: boolean
    password?: string
    role?: string
    _id?: string
    meals?: Meal[]
    facebookId?: string;
    googleId?: string;
    googleEmail?: string;
    facebookEmail?: string;
}


