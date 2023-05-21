import { Model } from 'mongoose'
import { resolve } from 'path'
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

    createCategory (category : ICategory) : Promise<ICategory> {
        return new Promise((resolve, reject) => {
            this.model.create(category).then((data: ICategory) => {
                resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    updateCategory (category: ICategory) : Promise<ICategory> {
        return new Promise((resolve, reject) => {
            this.model.findOneAndUpdate({_id: category._id},{
                $set: {
                    name: category.name
                }
            }).then((data: ICategory | null) => {
                data == null ? reject(new Error('category not found')) : resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    deleteCategory (id: string) : Promise<string> {
        return new Promise((resolve, reject) => {
            this.model.deleteOne({_id: id}).then((data: any) => {
                if(data.deletedCount == 1) {
                    resolve(id)
                } else {
                    reject(new Error('category not found'))
                }
            }).catch((err: any) => {
                reject(err)
            })
        })
    }
}