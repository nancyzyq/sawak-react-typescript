import {Schema, model, Document} from 'mongoose'

export interface ICategory extends Document {
    id: string,
    name: string,
    created: Date,
    updated: Date
}

const categorySchema = new Schema<ICategory> (
{
    id: {type: String, required: true},
    name: {type: String, required: true},
    created: {type: Date, default: Date.now()},
    updated: {type: Date, default: Date.now()}
},
{
    collection: 'categories'
})

const categories = model<ICategory>('categories', categorySchema)
export default categories
