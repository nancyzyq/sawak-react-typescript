import express, { Request, Response, NextFunction } from 'express'
import IngredientController from '../controllers/ingredientController'

const ingredientRouter = express.Router()
const path = '/ingredient'
const ingredientController = new IngredientController()

function getIngredients (req: Request, res: Response, next: NextFunction) {
    ingredientController.getIngredients().then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        res.status(500).send(error)
    })
}

ingredientRouter.get(path, getIngredients)
export default ingredientRouter