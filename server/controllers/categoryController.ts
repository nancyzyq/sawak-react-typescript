import { Model } from 'mongoose'
import categories, { ICategory } from '../models/categories'

export class CategoryController {
    public model : Model<ICategory>

    constructor () {
        this.model = categories
    }

    getCategories () : Promise<ICategory[] | null> {
        return new Promise ((resolve, reject) => {
            this.model.find({}, {
                '_id': 1,
                'id' :1,
                'name': 1,
                'created': 1,
                'updated': 1
            }).then((data: ICategory[]) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}