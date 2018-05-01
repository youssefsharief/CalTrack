import { Meal } from 'app/shared/models/meal.model';

export interface User {
    name: string
    email: string
    password?: string
    role?: string
    _id?: string
    meals?: Meal[]
}


