import { Model } from 'mongoose'
import { ICategory } from '../models/categories'
import menuitems, { IMenuItem } from '../models/menuitems'

export default class MenuItemController {
    public model : Model<IMenuItem>

    constructor () {
        this.model = menuitems
    }

    getMenuItems () : Promise<IMenuItem[] | null> {
        return new Promise((resolve, reject) => {
            this.model.find({}, {'_id': 0}).populate({
                path: 'ingredients',
                model: 'ingredients',
                select: {'_id': 0}
            }).populate({
                path: 'type',
                model: 'categories',
                select: 'name'
            }).then((data) => { 
                resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    createMenuItem (menuitem: IMenuItem) : Promise<IMenuItem> {
        return new Promise((resolve, reject) => {
            this.model.create(menuitem).then((data: IMenuItem) => {
                resolve(data)
            }).catch((err: any) => {
                reject(err)
            })
        })
    }

    updateMenuItem (menuitem: IMenuItem) : Promise<IMenuItem> {
        return new Promise((resolve, reject) => {
            this.model.findOneAndUpdate({_id: menuitem._id}, {
                $set: {
                    ingredients: [],
                    type: menuitem.type,
                    price: menuitem.price,
                    name: menuitem.name,
                    number: menuitem.number

                }
            }).then((item: IMenuItem | null) => {
                if (item == null) {
                    reject(new Error('Menuitme not found'))
                } else {
                    if (menuitem.ingredients && menuitem.ingredients.length > 0) {
                        this.model.findOneAndUpdate({_id: menuitem.id}, {
                            $push: { ingredients: { $each: menuitem.ingredients } } 
                        }).then((data: IMenuItem | null) => {
                            data == null ? reject(new Error('Menuitme not found')) : resolve(data)
                        }).catch((err: any) => {
                            reject(err)
                        })
                    }
                }
            }).catch((err: any) => {
                reject(err)
            })
        })
    }
}