import { Model } from 'mongoose'
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
}