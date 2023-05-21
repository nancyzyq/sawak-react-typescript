import { Schema, model, Document } from "mongoose"

export interface IIngredient extends Document {
    id: string,
    name: string,
    type: string,
    created: Date,
    updated: Date
}

const ingredientSchema = new Schema<IIngredient> (
{
    id: { type: String, required: true },
    name: { type: String, required: true},
    type: { type: String, required: true },
    created: { type: Date, default: Date.now},
    updated:{ type: Date, default: Date.now }
},
{
    collection: 'ingredients'
})
const ingredients = model<IIngredient>('ingredients', ingredientSchema)
export default ingredients
