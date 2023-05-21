import { Schema, Types, model, Document } from 'mongoose'

export interface IMenuItem extends Document {
    id : String,
    name: String,
    type: Types.ObjectId,
    price: String,
    number: String,
    ingredients: Types.ObjectId[],
    created: Date,
    updated: Date
}

const menuitemSchema = new Schema<IMenuItem>(
{
    id: {type: String, required: true},
    name: {type: String, reuqired: true},
    type: {type: Schema.Types.ObjectId, ref: 'categories'},
    price: {type: String, required: true},
    number: { type: String, required: true},
    ingredients: [{type: Schema.Types.ObjectId, ref: 'ingredients'}],
    created: { type: Date, default: Date.now},
    updated:{ type: Date, default: Date.now }

})

const menuitems = model<IMenuItem>('menuitems', menuitemSchema)
export default menuitems