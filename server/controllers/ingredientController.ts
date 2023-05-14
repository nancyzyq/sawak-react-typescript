// import {Request, Response, NextFunction} from 'express'
import { Model } from "mongoose"
import  ingredients, { IIngredient } from '../models/ingredients'

export default class IngredientController
{
    public model : Model<IIngredient>

    constructor () {
        this.model = ingredients
    }

    getIngredients () : Promise<IIngredient[] | null>{
        return new Promise((resolve, reject) => {
            this.model.find({}, {
                '_id': 1,
                'id' :1,
                'name': 1,
                'type': 1,
                'created': 1,
                'updated': 1 
            }).then((data: IIngredient[]) => {
                resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }
}
