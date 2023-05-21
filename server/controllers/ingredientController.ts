// import {Request, Response, NextFunction} from 'express'
import { rejects } from "assert"
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

    crearteIngredient (ingredient: IIngredient) : Promise<IIngredient> {
        return new Promise((resolve, reject) => {
            this.model.create(ingredient).then((data: IIngredient) => {
                resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    updateIngredient (ingredient: IIngredient) : Promise<IIngredient> {
        return new Promise((resolve, reject) => {
            this.model.findOneAndUpdate({ _id: ingredient._id }, {
                $set: {
                    name: ingredient.name,
                    type: ingredient.type,
                    updated: new Date()
                }
            }).then((data: IIngredient | null) => {
                data == null ? reject(new Error('ingredient not found')) : resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    deleteIngredient (id: string) : Promise<string> {
        return new Promise((resolve, reject) => {
            this.model.deleteOne({_id: id}).then((result) => {
                result.deletedCount == 1 ? resolve(id) : reject(new Error('ingredient not found'))
            }).catch((err: any) => {
                reject(err)
            })
        })
    }
}
